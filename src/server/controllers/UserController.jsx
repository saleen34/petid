import User from '../models/User';

/* TODO VALIDATION */
class UserController {
  static async getAll () {
    return User.find();
  }

  static async getOne (id) {
    return User.findOne({ _id: id });
  }

  static async remove (id) {
    return User.findByIdAndRemove(id);
  }

  /* TODO use some sort of populate method */
  static async update (req) {
    const user = await User.findOne({ _id: req.params.id });

    user.username = req.params.username ? req.params.username : user.username;
    user.email = req.params.email ? req.params.email : user.email;
    user.salt = req.params.salt ? req.params.salt : user.salt;
    user.hash = req.params.hash ? req.params.hash : user.hash;
    user.name = req.params.name ? req.params.name : user.name;
    user.cell = req.params.cell ? req.params.cell : user.cell;
    user.home = req.params.home ? req.params.home : user.home;
    user.address1 = req.params.address1 ? req.params.address1 : user.address1;
    user.address2 = req.params.address2 ? req.params.address2 : user.address2;
    user.city = req.params.city ? req.params.city : user.city;
    user.state = req.params.state ? req.params.state : user.state;
    user.zip = req.params.zip ? req.params.zip : user.zip;
    user.country = req.params.country ? req.params.country : user.country;

    return user.save();
  }

  static async create (user) {
    const newUser = new User(user);
    return newUser.save();
  }
}

export default UserController;
