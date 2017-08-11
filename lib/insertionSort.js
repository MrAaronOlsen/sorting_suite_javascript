function insertionSort(oldArray){
  let newArray = [oldArray[0]]

  for(i=1; i < oldArray.length; i++){
    newArray.push(oldArray[i])

    for(j=1; j < newArray.length; j++){
      currentIndex = newArray.length - j

      if (newArray[currentIndex] < newArray[currentIndex - 1]){
        temp = newArray[currentIndex - 1]
        newArray[currentIndex - 1] = newArray[currentIndex]
        newArray[currentIndex] = temp
      } else {
        break
      };
    };
  };

  return newArray
};

module.exports = insertionSort;