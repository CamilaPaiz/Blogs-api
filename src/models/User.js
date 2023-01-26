module.exports = (sequelize,DataTypes) => {
const User = sequelize.define('User', {
    id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
       },
       display_name: {
        allowNull: false,
        type: DataTypes.STRING,
       },
       email:{
        allowNull: false,
        type: DataTypes.STRING,
       },
    password:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    image:{
      type:DataTypes.image,
    }
},
{
    timestamps:false,
    underscored:true,
    tableName:'users'
});
return User;
};
 