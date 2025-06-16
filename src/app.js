import dotenv from "dotenv";
dotenv.config();
import { resolve } from "path";

import "./database";

import express from "express";
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import loginRoutes from "./routes/loginRoutes";
import mediaRoutes from "./routes/mediaRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/login/", loginRoutes);
    this.app.use("/media/", mediaRoutes);
  }
}

export default new App().app;
