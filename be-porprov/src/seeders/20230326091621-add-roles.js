

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'roles',
    [
      {
        id:'superadmin',
        name:'superadmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:'admin',
        name:'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:'dewan',
        name:'dewan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:'juri',
        name:'juri',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:'timer',
        name:'timer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('roles', null, {}),
};