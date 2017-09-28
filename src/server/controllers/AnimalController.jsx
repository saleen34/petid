import Animal from '../models/Animal';

class AnimalController {
  static getAll (req, res) {
    Animal.find((err, animals) => {
      if (err) {
        return res.status(500)
          .json({
            message: 'Error getting animals.'
          });
      }
      return res.status(200).json(animals);
    });
  }

  static getOne (req, res) {
    Animal.findOne({ _id: req.params.id }, (err, animal) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting animal.'
        });
      }
      if (!animal) {
        return res.status(404).json({
          message: 'Animal does not exists'
        });
      }
      return res.json(animal);
    });
  }

  static remove (req, res) {
    Animal.findByIdAndRemove(req.params.id, (err, animal) => {
      if (err) {
        return res.status(500).json({
          message: 'Error deleting animal.'
        });
      }
      return res.json(animal);
    });
  }
}

export default AnimalController;
