pry = require('pryjs');

function bubbleSort(numbers){

  for(j = 1; j < numbers.length; j++){
    for(i = 0; i < numbers.length; i++) {
      if(numbers[i+1] < numbers[i]) {
        temp = numbers[i];
        numbers[i] = numbers[i+1];
        numbers[i+1] = temp;
      };
    };
  };
  return numbers
};

module.exports = bubbleSort;