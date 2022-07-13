import express from "express";
//import { Op } from "sequelize";
import { models } from "./schema.js";

const facultyRouter = express.Router(); // /faculty/:facultyId

// Anyone can get, only admins can edit
facultyRouter.use("/:facultyId", (req, res, next) => {
    if (req.method !== "GET" && !res.locals.isAdmin) {
        res.sendStatus(403);
        return;
    }
    next();
})

// Response JSON:
// [
//     {
//         id,
//         name,
//         email,
//     }
// ]
facultyRouter.get("/", async (_req, res) => {
    const faculty = await models.User.findAll({
        attributes: ["id", "name", "email"],
        order: ["createdAt"],
        raw: true,
        include: {
            model: models.Faculty,
            required: true,
        }
    });
    res.send(faculty);
});

// Request JSON:
// {
//     email,
// }
facultyRouter.post("/", async (req, res) => {
    if (!res.locals.isAdmin) {
        res.sendStatus(403);
        return;
    }
    if (!req.body.email) {
        res.sendStatus(400);
        return;
    }
    const user = await models.User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (user === null) {
        // No user with email
        res.sendStatus(404);
        return;
    }
    await user.createFaculty({});
    res.sendStatus(201);
});

// Response JSON:
// {
//     id,
//     name,
//     email,
// }
facultyRouter.get("/:facultyId", async (req, res) => {
    const faculty = await models.User.findByPk(req.params.facultyId);
    if (faculty == null) {
        res.sendStatus(404);
        return;
    }
    res.send({
        id: faculty.userId,
        name: faculty.name,
        email: faculty.email,
    });
})

facultyRouter.delete("/:facultyId", async (req, res) => {
    const deletedCount = await models.Faculty.destroy({
        where: {
            userId: req.params.facultyId,
        }
    });
    res.sendStatus(deletedCount ? 204 : 404);
})

facultyRouter.get("/:facultyId/topics", async (req, res) => {
    const faculty = await models.Faculty.findOne({
        where: {
            userId: req.params.facultyId,
        }
    });
    if (faculty == null) {
        res.sendStatus(404);
        return;
    }
    const topics = await faculty.getTopics({
        attributes: ["id", "name"],
        raw: true,
    });
    res.send(topics);
})

// Request JSON:
// {
//     topicId,
// }
facultyRouter.post("/:facultyId/topics", async (req, res) => {
    const faculty = await models.Faculty.findOne({
        where: {
            userId: req.params.facultyId,
        }
    });
    if (faculty == null) {
        res.sendStatus(404);
        return;
    }
    await faculty.addTopic({ 
        where: {
            id: req.body.topicId,
        }
    })
    res.send(topics);
})

facultyRouter.delete("/:facultyId/topics/:topicId", async (req, res) => {
    const faculty = await models.Faculty.findOne({
        where: {
            userId: req.params.facultyId,
        }
    });
    if (faculty == null) {
        res.sendStatus(404);
        return;
    }
    await faculty.removeTopic({
        where: {
            id: req.params.topicId,
        }
    });
    res.sendStatus(204);
})

export default facultyRouter;
