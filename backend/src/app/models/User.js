import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

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
      console.log(user.password_hash);
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
      console.log(user.password_hash);
    });

    return this;
  }
}

export default User;
