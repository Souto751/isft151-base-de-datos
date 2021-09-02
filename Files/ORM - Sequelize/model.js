module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        name: {
            type: type.STRING,
            allowNull: false
        },
        lastname: {
            type: type.STRING,
            allowNull: false
        }
    },{
        tableName: 'users'
    })
};