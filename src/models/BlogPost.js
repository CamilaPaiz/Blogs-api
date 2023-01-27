module.exports = (sequelize,DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
          },
          title:{
            allowNull: false,
            type: DataTypes.STRING,
          }, 
          content:{
            allowNull: false,
            type: DataTypes.STRING,
          },
          userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            foreingKey:true,
          },
          published:{
            allowNull: false,
            type: DataTypes.DATE,
          },
          updated:{
            allowNull: false,
            type: DataTypes.DATE,
          }
    },
    {
        timestamps:false,
         underscored:true, 
        tableName:'blog_posts'
    })

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            as:'user',
            foreingKey:'user_id'
        })
    }
    return BlogPost;
    };