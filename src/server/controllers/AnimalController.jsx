import Animal from '../models/Animal';

class AnimalController {
  static list (req, res) {
console.log('controller list');
    Animal.find = (err, animals) => {
console.log('animals:', animals);
      if (err) {
        return res.status(500)
          .json({
            message: 'Error getting animals.'
          });
      }
      return res.status(200).json(animals);
    };
  }
}

export default AnimalController;
