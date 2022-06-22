import  Sequelize from 'sequelize';
import APP_CONFIG from '../../config/app.config.js';

const { DB_URI, DB_OPTIONS } = APP_CONFIG;

export const sequelize = new Sequelize(DB_URI, DB_OPTIONS);

export default async () => {
  return new Promise((resolve, reject) => {
    sequelize.authenticate().then(() => {
      console.log('Database connection established successfully');
      resolve();
    })
    .catch((error) => {
      console.log(`Unable to connect to  the  database, ${error}`)
      reject();
    })
  });
}

