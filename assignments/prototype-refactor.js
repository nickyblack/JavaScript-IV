/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(gameAttrs){
        this.createdAt = gameAttrs.createdAt,
        this.name = gameAttrs.name, 
        this.dimensions = gameAttrs.dimensions
    }

    destroy(){
        return `${this.name} was permanently removed from the company.`;
    }

    dimensions(length, width, height){
        return this.dimensions;
    }
};

class charaterStats extends GameObject {
    constructor(charStats){
        super(charStats);
        this.healthPoints = charStats.healthPoints
    }

    takeDamage(){
        return `${this.name} filed for bankruptsy`;
    }
};

class Humanoid extends charaterStats {
    constructor(attrs){
        super(attrs);
        this.team = attrs.team,
        this.weapons = attrs.weapons,
        this.language = attrs.language
    }

    greet(){
        return `${this.name} offers a welcome in ${this.language}`;
    }
};

// Objects
const millionaire = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Nicky',
    team: 'Millionaire',
    weapons: [
      'Ransomware', 'Malware'
    ],
    language: 'English',
  });

  const gunman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Tony Montano',
    team: 'Cubans',
    weapons: [
      'grenade launcher',
      'Machette',
    ],
    language: 'Spanish',
  });

  const thief = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Ken Skilling',
    team: 'Enron',
    weapons: [
      'scandals',
      'Mark to Market Accounting',
    ],
    language: 'Money Talk',
  });

  console.log(millionaire.createdAt); // Today's date
  console.log(thief.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(gunman.healthPoints); // 15
  console.log(millionaire.name); // Bruce
  console.log(gunman.team); // The Round Table
  console.log(millionaire.weapons); // Staff of Shamalama
  console.log(thief.language); // Elvish
  console.log(thief.greet()); // Lilith offers a greeting in Elvish.
  console.log(millionaire.takeDamage()); // Bruce took damage.
  console.log(gunman.destroy()); // Sir Mustachio was removed from the game.