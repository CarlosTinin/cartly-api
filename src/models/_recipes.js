export default (sequelize, Sequelize) => {
  const Recipe = sequelize.define('recipe', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    instructions: {
      type: Sequelize.TEXT,
    },
  });
  return Recipe;
};