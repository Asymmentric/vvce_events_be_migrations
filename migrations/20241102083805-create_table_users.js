'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      middle_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      org_id: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      department_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM(['admin', 'student', 'faculty', 'hod', 'dean', 'principal']),
        allowNull: false
      },
      college_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 1,
          max: 10,
        }
      },
      semester: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 1,
          max: 20
        }
      },
      degree: {
        type: DataTypes.UUID,
        allowNull: true
      },
      last_active: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
