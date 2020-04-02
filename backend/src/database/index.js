import Sequelize from 'sequelize';

import User from '../app/models/User';
import Address from '../app/models/Address';

import databaseConfig from '../config/database';

const models = [User, Address];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate(this.connection));
  }

}

export default new Database();
