function mergeSort(array){
  return 'Do The Thing'
};

function split(array){
  return 'Split'
};

function merge(firstHalf, secondHalf){
  totalLength = firstHalf.length + secondHalf.length
  merged = []

  for(i = 0; merged.length < totalLength; i++){
    if(firstHalf[i] < secondHalf[i] || secondHalf[i] == undefined){
      merged.push(firstHalf[i])
      if(secondHalf[i]){
        merged.push(secondHalf[i])
      };
    } else {
      merged.push(secondHalf[i])
      merged.push(firstHalf[i])
    };
  };
  return merged;
};

exports.mergeSort = mergeSort;
exports.split = split;
exports.merge = merge;