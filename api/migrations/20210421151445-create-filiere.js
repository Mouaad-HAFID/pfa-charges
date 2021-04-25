'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filieres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING,
        allowNull : false
      },
      nbreGroupesTd: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      nbreGroupeTp: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      nbreGroupePFA: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      chefFiliereID : {
        type : Sequelize.INTEGER,
        references : {
          model : 'professeurs',
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('filieres');
  }
};