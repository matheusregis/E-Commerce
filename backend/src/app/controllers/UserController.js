import User from '../models/User';


class UserController {

  async store(req, res) {

    const { id, name, email, cpf, birthday, address } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      cpf,
      birthday,
      address
    });

  }
}

export default new UserController();