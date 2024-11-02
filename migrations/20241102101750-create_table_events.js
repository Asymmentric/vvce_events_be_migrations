'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here. 
     */

    await queryInterface.createTable('circulars', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true
      },
      circular_url: {
        type: Sequelize.TEXT,
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

    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      all_day: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      venue: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      is_online: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      online_link: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      no_of_participants: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      open_to_all: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      no_of_sessions: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      registration_type: {
        type: Sequelize.ENUM(['online', 'platform', 'offline']),
        allowNull: false,
      },
      registration_link: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      circular_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'circulars',
          key: 'id'
        }
      },
      department_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'departments',
          key: 'id'
        }
      },
      college_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'colleges',
          key: 'id'
        }
      },
      created_by: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      updated_by: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });



  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     */

    await queryInterface.dropTable('circulars')
    await queryInterface.dropTable('events')
  }
};
