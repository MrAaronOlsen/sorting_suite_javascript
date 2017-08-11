function mergeSort(array){
  return split(array)
};

function split(array){
  if(array.length == 1){
    return array;
  };

  let end = array.length;
  let middle = Math.round(end / 2);

  let firstHalf = array.slice(0, middle);
  let secondHalf = array.slice(middle, end);

  let sortedFirstHalf = split(firstHalf);
  let sortedSecondHalf = split(secondHalf);

  return merge(sortedFirstHalf, sortedSecondHalf);
};

function merge(firstHalf, secondHalf){
  let merged = firstHalf

  for(i = 0; i < secondHalf.length; i++){
    merged.push(secondHalf[i])

    for(j = 1; j < merged.length; j++){
      let end = merged.length - j;

      if(merged[end] > merged[end - 1]) {
        break;
      } else {
        temp = merged[end - 1];
        merged[end - 1] = merged[end];
        merged[end] = temp;
      };
    };
  };
  return merged;
};

exports.mergeSort = mergeSort;
exports.split = split;
exports.merge = merge;