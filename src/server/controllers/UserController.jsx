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
  static async update (id, user) {
    const updated = await User.findOne({ _id: id });

    updated.username = user.username ? user.username : null;
    updated.email = user.email ? user.email : null;
    updated.salt = user.salt ? user.salt : null;
    updated.hash = user.hash ? user.hash : null;
    updated.name = user.name ? user.name : null;
    updated.cell = user.cell ? user.cell : null;
    updated.home = user.home ? user.home : null;
    updated.address1 = user.address1 ? user.address1 : null;
    updated.address2 = user.address2 ? user.address2 : null;
    updated.city = user.city ? user.city : null;
    updated.state = user.state ? user.state : null;
    updated.zip = user.zip ? user.zip : null;
    updated.country = user.country ? user.country : null;

    try {
      await updated.save();
    } catch (e) {
      console.log(e);
      return null;
    }

    return updated;
  }

  static async create (user) {
    const newUser = new User(user);
    return newUser.save();
  }
}

export default UserController;
