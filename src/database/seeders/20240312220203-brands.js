'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    return queryInterface.bulkInsert('categories', [
      { name: 'Tio João', created_at: date, updated_at: date },
      { name: 'Betânia', created_at: date, updated_at: date },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('brands', null, {})
  }
};
