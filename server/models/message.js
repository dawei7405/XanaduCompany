const {sequelize, DataTypes} = require("../config/connect")
const message = sequelize.define(
    "aw_message",
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false, // 是否允许为空
            autoIncrement: true,
            primaryKey: true, // 是否主键
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: '电话'
        },
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: '用户姓名'
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: '邮箱'
        },
        desc: {
            type: DataTypes.STRING(500),
            comment: '留言信息'
        }
    }, {
        timestamps: true,

        // 不想要 createdAt
        createdAt: 'create_time',

        // 想要 updatedAt 但是希望名称叫做 updateTimestamp
        updatedAt: 'update_time'
    }
)
// News.sync({force:true}) // 是否自动创建表

module.exports = message
