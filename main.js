//an object-oriented Adventure

//Part one
//our adventurer

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         inventory: [],
//         subCompanion:{
//             sub1:{
//                 name: "Frank",
//                 type: "Flea",
//                 inventory: ["hat", "sunglasses"]
//             }
//         }
//     },
//     roll(mod = 0){
//         const result = Math.floor(Math.random()* 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

// part two

class character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.Max_Health = 100;
        this.role = ["Fighter", "Healer", "Wizard"];
        roll (mod = 0);{
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
        }
    }
}

const Robin = new character("Robin");
adventurer.robin.inventory = ["sword", "potion", "artifact"];
adventurer.robin.companion = new character("Leo");
adventurer.robin.companion.companion = new character("Frank");
adventurer.robin.companion.companion.type = "Flea";
adventurer.robin.companion.companion.inventory = ["small hot", "sunglasses"];

class adventurer extends character{
    constructor (name, role){
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }
    scout(){
        console.log(`${this.name} is scouting ahead...`)
        super.roll();
    }
    duel(){
        roll(roll1, roll2){;
            if (roll1 < roll2){
                this.Max_Health -= 1;
            }
        }
    }
}
class companion {
    constructor (name, type){
        this.name = name;
        this.type = type;
        this.inventory = [];
    }
}

class AdventurerFactory {
    constructor (role){
        this.role = role;
        this.adventurer = [];
    }
    generate (name) {
        const newAdevnturer = new AdventurerFactory(name, this.role);
        this.adventurer.push(newAdevnturer);
    }
    findByIndex (index){
        return this.adventureres[index];
    }
    findByName(name){
        return this.adventureres.find((a) => a.name === name);
    }
}
const healers = new AdventurerFactory("Healer");
const robin = healer.generate("Robin");