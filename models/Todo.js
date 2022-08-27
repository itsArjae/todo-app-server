module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    todoBody:{
      type:DataTypes.STRING,
      allowNull: false
    },
    status:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
  });

  return Todo;
};
