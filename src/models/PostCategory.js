module.exports = (sequelize,DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',{
        postId: {
            allowNull:false,
            type:DataTypes.INTEGER,
            foreignKey:true,
          }, 
          categoryId: {
            allowNull:false,
            type:DataTypes.INTEGER,
            foreignKey:true,
        },
    },
    {
        timestamps:false,
        underscored:true,
        tableName:'post_categories'
    })

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blog_post',
          through: PostCategory,
          foreignKey: 'category_id', 
          otherKey: 'post_id', 
        });
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'post_id', 
          otherKey: 'category_id',
        });
      };

    return PostCategory;
    };
     