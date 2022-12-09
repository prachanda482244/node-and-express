//Mind grenade is assigning the function variable into another function without exporting it in the module
const num1 = 5;
const num2 = 15;

function add(){
    console.log(`The sum of two number  is ${num1+num2}`);
}
add();