{
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      return `This ${this.name} sound is a generic sound`;
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    dogBark() {
      return `This ${this.name} barks loudly`;
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    catMew() {
      return `This ${this.name} meows loudly`;
    }
  }

  const makeInstanceofDog = (value: Animal) => {
    return value instanceof Dog;
  };

  const makeInstanceofCat = (value: Animal) => {
    return value instanceof Cat;
  };

  const getAnimal = (value: Animal) => {
    if (makeInstanceofDog(value)) {
      return value.dogBark();
    } else if (makeInstanceofCat(value)) {
      return value.catMew();
    } else {
      return value.makeSound();
    }
  };
  const dog = new Dog("Mini", "dog");
  console.log(getAnimal(dog));
  const cat = new Cat("Bilai", "cat");
  console.log(getAnimal(cat));
}
