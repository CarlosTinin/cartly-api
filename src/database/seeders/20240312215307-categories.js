'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    
    return queryInterface.bulkInsert('categories', [
      { name: 'Padaria', created_at: date, updated_at: date },
      { name: 'Açougue', created_at: date, updated_at: date },
      { name: 'Mercearia', created_at: date, updated_at: date },
      { name: 'Matinais', created_at: date, updated_at: date },
      { name: 'Frios e Laticínios', created_at: date, updated_at: date },
      { name: 'Bebidas', created_at: date, updated_at: date },
      { name: 'Utilidades', created_at: date, updated_at: date },
      { name: 'Domésticos', created_at: date, updated_at: date },
      { name: 'Limpeza', created_at: date, updated_at: date },
      { name: 'Higiene', created_at: date, updated_at: date },
      { name: 'Hortifruti', created_at: date, updated_at: date },
      { name: 'Pet Shop', created_at: date, updated_at: date },
      { name: 'Papelaria', created_at: date, updated_at: date }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
