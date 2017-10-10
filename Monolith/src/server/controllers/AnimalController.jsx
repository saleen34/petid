import Animal from '../models/Animal';

/* TODO VALIDATION */
class AnimalController {
  static async getAll () {
    return Animal.find();
  }

  static async getOne (id) {
    return Animal.findOne({ _id: id });
  }

  static async remove (id) {
    return Animal.findByIdAndRemove(id);
  }

  /* TODO use some sort of populate method */
  static async update (id, animal) {
    const updated = await Animal.findOne({ _id: id });

    updated.name = animal.name ? animal.name : null;
    updated.gender = animal.gender ? animal.gender : null;
    updated.breed = animal.breed ? animal.breed : null;
    updated.color = animal.color ? animal.color : null;
    updated.birthdate = animal.birthdate ? animal.birthdate : null;
    updated.weight = animal.weight ? animal.weight : null;
    updated.notes = animal.notes ? animal.notes : null;
    updated.image = animal.image ? animal.image : null;

    try {
      await updated.save();
    } catch (e) {
      console.log(e);
      return null;
    }

    return updated.save();
  }

  static async create (animal) {
    const newAnimal = new Animal(animal);
    return newAnimal.save();
  }
}

export default AnimalController;
