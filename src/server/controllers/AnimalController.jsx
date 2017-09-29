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
  static async update (req) {
    const animal = await Animal.findOne({ _id: req.params.id });

    animal.name = req.params.name ? req.params.name : animal.name;
    animal.gender = req.params.gender ? req.params.gender : animal.gender;
    animal.breed = req.params.breed ? req.params.breed : animal.breed;
    animal.color = req.params.color ? req.params.color : animal.color;
    animal.birthdate = req.params.birthdate ? req.params.birthdate : animal.birthdate;
    animal.weight = req.params.weight ? req.params.weight : animal.weight;
    animal.notes = req.params.notes ? req.params.notes : animal.notes;
    animal.image = req.params.image ? req.params.image : animal.image;

    return animal.save();
  }

  static async create (animal) {
    const newAnimal = new Animal(animal);
    return newAnimal.save();
  }
}

export default AnimalController;
