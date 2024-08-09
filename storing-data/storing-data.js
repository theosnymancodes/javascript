/*
    Use `let` for variables that can be reassigned. Avoid `var` due to scoping issues.
    
    - Identifiers must not be reserved keywords or start with a number.
    - Identifiers cannot contain spaces or hyphens.
    - Use meaningful names for identifiers.
*/

let myAge // Declaration
myAge = 20 // Initialization
let myUsername = "codedbytheo" // Declaration + Initialization
myUsername = "theosnymancodes" // Reassignment

/*
    Use `const` for values that should not be reassigned. Reassigning a `const` will cause a TypeError.
*/

const myName = "Theo"
const mySurname = "Snyman"