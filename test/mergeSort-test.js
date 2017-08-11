assert = require('chai').assert;
const mergeSort = require('../lib');

describe('mergeSort', function(){
  context('merge', function(){
    it('can merge two single arrays', function(){
      let firstHalf = [3]
      let secondHalf = [1]
      let merged = mergeSort.merge(firstHalf, secondHalf)

      assert.deepEqual(merged, [1, 3])
    })

    it('can merge two lopsided arrays', function(){
      let firstHalf = [3, 5]
      let secondHalf = [1]
      let merged = mergeSort.merge(firstHalf, secondHalf)

      assert.deepEqual(merged, [1, 3, 5])
    })

    it('can merge two larger arrays', function(){
      let firstHalf = [3, 5]
      let secondHalf = [1, 10]
      let merged = mergeSort.merge(firstHalf, secondHalf)

      assert.deepEqual(merged, [1, 3, 5, 10])
    })
  })

  xcontext('split', function(){
    it('can return a unit array', function(){
      let array = [3]
      let split = mergeSort.split(array)

      assert.deepEqual(split, [3])
    })

    it('can split a small array', function(){
      let array = [3, 2]
      let split = mergeSort.split(array)

      assert.deepEqual(split, [2, 3])
    })

    it('can split lerger arrays', function(){
      let array = [3, 2, 10, 5]
      let split = mergeSort.split(array)

      assert.deepEqual(split, [2, 3, 5, 10])
    })

    it('can split lopsided arrays', function(){
      let array = [3, 2, 10, 5, 7]
      let split = mergeSort.split(array)

      assert.deepEqual(split, [2, 3, 5, 7, 10])
    })
  })

  xit('can sort 8 numbers', function(){
    let numbers = [7, 3, 2, 6, 5, 1, 0, 4]
    let sorted = [0, 1, 2, 3, 4, 5, 6, 7]
    assert.deepEqual(sort.mergeSort(numbers), sorted)
  });

  xit('can sort 8 letter', function(){
    let numbers = ['c', 'h', 'd', 'f', 'b', 'g', 'e', 'a']
    let sorted = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    assert.deepEqual(sort.mergeSort(numbers), sorted)
  });

  xit('can sort with equals', function(){
    let numbers = [7, 2, 2, 0, 5, 1, 0, 1]
    let sorted = [0, 0, 1, 1, 2, 2, 5, 7]
    assert.deepEqual(sort.mergeSort(numbers), sorted)
  });
});