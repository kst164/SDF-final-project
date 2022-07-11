import sequelize from "./db.js";
import { DataTypes } from "sequelize";

const id = {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: "id",
};
const name = {
    type: DataTypes.TEXT,
    allowNull: false,
};
const email = {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
        isEmail: true,
    },
};

const Student = sequelize.define("students", {
    id,
    name,
    email,
});

const Faculty = sequelize.define("faculty", {
    id,
    name,
    email,
});

const Admin = sequelize.define("admins", {
    id,
    name,
    email,
});

const Topic = sequelize.define("topics", {
    id,
    name,
});

const Subtopic = sequelize.define("subtopics", {
    id,
    name,
});
Subtopic.belongsTo(Topic, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "topicId",
    },
});
Topic.hasMany(Subtopic);

const FacultyTopics = sequelize.define("faculty_topics", {
    id,
});
Faculty.belongsToMany(Topic, {
    onDelete: "CASCADE",
    through: FacultyTopics,
});
Topic.belongsToMany(Faculty, {
    onDelete: "CASCADE",
    through: FacultyTopics,
});

const Lecture = sequelize.define("lectures", {
    lectureNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    name,
    description: DataTypes.TEXT,
    link: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isURL: true,
        },
    },
});
Lecture.belongsTo(Subtopic, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "subtopicId",
        primaryKey: true,
    },
});
Subtopic.hasMany(Lecture);

const Material = sequelize.define("materials", {
    materialNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isURL: true,
        },
    },
});
Material.belongsTo(Lecture, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "subtopicId",
        primaryKey: true,
    },
});
Lecture.hasMany(Material);

const Exam = sequelize.define("exams", {
    examNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        unique: "compIndex",
        primaryKey: true,
    },
    description: DataTypes.TEXT,
    timeLimit: DataTypes.TIME,
});
Exam.belongsTo(Subtopic, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "subtopicId",
        primaryKey: true,
    },
});
Subtopic.hasMany(Exam);

const Question = sequelize.define("questions", {
    questionNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    questionText: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    isMultiCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});
Question.belongsTo(Exam, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "examId",
        primaryKey: true,
    },
});
Exam.hasMany(Question);

const QuestionOption = sequelize.define("question_options", {
    optionNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        unique: "compIndex",
        primaryKey: true,
    },
    optionText: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});
QuestionOption.belongsTo(Question, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "questionId",
        primaryKey: true,
    },
});
Question.hasMany(QuestionOption);

const Score = sequelize.define("scores", {
    score: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    maxScore: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
});
Score.belongsTo(Student, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "studentId",
        primaryKey: true,
    },
});
Score.belongsTo(Exam, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "examId",
        primaryKey: true,
    },
});
Student.hasMany(Score);
Exam.hasMany(Score);

const models = {
    Student,
    Faculty,
    Admin,
    Topic,
    Subtopic,
    FacultyTopics,
    Lecture,
    Material,
    Exam,
    Question,
    QuestionOption,
    Score,
};

// facultyId => [ topicId ]
const facultyTopics = async (facultyId) => {
    const topics = await Topic.findAll({
        where: {
            "$Faculty.id$": facultyId,
        },
        attributes: ["id", "name"],
        include: {
            model: Faculty,
            attributes: [],
        },
    });
    return topics.map((topic) => ({
        id: topic.id,
        name: topic.name,
    }));
};

const topicFaculty = async (topicId) => {
    const faculty = await Faculty.findAll({
        where: {
            "$Topic.id$": topicId,
        },
        attributes: ["id", "name"],
        include: {
            model: Topic,
            attributes: [],
        },
    });
    return faculty.map((faculty) => ({
        id: faculty.id,
        name: faculty.name,
    }));
};

const isFacultyInTopic = async (facultyId, topicId) => {
    const entry = await FacultyTopics.findOne({
        where: {
            facultyId,
            topicId,
        },
        attributes: ["id"],
    });
    return entry !== null;
};

const isSubtopicInTopic = async (subtopicId, topicId) => {
    const subtopic = await Subtopic.findByPk(subtopicId);
    return subtopic.topicId == topicId;
};

export {
    models,
    facultyTopics,
    topicFaculty,
    isFacultyInTopic,
    isSubtopicInTopic,
};
