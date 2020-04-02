module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('address', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_details: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }),

  down: (queryInterface) => queryInterface.dropTable('users'),
};
