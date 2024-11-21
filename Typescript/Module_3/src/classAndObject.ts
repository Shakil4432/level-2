{
  //   class Animal {
  //     name: string;
  //     species: string;
  //     sound: string;

  //     constructor(name: string, species: string, sound: string) {
  //       this.name = name;
  //       this.species = species;
  //       this.sound = sound;
  //     }

  //     makeSound() {
  //       return `This ${this.name}  sound is ${this.sound}`;
  //     }
  //   }

  // use public Property

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      return `This ${this.name}  sound is ${this.sound}`;
    }
  }

  const dog = new Animal("German Sheperd", "dog", "Gew Gew");
  console.log(dog.makeSound());

  const cat = new Animal("Billi Rani", "cat", "mew mew");
  console.log(cat.name);
}
