const bubbleSort = require('./bubbleSort')
const insertionSort = require('./insertionSort')
const mergeSort = require('./mergeSort')

exports.bubbleSort = bubbleSort.bubbleSort
exports.insertionSort = insertionSort.insertionSort
exports.mergeSort = mergeSort.mergeSort
exports.split = mergeSort.split;
exports.merge = mergeSort.merge;