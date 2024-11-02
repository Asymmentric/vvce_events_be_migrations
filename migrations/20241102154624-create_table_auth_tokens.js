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


    await queryInterface.createTable('auth_tokens', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      is_used: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      is_registered: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      expires_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.addConstraint('auth_tokens', {
      fields: ['user_id', 'email'],
      type: 'check',
      name: 'auth_tokens_user_id_or_email_not_null',
      where: Sequelize.literal(`(user_id IS NOT NULL AND email IS NULL) OR 
        (user_id IS NULL AND email IS NOT NULL)`)
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint('auth_tokens', 'auth_tokens_user_id_or_email_not_null')
    await queryInterface.dropTable('auth_tokens')

  }
};
