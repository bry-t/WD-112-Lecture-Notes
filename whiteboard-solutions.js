let myName = function(fName, lName) {
    return `${fName} ${lName}`
}
    // ^^^^^^^^^^^ //
// Function Expression: a fx stored in a variable //
myName("Paul", "Niemczyk")



// function myName(fName, lName){
//     return `${fName} ${lName}`
// }
    // ^^^^^^^^^^^ //
// Function Declaration //



for (i = 0; i <= 100; i++) {
    if (i % 2 == 0 && 1 % 5 == 0) {
    console.log(`This ${i} is dvisible by 2 & 5`)
    } else if (i % 2 == 0) {
    console.log(`This ${i} is dvisible by 2`)
    } else if (i % 5 == 0) {
    console.log(`This ${i} is dvisible by 5`)
    } else {
    console.log(`The number ${i} does not meet any criteria`);
    }
}

function circleCircumfrence (radius) {
    return 2 * 3.14 * radius
}

console.log(circleCircumfrence(20));

let school = {
    teacher: "Paul",
    subject: "Web Dev",
    isTenured: true,
    students:{
        name:["Bobby", "Joe"],
        grades:[97, 88]
    }
}

console.log(school.students.grades[0]);
school.students.grades[0] = 100
console.log(school.students.grades[0]);