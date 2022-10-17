const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

class Coffee {
    constructor(coffeeObj) {
        Object.assign(this, coffeeObj);
    }

    makeCoffee() {
        let p = '';
        for (let key in this.ingredients) {
            p += `<p style="height: ${this.ingredients[key]}%" class="ingredient ${key}">${key}</p>`
        }
        return `<div class="cup">
                    <div class="coffee ${this.coffeeClass}">
                        <div class="coffee__ingredients">
                            ${p}
                        </div>
                    </div>
                    <p class="coffee__title">${this.title}</p>
                </div>`;
    }
}

class Espresso extends Coffee {
    constructor(coffeeObj) {
        super(coffeeObj);
        this.coffeeClass = 'coffee--espresso';
        this.role = `Espresso`
    }
}

class EspressoMilk extends Coffee {
    constructor(coffeeObj) {
        super(coffeeObj);
        this.coffeeClass = 'coffee--espressoMilk';
        this.role = `EspressoMilk`;
    }
}

class Alcoholic extends Coffee {
    constructor(coffeeObj) {
        super(coffeeObj);
        this.coffeeClass = 'coffee--alcoholic';
        this.role = `Alcoholic`
    }
}

class Dessert extends Coffee {
    constructor(coffeeObj) {
        super(coffeeObj);
        this.coffeeClass = 'coffee--dessert';
        this.role = `Dessert`
    }
}

const coffeeArr = [];
for (let key in COFFEE_TYPES) {
    switch (key) {
        case 'Espresso' :
            COFFEE_TYPES[key].map(key => coffeeArr.push(new Espresso(key).makeCoffee()));
            break;
        case 'EspressoMilk' :
            COFFEE_TYPES[key].map(key => coffeeArr.push(new EspressoMilk(key).makeCoffee()));
            break;
        case 'Alcoholic' :
            COFFEE_TYPES[key].map(key => coffeeArr.push(new Alcoholic(key).makeCoffee()));
            break;
        case 'Dessert' :
            COFFEE_TYPES[key].map(key => coffeeArr.push(new Dessert(key).makeCoffee()));
            break;
    }
}
document.write(`<section class="cups">${coffeeArr.join('')}</section>`);

// let ROLES = {
//     Espresso: coffee => new Espresso(coffee),
//     EspressoMilk: coffee => new EspressoMilk(coffee),
//     Alcoholic: coffee => new Alcoholic(coffee),
//     Dessert: coffee => new Dessert(coffee),
// }
// let render = COFFEE_TYPES.bind(ROLES).role
//      .map(coffee => ROLES[coffee.role])
//      .map(coffee => coffee.makeCoffee())
//      .join(``);

// let valuesCoffee = Object.values(COFFEE_TYPES)
// let keysCoffee = Object.keys(COFFEE_TYPES)
// console.log(valuesCoffee)
// console.log(keysCoffee);
//
// let render = valuesCoffee
//     .map(coffee => coffee.ROLES[keysCoffee])
//     .map(coffee => coffee.makeCoffee())
//     .join(``);

// console.log(render)
// console.log(COFFEE_TYPES.next())
// document.write(`<section class="cups">${render}</section>`);
