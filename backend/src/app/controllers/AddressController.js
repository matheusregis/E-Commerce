import Address from '../models/Address';
import User from '../models/User';

class AddressController {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' },
    });

    return res.json(user);
  }

  async store(req, res) {
    const { user_id } = req.params;
    const { street, number, district, address_details, zipcode } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not Found.' });
    }

    const address = await Address.create({
      street,
      number,
      district,
      address_details,
      zipcode,
      user_id,
    });

    return res.json(address);
  }
}

export default new AddressController();
