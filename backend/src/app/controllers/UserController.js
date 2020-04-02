import User from '../models/User';

class UserController {

  async index(req, res) {
    const users = await User.findAll({ attributes: ["id", "name", "email", "cpf", "birthday"] });

    return res.json(users);
  }

  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, cpf, birthday } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      cpf,
      birthday,
    });
  }
}

export default new UserController();
