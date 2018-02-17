module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        spotifyId: {
            allowNull: false,
            type: DataTypes.STRING
        },
        accessToken: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });

    return User;
}