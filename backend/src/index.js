import express from "express";
import cors from "cors";

import db from "./db.js";

import router from "./routes.js";
import facultyRouter from "./facultyRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
    console.log(req.method)
    console.log(req.path);
    console.log(req.body);
    next();
})

app.use(router);
app.use("/faculty", facultyRouter);

/*import bcrypt from "bcrypt";

const createAdmin = async (email, name, password) => {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const user = await db.models.users.create({
        name,
        email,
        hash,
    });
    await user.createAdmin({});
}*/

async function main() {
    await db.authenticate();
    //await db.sync({ alter: true }); // uncomment only the first time
    app.listen(5000, () => {
        console.log("Listening on port 3000");
    });

    //await createAdmin("admin@iith.ac.in", "admin", "123");
}

main();
