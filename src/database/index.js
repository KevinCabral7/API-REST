import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import User from "../models/User";
import Media from "../models/Media";

const models = [User, Media];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
