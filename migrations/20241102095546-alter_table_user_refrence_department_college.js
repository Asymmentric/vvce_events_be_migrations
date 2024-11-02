'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */

    await queryInterface.addConstraint('users', {
      fields: ['department_id'],
      type: 'foreign key',
      name: 'FK_user_department',
      references: {
        table: 'departments',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('users', {
      fields: ['college_id'],
      type: 'foreign key',
      name: 'FK_user_college',
      references: {
        table: 'colleges',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('departments', {
      fields: ['college_id'],
      type: 'foreign key',
      name: 'FK_department_college',
      references: {
        table: 'colleges',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     */

    await queryInterface.removeConstraint('users', 'FK_user_department')
    await queryInterface.removeConstraint('users', 'FK_user_college')
    await queryInterface.removeConstraint('departments', 'FK_department_college')

  }
};
