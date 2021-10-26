// JavaScript
/*
    JavaScript was founded in 1996 by Brandon Eich
    - client side language (runs in the browser)
    - interpreted (not compiled)
    - object oriented
    - ECMAScript which is an organization that sets language standards
*/

// Comments
/*
    Lines or blocks of code that are not being interpreted by the parser.
    - Denoted by // for single line
    - Or like the existing comment that allows many lines of code.
    - Comments get read but are not executed
    - Beneficial in documenting maintainable codebase
*/

// Variables

/*
    Containers that store data in memory.
    - declaration
        - allowing the memory space to be reserved
        - declarations start with let or var
        - declarations cannot start with a number, or most characters other than $ or _.
        - default value is undefined (apart from const)
        - loosely typed language (no need to declare data type)
    - initialization
*/

let firstName;
// console.log(firstName)

var lastName;
// console.log(lastName);

// const age;
// Missing Initializer Error. Const must always be declared AND initialized.
// console.log(age)

// Coding Practices for Variables
/*
    - Be concise (ex: firstName instead of usersFirstName)
    - Be specific (ex: getValue instead of i)
    - Utilize camelCase, snake_case, PascalCase, or skewer-case
    - You can also utilize nocase or SCREAMING_CASE
*/ 

// Variable Initialization
/*
    The data value that is given to a variable declaration.
    - Can be anything (string, integer, array, function, class, etc.)
    - Can be reassigned (apart from const)
*/

// (a)   (b)         (c)
   let address = "430 N Park";
/*
    (a) variable declaration
    (b) variable identifier
    (c) value or initializer
*/

// console.log(address)

// redeclare variables with different initializers

address = "157 W Ohio St";
console.log(address);

console.log(firstName, lastName);

firstName = "Summer";
lastName = "Kerekes";

console.log(firstName, lastName);

const ssn = 123456789;

console.log(ssn);

// ssn = 559990000
// console.log(ssn)
// ! ERROR! TypeError: assignment to constant variable
// ! Const variables cannot be reassigned!

let text = "Hey \"text\" ";
console.log(text);

// Data Types
/*
    JavaScript has several data types that can be used. They are:
        - Boolean
        - Null
        - Undefined
        - String
        - Number
        - Array
        - Object
*/

// String
/*
    Data type used to represent text in single or double quotes.
    Primitive Data Type
*/

let myString = "This is a string data type";

myString = 'Can be in single quotes';

// Template literal
myString = `This is a template literal string`;

console.log(typeof myString); // typeof returns data type

// Numbers

let degrees = 90;
console.log(typeof degrees, degrees);

let precise = 999999999999999;
// 15 digits doesn't round up
console.log(precise);

let rounded = 9999999999999999;
// 16 digits rounds up
console.log(rounded);

let decimalAddition = 0.2 + 0.1;
console.log(decimalAddition);

// Redeclaration
let strToNum = "123";
console.log(strToNum);
let myNumber = Number(strToNum);
console.log(myNumber);
console.log(typeof strToNum);

// Boolean
// Two possible values: true (on) or false (off)

let on = true;
console.log(on);

let off = false;
console.log(off);

// Undefined
// No value is assigned and does not act as empty container

let undef = undefined;
console.log(undef);

let correct;
console.log(undef);

// Null
// Null is an empty value. Container with nothing in it.

let empty = null;
console.log(null);

// Null vs. Undefined

/*
    - Null is like a container with nothing in it
    - Undefined means variable has never been set or created
*/

// Data Type Literals
// When developer inserts a value into a data type

let strLiteral = "This is a string literal";

//Arrays
// Containers holding a list of items

let students = ["Dean", "Cole", "Kiersten"];

console.log(typeof students); // returns object

// Object
// Stores many values

let student = {
    name: "Cole",
    age: 20,
    graduated: false,
}

console.log( typeof student);

// Operators

// Assignment Operator
// Assigns a valie to the declaration (not "equal", but "is")

let r = 5;

// Comparison Operators
/*
    Compare values on either side of the operator
        -returns either true or false
*/

// Equal to operator
console.log(3 == 3); // returns true

// Not equal to
console.log(3 != 5); // returns true because 3 is NOT equal to 5


// Type Coercion
/*
    Process of converting one data type into another
    Done automatically by JS parser
*/

console.log(3 == "3"); // returns true because JS changes str data type to int data type before comparison operation.

// Strict Equal or Not Equal Operators
// Test for not only value but its data types

console.log(3 === 3); // returns true because the value and data type is same

console.log(3 === "5"); // retruns false because data types are different ( int and str)

console.log(3 !== "3"); // returns true because data types of both values differ

// Greater; Less; Greater & Equal; Less & Equal

console.log(5 > 3); // returns true

console.log( 5>= 5); // returns true

console.log(1 < 0); // returns false

console.log(0 < "1"); // returns true because type coercion exists in these operations as well 

// Logical Operators NOT AND OR

/*
    AND Operator(&&)
        - true if both values result to true
    OR Operator (||)
        - true if one OR the other value results in true 
    NOT Operator (!)
        -flips the resulting logical operator
*/

console.log(5 < 10 && 7 < 10); // true; both sides are true
console.log(5 < 1 && 7 < 10); // false; left side is false, right side is true; overall false & true is false

console.log(5 < 10 || 7 < 10); // true; because both sides are true (only one needs to be true for OR)

console.log(5 < 1 || 7 < 10); // true; because one of the values is true; only one OR the other side needs to be true
        // (false)   (true)
        
console.log(5 < 1 || 7 > 10); // returns false (neither side is true)
        // (false)  (false)

console.log(!(7 == 10)); // returs true because it flips the falsey value into truthy

// Add, Subtract, Multiply, Divide

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(2 / 5);
console.log(2 ** 5);

let addNums = 5;

addNums = addNums * 2
console.log(addNums);

addNums *= 2 // shorthand operator (works for all + - * /)
console.log(addNums);

// Modulus Operator
// Checks for the remainder of ling division

console.log(12 % 5);

//String Concatenation

let fName = "Kiersten";
let lName = "Gamby";

console.log(fName, lName);

let name = "Ms. " + fName + " " + lName;
console.log(name);

// Template Literal

let templateLiteralName = `Ms. ${fName} ${lName} is ${20 + 1} years old.}`;
console.log(templateLiteralName);

// Multi Line String

let multiLine = "Once upon a tome there was a guy who taught JS\n to students and lied about his age.\n He has a bulldog named Bently."

console.log(multiLine);

// Challenge

/*
    Set 70 to 8 variables
        fName; lName; houseNumber; street; city; state; postCode; and concatenate them together to create your address stamp.
*/

let nameFirst = "Bryson";
let nameLast = "Taeza";
let houseNum = 117;
let city= "Coatesville";
let state = "PA";
let postCode = 19320;

let addressStamp = nameFirst + " " + nameLast + "\n" + houseNum + " " + city + ", " + state + " " + postCode;
console.log(addressStamp);

let addressBlock = `${nameFirst} ${nameLast}\n${houseNum} ${city}, ${state} ${postCode}`;
console.log(addressBlock);

