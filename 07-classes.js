// Classes

/*
    Templates or blueprints for creating objects. They encapsulate data with code. JS is a heavily protytpe-based OOP language.

    Classes are considered special functions and therefore can be defined as:
        - Class Declaration
            - Unlike Fx declaration, Class declarations are NOT hoisted (unless we discuss Temporal Dead Zone (!spicy!))
        - Class Expression
*/

// Class name should always be PascalCase
class Teacher {
    // constructor - a class method for creation and initilization of a class object.
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }

    // Class body
}

// Creating new instance of Teacher Class Declaration

let pNiemczyk = new Teacher("Paul", "web dev", 2020, true)
pNiemczyk.subject = "Math"

console.log(pNiemczyk)

// Creating objects for every teacher is laborious.
// Class gives us an easy tempalte to reuse over and over again.

// Class Expression

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }

}

let $1007OrangeSt = new House("1007 Orange St", 3, 2)
console.log($1007OrangeSt)
let $430ParkAve = new House("430 N Park Ave", 1, 1)
console.log($430ParkAve)

// Class Methods

/*
    Method is a function that lives inside of a class that can be reused on any class instances.
*/

class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    greetCar() {
        console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
    }

    greetDriver(driver) {
        console.log(`Hello, ${driver}, your ${this.make} is ready to go!`)
    }

    age(currentYear) {
        let result = currentYear - this.year
        return `Your car is ${result} years old.`
    }
}

let jeep = new Car("Jeep", "Wrangler", 2019, "manual")

console.log(jeep) // returns instance of a Class
jeep.greetCar() // returns str of constructor params
jeep.greetDriver("Kyle") // ^^ + passing our own parameter

console.log(jeep.age(2021))

// Challenge

/*
    Create a class object called Avengers. Avengers will have properties of name, superpower, age, isDead, keyMovie.

    Create an instance of that object with the superhero name and its properties

    ? Create a method that console logs the name and keyMovie togetther

    ! SPICEY MODE
    ! Create a method that takes the name of the superhero and checks it against two arrays. One with Team Cap, and one with Team Stark and returns which team the superhero as a part of during Civil War

    ! Be done 11:05 ET
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

    movieStarred() {
        console.log(`${this.name} starred in ${this.keyMovie}`)
    }

    whichTeam() {
        let teamCap = ["Steve Rogers", "Captain America", "Bucky", "Wanda", "Hawkeye", "Ant Man"]
        let teamStark = ["Tony Stark", "Vision", "War Machine", "Black Panther", "Black Widow", "Natasha Romanoff"]
        if (teamCap.includes(this.name)) {
            return `${this.name} is Team Captain`
        } else if (teamStark.includes(this.name)) {
            return `${this.name} is Team Tony`
        } else {
            return `${this.name} is not in our database.`
        }
    }

    
    // EC Challenge: Modify this for me so that it will check extraAvenger parameter against our arrays as well without breaking existing conditionals.
    // whichTeam(extraAvenger) {
    //     let teamCap = ["Steve Rogers", "Captain America", "Bucky", "Wanda", "Hawkeye", "Ant Man"]
    //     let teamStark = ["Tony Stark", "Vision", "War Machine", "Black Panther", "Black Widow", "Natasha Romanoff"]
    //     if (teamCap.includes(this.name) || teamCap.includes(extraAvenger)) {
    //         return `${this.name} or ${extraAvenger} is Team Captain`
    //     } else if (teamStark.includes(this.name)) {
    //         return `${this.name} is Team Tony`
    //     } else {
    //         return `${this.name} is not in our database.`
    //     }
    // }
}

let deadpool = new Avengers("Wade Wilson", "regeneration", 800, false, "Deadpool")
console.log(deadpool)
deadpool.movieStarred()
// console.log(deadpool.whichTeam("Steve Rogers"))

// Inheritence 
// Extends

/*
    Extends creates a class that is a child of another (parent) class 
    Syntax:
        class ChildClass extends ParentClass {
            constructor(params of parent & child) {
                super(params of parent)
                this.childProperties = childProperties
            }
        }
*/

//* class Car {
//*     constructor(make, model, year, transmission) {
//*         this.make = make
//*         this.model = model
//*         this.year = year
//*         this.transmission = transmission
//*     }

//*     greetCar() {
//*         console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
//*     }

//*     greetDriver(driver) {
//*         console.log(`Hello, ${driver}, your ${this.make} is ready to go!`)
//*     }

//*     age(currentYear) {
//*         let result = currentYear - this.year
//*         return `Your car is ${result} years old.`
//*     }
//* }

class Options extends Car {
    constructor(
        make, 
        model, 
        year, 
        transmission,
        hasLeather,
        hasComfortAccess,
        hasSportPkg
    ) {
        // super() inherits parent class' properties & methods
        super(make, model, year, transmission)
        this.hasLeather = hasLeather
        this.hasComfortAccess = hasComfortAccess
        this.hasSportPkg = hasSportPkg
    }

    isCPO(currentYear){
        let result = currentYear = this.year
        return result >= 6
        ? `Your ${this.model} os out of warranty`
        : `Your waranty is still active.`
    }
}

let maseratiGTS = new Options("Maserati", "GranTurismo S", 2015, "Auto", true, false, true)

console.log(maseratiGTS);
console.log(maseratiGTS.isCPO(2021));

class DateFormatter extends Date {
    getFormattedDate() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
        return `${this.getDate()} - ${months[this.getMonth()]} - ${this.getFullYear()}`
    }
}

console.log(new DateFormatter("June 29, 2021 12:15:00").getFormattedDate());

    // Challenge

/*
    Extend the House class with one called Sale.
    Sale should have properties appraisalValue (int), listPrice (int), agent (str), and isListed (bool)
    Create a method which calculates the difference between appraisalValue and the listPrice. Add a condtitional that will check if list is 20% higher than appraisal. If it is > 20, not worth it. Otherwise, a good deal.
    The return should also incldue the difference between the two values.
*/

class Sale extends House {
    constructor (
        address, 
        bedrooms, 
        bathrooms,
        appraisalValue,
        listPrice,
        agent,
        isListed
    ) {
        super(address, bedrooms, bathrooms)
        this.appraisalValue = appraisalValue
        this.listPrice = listPrice
        this.agent = agent
        this.isListed = isListed
    }

    calculateDifference(){
        let difference = this.listPrice - this.appraisalValue
        if(this.listPrice > (this.appraisalValue *1.2)){
            return `This is not worth it. The list price is ${difference} more than the appraisal value of ${this.appraisalValue}`
        } else {
            return `This is a good deal. The list price is ${difference} off of the appraisal value of this ${this.appraisalValue}`
        }
    }
}

let myHouse = new Sale("", 2, 2, 300000, 250000)

console.log(myHouse.calculateDifference());