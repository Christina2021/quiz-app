module.exports = function(sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      question_type: {
        type: DataTypes.STRING,
        allowNull: false  
      }
    });
    return Questions;
  };