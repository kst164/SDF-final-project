import express from "express";
import { models, isFacultyInTopic, isSubtopicInTopic } from "./schema.js";

const router = express.Router();

router.use((req, res, next) => {
    // TODO: auth
    res.locals = {
        //userType: req.params.userType,
        userType: "admin",
        userId: req.params.userId,
        name: req.params.userType,
        email: req.params.userType,
    }
    next();
});

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
    if (res.locals.userType !== "admin") {
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
    if (res.locals.userType !== "admin") {
        res.sendStatus(403);
        return;
    }
    const deletedCount = await models.Topic.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.sendStatus(deletedCount ? 204: 404);
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
    if (res.locals.userType === "faculty") {
        if (!isFacultyInTopic(res.locals.userId, req.params.id)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (res.locals.userType !== "admin"){
        res.sendStatus(401);
        return;
    }

    const subtopic = await models.Subtopic.create({
        name: req.body.name,
        topicId: req.params.id,
    });
    res.status(201).send({
        name: subtopic.name,
        id: subtopic.id,
    });
});

router.delete("/topics/:topicId/subtopics/:subtopicId", async (req, res) => {
    if (res.locals.userType === "faculty") {
        if (!isFacultyInTopic(res.locals.userId, req.params.id)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (res.locals.userType !== "admin"){
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
})

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
        order: "lectureNumber",
        attributes: ["name", "description", "link"],
        raw: true,
    });
    res.send(lectures);
});

// Request JSON:
// [
//     {
//         name,
//         description?,
//         link,
//     }
// ] 
router.patch("/topics/:topicId/subtopics/:subtopicId/lectures", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }

    if (res.locals.userType === "faculty") {
        if (!isFacultyInTopic(res.locals.userId, req.params.id)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (res.locals.userType !== "admin"){
        res.sendStatus(403);
        return;
    }

    if (!(req.body instanceof Array)) {
        res.status(400).send("body must be an array of lecture objects");
        return;
    }

    const lectures = req.body.map((lec, index) => ({
        lectureNumber: index,
        name: lec.name,
        description: lec.description,
        link: lec.link,
    }));

    try {
        await subtopic.setLectures(lectures);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
        return;
    }

    /*
    const transaction = await sequelize.transaction();

    try {
        await models.Lecture.destroy({ transaction });
        await models.Lecture.bulkCreate(lectures, { transaction });
        await transaction.commit();
    } catch (err) {
        res.sendStatus(500);
        await transaction.rollback();
    }
    */
})

router.get("/topics/:topicId/subtopics/:subtopicId/lectures/:lectureNumber/materials", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }
    const lecs = await subtopic.getLectures({
        where: {
            lectureNumber: req.params.lectureNumber,
        },
    });
    // lecs should have exactly one lecture
    if (lecs.length == 0) {
        res.sendStatus(400);
        return;
    }
    const materials = await lecs[0].getMaterials({
        attributes: ["link"],
        order: "materialNumber",
    })
    
    res.send(materials);
})

// Request JSON:
// [
//     {
//         link,
//     }
// ] 
router.patch("/topics/:topicId/subtopics/:subtopicId/lectures/:lectureNumber/materials", async (req, res) => {
    const subtopic = await models.Subtopic.findByPk(req.params.subtopicId);
    if (subtopic.topicId != req.params.topicId) {
        res.sendStatus(400);
        return;
    }

    if (res.locals.userType === "faculty") {
        if (!isFacultyInTopic(res.locals.userId, req.params.id)) {
            // unauthorized faculty member
            res.sendStatus(403);
            return;
        }
    } else if (res.locals.userType !== "admin"){
        res.sendStatus(403);
        return;
    }

    if (!(req.body instanceof Array)) {
        res.status(400).send("body must be an array of lecture objects");
        return;
    }

    const lecs = await subtopic.getLectures({
        where: {
            lectureNumber: req.params.lectureNumber,
        },
    });
    // lecs should have exactly one lecture
    if (lecs.length == 0) {
        res.sendStatus(400);
        return;
    }

    const materials = req.body.map((mat, index) => ({
        materialNumber: index,
        link: mat.link,
    }));

    try {
        await lecs[0].setMaterials(materials);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
        return;
    }
})

export default router;
