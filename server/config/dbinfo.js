const config = {
    database: "Xanadu", // 数据库名称
    username: "root", // 用户名
    password: "7405", // 密码
    host: "localhost", // 主机地址
    port: "3306", // 端口号
    dialect: "mysql", //数据库类型，支持: 'mysql', 'sqlite', 'postgres', 'mssql'
    // logging: true, // 是否启用日志
}
module.exports = config
// sequelize-auto -h 'localhost' -d 'xanadu' -u 'root' -x '123456' -p 3307 -t 'aw_user'
