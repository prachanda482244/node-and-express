// npm - global command comes with node
// npm --version / npm -v

// local dependencies - use it only in the particular projects 
//  npm  i <package name>

// Global dependencies - use it in any projects
//  npm install - g <package name>

// Package.json -  manifest file (stores important info about project/package)
// manual approach - (create package.json in the root , create properties etc)
//  npm init - (step by step , press enter to skip)
// npm init -y - (everything default)

const _ = require('lodash');
const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);