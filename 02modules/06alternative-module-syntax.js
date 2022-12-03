module.exports.items = ['items1','items2','items3'];
const person = {
    name:'Janeman'
}
const greet = (name)=>{
    console.log('hey'+ name);
}
// module.exports.singlePerson = person
module.exports = {person,greet}