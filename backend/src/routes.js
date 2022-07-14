import express from "express";
import { Op } from "sequelize";
import { models, isFacultyInTopic, isSubtopicInTopic } from "./schema.js";
import bcrypt from "bcrypt";
import auth from "basic-auth";

const router = express.Router();
const saltRounds = 10;

// Request JSON:
// {
//     name,
//     email,
//     password,
// }
router.post("/signup", async (req, res) => {
    console.log(req.url);
    console.log(req.body);
    const user = await models.User.findOne({
        where: {
            email: req.body.email,
        }
    })
    if (user) {
        res.status(400).send("User already exists");
        return;
    }
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    await models.User.create({
        name: req.body.name,
        email: req.body.email,
        hash,
    })
    res.sendStatus(201);
})

router.use(async (req, res, next) => {
    // TODO: auth
    const creds = auth(req);
    if (!creds) {
        res.sendStatus(401);
        return;
    }
    const user = await models.User.findOne({
        where: {
            email: creds.name,
        },
        attributes: ["id", "name", "email", "hash"],
        include: [
            models.Faculty,
            models.Admin,
        ],
    });
    if (user == null) {
        res.send(403);
        return;
    }

    const match = await bcrypt.compare(creds.pass, user.hash);
    if (!match) {
        res.sendStatus(401);
        return;
    }

    const isFaculty = !(user.faculty == null);
    const isAdmin = !(user.admin == null);
    console.log(isFaculty);
    console.log(isAdmin);
    res.locals = {
        isFaculty,
        isAdmin,
        userId: user.id,
        name: user.name,
        email: user.email,
    }
    next();
});

router.head("/signin/:userType", (req, res) => {
    let code;
    switch (req.params.userType) {
        case "student":
            code = 200;
            break;
        case "faculty":
            code = res.locals.isFaculty ? 200 : 403;
            break;
        case "admin":
            code = res.locals.isAdmin ? 200 : 403;
            break;
        default:
            code = 400;
    }
    res.sendStatus(code);
})

// Response JSON:
// [
//     {
//         name,
//         id,
//         subtopics: [
//             {
//                 name,
//                 id
//             }
//         ]
//     }
// ]
router.get("/topics", async (_req, res) => {
    const topics = await models.Topic.findAll();
    const resp = await Promise.all(topics.map(async (topic) => {
        const subtopics = (await topic.getSubtopics()).map((subtopic) => ({
            name: subtopic.name,
            id: subtopic.id,
        }));
        return {
            name: topic.name,
            id: topic.id,
            subtopics,
        }
    }));
    res.send(resp);
});

// Request JSON:
// {
//     name
// }
//
// Response JSON:
// {
//     name,
//     id
// }
router.post("/topics", async (req, res) => {
    if (!res.locals.isAdmin) {
        res.sendStatus(403);
        return;
    }
    const topic = await models.Topic.create({
        name: req.body.name,
    });
    res.status(201);
    res.send({
        name: topic.name,
        id: topic.id,
    });
});

router.delete("/topics/:id", async (req, res) => {
    if (!res.locals.isAdmin) {
        res.sendStatus(403);
        return;
    }
    const deletedCount = await models.Topic.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.sendStatus(deletedCount ? 204: 404);
});

router.get("/topics/:id/faculty", async (req, res) => {
    const faculty = await models.User.findAll({
        include: {
            model: models.Faculty,
            required: true,
            attributes: [],
            include: {
                model: models.Topic,
                attributes: [],
                where: {
                    id: req.params.id
                }
            }
        }
    })
    res.send(faculty);
})

// Response JSON:
// [
//     {
//         name,
//         id
//     }
// ]
router.get("/topics/:id/subtopics", async (req, res) => {
    const subtopics = await models.Subtopic.findAll({
        where: {
            topicId: req.params.id,
        },
        attributes: ["id", "name"],
        raw: true,
    });
    res.send(subtopics);
});

// Request JSON:
// {
//     subtopicName,
// }
//
// Response JSON:
// {
//     subtopicName,
//     topicId,
// }
router.post("/topics/:id/subtopics", async (req, res) => {
    if (res.locals.isFaculty) {
        if (!isFacultyInTopic(res.locals.userId, req.params.id)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (!res.locals.isAdmin){
        res.sendStatus(403);
        return;
    }

    const subtopic = await models.Subtopic.create({
        name: req.body.name,
        topicId: req.params.id,
    });
    if (subtopic == null) {
        res.sendStatus(404);
        return;
    }
    res.status(201).send({
        name: subtopic.name,
        id: subtopic.id,
    });
});

router.delete("/topics/:topicId/subtopics/:subtopicId", async (req, res) => {
    if (res.locals.isFaculty) {
        if (!isFacultyInTopic(res.locals.userId, req.params.topicId)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (!res.locals.isAdmin){
        res.sendStatus(403);
        return;
    }

    const deletedCount = await models.Subtopic.destroy({
        where: {
            id: req.params.subtopicId,
            topicId: req.params.topicId,
        },
    });
    res.sendStatus(deletedCount ? 204: 404);
});

// Response JSON:
// [
//     {
//         name,
//         description?,
//         link,
//     }
// ] 
router.get("/topics/:topicId/subtopics/:subtopicId/lectures", async (req, res) => {
    if (!isSubtopicInTopic(req.params.subtopicId, req.params.topicId)) {
        res.sendStatus(400);
        return;
    }
    const lectures = await models.Lecture.findAll({
        where: {
            subtopicId: req.params.subtopicId,
        },
        order: ["lectureNumber"],
        attributes: ["name", "description", "link"],
        raw: true,
    });
    res.send(lectures);
});

// Request JSON:
// {
//     name,
//     description?,
//     link,
// }
router.post("/topics/:topicId/subtopics/:subtopicId/lectures", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }

    if (res.locals.isFaculty) {
        if (!isFacultyInTopic(res.locals.userId, req.params.topicId)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (!res.locals.isAdmin){
        res.sendStatus(403);
        return;
    }

    try {
    console.log("g");
        const count = await models.Lecture.count({ where: { subtopicId: subtopic.id } });
    console.log("i");
        await models.Lecture.create({
            lectureNumber: count,
            name: req.body.name,
            description: req.body.description,
            link: req.body.link,
            subtopicId: subtopic.id,
        })
        //await subtopic.createLecture({
            //lectureNumber: (await subtopic.countLectures()),
            //name: req.body.name,
            //description: req.body.description,
            //link: req.body.link,
        //});
        res.sendStatus(201);
    } catch (err) {
    console.log("h");
        console.log(err.message);
        res.sendStatus(500);
        return;
    }
});

router.delete("/topics/:topicId/subtopics/:subtopicId/lectures/:lectureNumber", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }
    if (res.locals.isFaculty) {
        if (!isFacultyInTopic(res.locals.userId, req.params.topicId)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (!res.locals.isAdmin){
        res.sendStatus(403);
        return;
    }

    const transaction = await subtopic.sequelize.transaction();

    try {
        const deletedCount = await models.Lecture.destroy({
            where: {
                subtopicId: subtopic.id,
                lectureNumber: req.params.lectureNumber,
            },
            transaction,
        });
        if (!deletedCount) {
            res.sendStatus(404);
        }
        await models.Lecture.decrement({ lectureNumber: 1 }, {
            where: {
                "lectureNumber": {
                    [Op.gt]: req.params.lectureNumber,
                },
            },
            transaction,
        });
        await transaction.commit();
        res.sendStatus(204);
    } catch (err) {
        await transaction.rollback();
        console.log(err.message);
        console.log(err.stack);
        res.sendStatus(500);
    }
});

// Response JSON: (Array<Lecture>)
// [
//     {
//         name,
//         description?,
//         materials: [
//             link,
//         ]
//     }
// ]
router.get("/topics/:topicId/subtopics/:subtopicId/materials", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }
    const lecs = await models.Lecture.findAll({
        where: {
            subtopicId: req.params.subtopicId,
        },
        attributes: ["name", "description"],
        include: {
            model: models.Material,
            attributes: ["id", "name", "link"],
        },
        order: ["lectureNumber", [{ model: models.Material }, "createdAt", "ASC"]],
    })

    lecs.map(lec => ({
        name: lec.name,
        description: lec.description,
        materials: lec.materials.map((mat) => ({
            name: mat.name,
            id: mat.id,
            link: mat.link,
        })),
    }))
    
    res.send(lecs);
});

// Request JSON:
// {
//     name,
//     link,
// }
router.post("/topics/:topicId/subtopics/:subtopicId/lectures/:lectureNumber/materials", async (req, res) => {
    // TODO: post, not patch
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }

    if (res.locals.isFaculty) {
        if (!isFacultyInTopic(res.locals.userId, req.params.topicId)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (!res.locals.isAdmin){
        res.sendStatus(403);
        return;
    }

    const lec = await models.Lecture.findOne({
        where: {
            subtopicId: req.params.subtopicId,
            lectureNumber: req.params.lectureNumber,
        },
    });

    if (lec == null) {
        res.sendStatus(404);
        return;
    }

    await lec.createMaterial({
        name: req.body.name,
        link: req.body.link,
    });

    res.sendStatus(201);
});

router.delete("/topics/:topicId/subtopics/:subtopicId/lectures/:lectureNumber/materials/:materialId", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }
    if (res.locals.isFaculty) {
        if (!isFacultyInTopic(res.locals.userId, req.params.topicId)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (!res.locals.isAdmin){
        res.sendStatus(403);
        return;
    }

    const lecture = await models.Lecture.findOne({
        where: {
            subtopicId: subtopic.id,
            lectureNumber: req.params.lectureNumber,
        },
        attributes: ["id"],
    })

    const deletedCount = await models.Material.destroy({
        where: {
            lectureId: lecture.id,
            id: req.params.materialId,
        },
    });
    res.sendStatus(deletedCount ? 204 : 404);
});

// Response JSON:
// [
//     {
//         id
//         description,
//         timeLimit,
//         prevScore?,
//         maxScore,
//     }
// ]
//
// questions not included, request exams/:id for that
router.get("/topics/:topicId/subtopics/:subtopicId/exams", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }

    const exams = await models.Exam.findAll({
        where: {
            subtopicId: subtopic.id,
        },
        attributes: ["id", "description", "timeLimit"],
        order: ["createdAt"],
        include: {
            model: models.Score,
            where: {
                studentId: res.locals.userId,
            },
            attributes: ["score"],
        }
    })
    const resp = await Promise.all(exams.map(async exam => {
        const maxScore = await exam.countQuestions();
        const ret = {
            id: exam.id,
            description: exam.description,
            timeLimit: exam.timeLimit,
            maxScore,
        }
        if (exam.scores[0]) {
            ret.prevScore = exam.scores[0].score;
        }
        return ret;
    }))
    res.send(resp);
})

// Request JSON:
// {
//     description,
//     timeLimit,
//     questions: [
//         questionText,
//         isMultiCorrect,
//         options: [
//             optionText,
//             isCorrect,
//         ]
//     ]
// }
//
// Response JSON
// {
//     id,
// }
router.post("/topics/:topicId/subtopics/:subtopicId/exams", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }
    if (res.locals.isFaculty) {
        if (!isFacultyInTopic(res.locals.userId, req.params.topicId)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (!res.locals.isAdmin){
        res.sendStatus(403);
        return;
    }

    const transaction = await subtopic.sequelize.transaction();

    try {
        const exam = await models.Exam.create({
            description: req.body.description,
            timeLimit: req.body.timeLimit,
            subtopicId: req.params.subtopicId,
        }, { transaction });
        console.log("exam entry created")

        for (let index in req.body.questions) {
            const qn = req.body.questions[index];
            console.log(qn);
            const question = await models.Question.create({
                questionNumber: index,
                questionText: qn.questionText,
                isMultiCorrect: qn.isMultiCorrect,
                examId: exam.id,
            }, { transaction });
            for (let index in qn.options) {
                const opt = qn.options[index];
                await models.Option.create({
                    optionNumber: index,
                    optionText: opt.optionText,
                    isCorrect: opt.isCorrect,
                    questionId: question.id,
                }, { transaction })
            }
        }
        await transaction.commit();

        res.send({ id: exam.id });
    } catch (err) {
        console.log(err.message);
        await transaction.rollback();
        res.sendStatus(500);
    }
})

// Response JSON:
// {
//     id
//     description,
//     timeLimit,
//     questions: [
//         questionText,
//         isMultiCorrect,
//         options: [
//             optionText,
//             isCorrect,
//         ]
//     ]
// }
router.get("/topics/:topicId/subtopics/:subtopicId/exams/:examId", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }

    const optionAttrs = ["optionText"];
    if (res.locals.isFaculty || res.locals.isAdmin) {
        optionAttrs.push("isCorrect");
    }

    const exam = await models.Exam.findByPk(req.params.examId, {
        where: {
            subtopicId: subtopic.id,
        },
        attributes: ["id", "description", "timeLimit"],
        order: ["createdAt"],
        //raw: true,
        //nest: true,
        include: {
            model: models.Question,
            attributes: ["questionText", "isMultiCorrect"],
            order: "questionNumber",
            include: {
                model: models.Option,
                attributes: optionAttrs,
                order: "optionNumber",
            }
        }
    })

    if (exam == null) {
        res.sendStatus(400);
        return;
    }
    res.send(exam.toJSON());
    console.log(exam.toJSON());
})

router.delete("/topics/:topicId/subtopics/:subtopicId/exams/:examId", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }

    if (!res.locals.isFaculty && !res.locals.isAdmin) {
        res.sendStatus(403);
        return;
    }

    const deletedCount = await models.Exam.destroy({
        where: {
            subtopicId: subtopic.id,
            id: req.params.examId,
        },
    })
    res.sendStatus(deletedCount ? 204 : 404);
})

// Request JSON:
// {
//     answers: [
//         [ int ] (Array<chosenOptionNumber>)
//     ]
// }
//
// Response JSON
// {
//     score,
//     maxScore,
// }
router.post("/topics/:topicId/subtopics/:subtopicId/exams/:examId/submit", async (req, res) => {
    // FIXME: possibly change post body format
    
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic == null || subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }

    if (!(req.body.answers instanceof Array)) {
        res.sendStatus(400);
        return;
    }

    //const transaction = await subtopic.sequelize.transaction();

    const exam = await models.Exam.findByPk(req.params.examId, {
        where: {
            subtopicId: subtopic.id,
        },
        attributes: ["id", "description", "timeLimit"],
        order: ["createdAt"],
        include: {
            model: models.Question,
            attributes: ["questionText", "isMultiCorrect"],
            order: "questionNumber",
            include: {
                model: models.Option,
                attributes: ["isCorrect"],
                order: "optionNumber",
            }
        }
    });

    if (exam == null) {
        res.sendStatus(403);
    }

    let score = 0;

    for (let index in exam.questions) {
        const question = exam.questions[index];
        const answer = req.body.answers[index];

        if (answer == null || !(answer instanceof Array)) {
            res.sendStatus(400);
            return;
        }

        console.log(answer);
        console.log(question.options.length);
        const areAllOptionsValid = Math.max(...answer) < question.options.length;
        if (!areAllOptionsValid) {
            // eg: only 4 options, but chosen includes the 5th option
            console.log("bad opts")
            res.sendStatus(400);
            return;
        }

        const correctOptions = question.options.map(opt => opt.isCorrect);
        const isCorrect = correctOptions.every((isCorrect, index) => {
            return isCorrect == answer.includes(index);
        })

        if (isCorrect) {
            score++;
        }
    }

    await models.Score.upsert({
        score,
        maxScore: exam.questions.length,
        studentId: res.locals.userId,
        examId: exam.id,
    });
    res.send({
        score,
        maxScore: exam.questions.length,
    });
})

export default router;
