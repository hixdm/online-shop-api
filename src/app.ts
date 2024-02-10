require("dotenv").config();
import express from "express";
const app = express();
import bodyParser from "body-parser";
const port = process.env.PORT;
import { userRouter } from "./routers/user.router";
import { authRouter } from "./routers/auth.router";

import { dbConnect } from "./database/database";
import { productRouter } from "./routers/product.router";
import { categoryRouter } from "./routers/category.router";
import { cartRouter } from "./routers/cart.router";

async function main() {
    await dbConnect();
    app.use(bodyParser.json());
    app.use(userRouter);
    app.use(authRouter);
    app.use(productRouter);
    app.use(categoryRouter);
    app.use(cartRouter);

    app.listen(port, () => {
        console.log("server is running");
    });
}

main();
