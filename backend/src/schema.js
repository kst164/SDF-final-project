import sequelize from "./db.js";
import { DataTypes } from "sequelize";

const id = {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
};
const name = {
    type: DataTypes.TEXT,
    allowNull: false,
};
const email = {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true,
    },
};

const User = sequelize.define("users", {
    id,
    name,
    email,
    hash: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

const Faculty = sequelize.define("faculty", {
});
Faculty.belongsTo(User, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "userId",
        allowNull: true,
        unique: true,
    }
})
User.hasOne(Faculty);

const Admin = sequelize.define("admins", {
});
Admin.belongsTo(User, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "userId",
        allowNull: true,
        unique: true,
    }
})
User.hasOne(Admin);

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
        allowNull: false,
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
    id,
    lectureNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        unique: "compIndex",
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
        allowNull: false,
        unique: "compIndex",
    },
});
Subtopic.hasMany(Lecture);

const Material = sequelize.define("materials", {
    id,
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
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
        name: "lectureId",
        allowNull: false,
    },
});
Lecture.hasMany(Material);

const Exam = sequelize.define("exams", {
    id,
    description: DataTypes.TEXT,
    timeLimit: DataTypes.INTEGER.UNSIGNED, // in seconds
});
Exam.belongsTo(Subtopic, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "subtopicId",
        allowNull: false,
    },
});
Subtopic.hasMany(Exam);

const Question = sequelize.define("questions", {
    id,
    questionNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        unique: "compIndex",
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
        allowNull: false,
        unique: "compIndex",
    },
});
Exam.hasMany(Question);

const Option = sequelize.define("options", {
    id,
    optionNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        unique: "compIndex",
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
Option.belongsTo(Question, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "questionId",
        allowNull: false,
        unique: "compIndex",
    },
});
Question.hasMany(Option);

const Score = sequelize.define("scores", {
    id,
    score: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    maxScore: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
});
Score.belongsTo(User, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "studentId",
        allowNull: false,
        unique: "compIndex",
    },
});
Score.belongsTo(Exam, {
    onDelete: "CASCADE",
    foreignKey: {
        name: "examId",
        allowNull: false,
        unique: "compIndex",
    },
});
User.hasMany(Score);
Exam.hasMany(Score);

const models = {
    User,
    Faculty,
    Admin,
    Topic,
    Subtopic,
    FacultyTopics,
    Lecture,
    Material,
    Exam,
    Question,
    Option,
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
