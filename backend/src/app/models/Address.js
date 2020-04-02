import Sequelize, { Model } from 'sequelize';
import User from './User';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        district: Sequelize.STRING,
        address_details: Sequelize.STRING,
        zipcode: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate() {
    this.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Address;
