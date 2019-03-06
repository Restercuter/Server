module.exports = {  
  port: process.env.PORT || 5000,
  db: {
    database: process.env.DB_NAME || 'vueapp'.db,
    user: process.env.DB_USER || 'vueapp',
    password: process.env.DB_PASS || 'vueapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vueapp.sqlite'
    }
  }
}
