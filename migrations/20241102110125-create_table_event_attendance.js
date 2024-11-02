'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('event_attendances', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true
      },
      registration_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'event_registrations',
          key: 'id'
        }
      },
      clock_in: {
        type: Sequelize.DATE,
        allowNull: false
      },
      clock_out: {
        type: Sequelize.DATE,
        allowNull: true
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('event_attendances')
  }
};
