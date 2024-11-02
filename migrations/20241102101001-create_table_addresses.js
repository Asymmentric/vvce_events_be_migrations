'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */

    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true
      },
      address_line_1: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      address_line_2: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      country: {
        type: Sequelize.UUID,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('countries', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      symbol: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.addConstraint('addresses', {
      fields: ['country'],
      type: 'foreign key',
      name: 'FK_address_country',
      references: {
        table: 'countries',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('colleges', {
      fields: ['address_id'],
      type: 'foreign key',
      name: 'FK_college_address',
      references: {
        table: 'addresses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('addresses')
    await queryInterface.dropTable('countries')
    await queryInterface.removeConstraint('colleges', 'FK_college_address')
    await queryInterface.removeConstraint('addresses', 'FK_address_country')
  }
};
