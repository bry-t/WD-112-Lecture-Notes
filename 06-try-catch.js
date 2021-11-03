// Error Handling

/*
    Error Handling allows the application to continue to run even if an outside resource causes an errror in our app.
    Error Handling is done using:
        - try
            - try statement holds the code that will be tested
        - catch
            - holds code to be executed when error occurs
        - throw
            - allows generating custom errors
        - finally
            - holds code to be executed regardless of result
*/

let myName = "Bry"
// try {
//     if(myName) {
//         console.log(myName)
//     }
//     // runs because myName returns true
// } finally {
//     console.log("Finally always runs")
// }

// try {
//     if (nonExistent) {
//         console.log(nonExistent)
//     }
//     //  Try fails; catch takes over & returns an error
// } catch(err) {
//     console.log("Error has occured: " + err.name)
//     // err.name returns just error name
//     // err.stack returns trace of the error
//     // Must be used in browser console
// }
// // Rest of the application continues to run

// try {
//     // {
//     // Try Catch only works on Runtime Errors. Parsetime (syntax) errors will render try/catch unusable
//     if (myName) {
//     console.log(myName)
// } catch(err) {
//     console.log("Error: " + err)
// } finally {
//     console.log("This always runs");
// }
// }

let json = '{ "age": 30}'

try {
    let user = JSON.parse(json) 
        if(!user.name) {
            throw new SyntaxError("Data property not found.")
        }
    // if(!user.name) {
    //     throw new SyntaxError("Incomplete Data: No Name")
    // }
    console.log(user.name);
} catch(err) {
    console.log("Json Error: " + err.message);
}


console.log("Global scope execution continues")