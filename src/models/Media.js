require("dotenv").config();
import Sequelize, { Model } from "sequelize";

export default class Media extends Model {
  static init(sequelize) {
    super.init(
      {
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "filename cannot be null",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.BASE_URL}/images/${this.getDataValue(
              "filename"
            )}`;
          },
        },
      },
      {
        sequelize,
        tableName: "medias",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id" });
  }
}
