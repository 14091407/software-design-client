require('dotenv').config()

module.exports = {
  PROD: process.env.NODE_ENV === 'production' ? true : false,
  HOST: process.env.HOST,
  PORT: process.env.PORT
}