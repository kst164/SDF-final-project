import express from "express";

import db from "./db.js";

import router from "./routes.js";

const app = express();

app.use(express.json());

app.use(router);

async function main() {
    await db.authenticate();
    await db.sync({ alter: true });
    app.listen(5000, () => {
        console.log("Listening on port 3000");
    });
}

main();
