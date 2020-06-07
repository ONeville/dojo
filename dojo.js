const items = [1,2,3,4,5,6];

const sum = items.reduce((acc, curr)=> curr + acc, 0);

console.log(`SUM: ${ sum }`);