const bubbleSort = require('./bubbleSort')
const insertionSort = require('./insertionSort')
const mergeSort = require('./mergeSort')

console.log(module.exports = bubbleSort);
console.log(module.exports = insertionSort);
console.log(module.exports = mergeSort);


module.exports.bubbleSort = bubbleSort;
module.exports.insertionSort = insertionSort;
module.exports = mergeSort;