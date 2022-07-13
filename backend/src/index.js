import express from "express";

import db from "./db.js";

import router from "./routes.js";
import facultyRooter from "./facultyRouter.js";

const app = express();

app.use(express.json());

app.use(router);
app.use("/faculty", facultyRooter);

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
    //await db.sync({ alter: true });
    app.listen(5000, () => {
        console.log("Listening on port 3000");
    });

    //await createAdmin("admin@iith.ac.in", "admin", "123");
}

main();
