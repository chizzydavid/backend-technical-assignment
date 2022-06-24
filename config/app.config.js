import { config } from 'dotenv';
config();

const { 
  NODE_ENV, 
  DB_HOST,
  DB_NAME, 
  DB_USER, 
  DB_PASSWORD, 
  DB_URI,
  DB_DIALECT
} = process.env;


export default {
  ENV: NODE_ENV,
  PORT: process.env.PORT,
  DB_USER,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_DIALECT,
  DB_OPTIONS: {
    host: DB_HOST,
    dialect: DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  DB_URI
}
