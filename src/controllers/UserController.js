import User from "../models/User";
import Media from "../models/Media";
class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((e) => e.message),
      });
    }
  }
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["id", "name", "email"],
        include: {
          model: Media,
        },
      });
      return res.json(users);
    } catch (e) {
      return res.json(e);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: ["id", "name", "email"],
        include: {
          model: Media,
        },
      });
      return res.json(user);
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return res.json(e);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userID);

      if (!user) {
        return res.status(400).json({
          errors: ["User doesn't exist"],
        });
      }

      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((e) => e.message),
      });
    }
  }
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userID);

      if (!user) {
        return res.status(400).json({
          errors: ["User doesn't exist"],
        });
      }

      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
