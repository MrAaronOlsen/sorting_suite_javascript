assert = require('chai').assert;
sort = require('../lib');

describe('mergeSort', function(){
  it('can sort 8 numbers', function(){
    let numbers = [7, 3, 2, 6, 5, 1, 0, 4]
    let sorted = [0, 1, 2, 3, 4, 5, 6, 7]
    assert.deepEqual(sort.mergeSort(numbers), sorted)
  });

  it('can sort 8 letter', function(){
    let numbers = ['c', 'h', 'd', 'f', 'b', 'g', 'e', 'a']
    let sorted = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    assert.deepEqual(sort.mergeSort(numbers), sorted)
  });

  it('can sort with equals', function(){
    let numbers = [7, 2, 2, 0, 5, 1, 0, 1]
    let sorted = [0, 0, 1, 1, 2, 2, 5, 7]
    assert.deepEqual(sort.mergeSort(numbers), sorted)
  });
});