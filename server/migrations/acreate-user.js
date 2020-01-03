module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        password: { 
          type: Sequelize.STRING,
          allowNull: true,
        },
        full_name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        birthday: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Users'),
  };