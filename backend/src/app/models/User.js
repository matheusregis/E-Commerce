import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import Address from './Address';


class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        cpf: Sequelize.STRING,
        birthday: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
  static associate() {
    this.hasMany(Address, { foreignKey: 'user_id', as: 'addresses' });
  }
}

export default User;
