class Card {
    constructor(name, cost) {
      this.name = name;
      this.cost = cost;
    }
  }
  
  class Unit extends Card {
    constructor(name, cost, power, resilience) {
      super(name, cost);
      this.power = power;
      this.resilience = resilience;
    }
  
    attack(target) {
      if (target instanceof Unit) {
        target.resilience -= this.power;
        console.log(`${this.name} attacks ${target.name}.`);
      } else {
        throw new Error("Target must be a unit!");
      }
    }
  }
  
  class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
      super(name, cost);
      this.text = text;
      this.stat = stat;
      this.magnitude = magnitude;
    }
  
    play(target) {
      if (target instanceof Unit) {
        if (this.stat === "power") {
          target.power += this.magnitude;
        } else if (this.stat === "resilience") {
          target.resilience += this.magnitude;
        }
        console.log(`${this.name} is played on ${target.name}. ${this.text}`);
      } else {
        throw new Error("Target must be a unit!");
      }
    }
  }
  
  // Create instances of cards
  const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
  const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
  
  const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
  const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
  const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
  
  // Play out the scenario
  hardAlgorithm.play(redBeltNinja); // Apply effect on Red Belt Ninja
  blackBeltNinja.attack(redBeltNinja); // Black Belt Ninja attacks Red Belt Ninja
  unhandledPromiseRejection.play(redBeltNinja); // Apply effect on Red Belt Ninja
  pairProgramming.play(redBeltNinja); // Apply effect on Red Belt Ninja
  redBeltNinja.attack(blackBeltNinja); // Red Belt Ninja attacks Black Belt Ninja
  
  // Output the updated stats of the units
  console.log(redBeltNinja);
  console.log(blackBeltNinja);