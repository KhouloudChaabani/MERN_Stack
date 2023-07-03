class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
      this.name = name;
      this.health = health;
      this.speed = speed;
      this.strength = strength;
    }
  
    sayName = () => {
      console.log(`My name is ${this.name}`);
    }
  
    showStats = () => {
      console.log(`Name: ${this.name}`);
      console.log(`Strength: ${this.strength}`);
      console.log(`Speed: ${this.speed}`);
      console.log(`Health: ${this.health}`);
    }
  
    drinkSake = () => {
      this.health += 10;
      console.log(`${this.name} drank sake and gained 10 health points.`);
    }
  }
  
  class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
      super(name, health, speed, strength);
      this.wisdom = wisdom;
    }
  
    speakWisdom = () => {
        this.health += 10;
        console.log(`${this.name} drank sake and gained 10 health points.`);
    }
  }
  

  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom();
  superSensei.showStats();