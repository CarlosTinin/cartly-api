export default (sequelize, Sequelize) => {
  const Pantry = sequelize.define('pantry', {
    name: {
      type: Sequelize.STRING,
    },
  });
  return Pantry;
};