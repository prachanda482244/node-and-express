//  Modules
// Common js , every file is a module (by default);
// Modules - Encapsulated code (only share minimum)

const greeting = (name)=>{
    console.log(`Hello there ....${name}`);
}
module.exports = greeting;