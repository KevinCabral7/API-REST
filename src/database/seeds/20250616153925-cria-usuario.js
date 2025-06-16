const bcryptjs = require("bcryptjs");
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kevin C.",
          email: "kevinc@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John K.",
          email: "johnk@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down() {},
};
