const md5 = require("md5")
const {v4 : uuidv4} = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'user',
    [
      {
        id: uuidv4(),
        role_id:'superadmin',
        username:'kaypang-su',
        password:md5('kaypang'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('user', null, {}),
};