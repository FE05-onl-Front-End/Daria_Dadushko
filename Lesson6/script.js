//задание 1
const unique = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let duplacate = false;
    for (let k = 0; k < result.length; k++) {
      if (String(array[i]).toLowerCase() == String(result[k]).toLowerCase()) {
        duplacate = true;
      }
    }
    if (duplacate == false) {
      result.push(array[i]);
    }
  }
  return result;
};

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]

//задание 2
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length != secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] != secondArray[i]) {
      return false;
    }
  }
  return true;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false

//задание 3
const reverse = (numbersArray) => {
  const reversedArray = [];
  for (let i = numbersArray.length - 1; i >= 0; i--) {
    reversedArray.push(numbersArray[i]);
  }
  return reversedArray;
};

const numbers = [1, 2, 3];
console.log(reverse(numbers)); // [3, 2, 1]

//задание 4
const randomArray = [
  43,
  54,
  12,
  "text",
  "TeXt",
  54,
  "54",
  0,
  false,
  "car",
  "CAR",
  43,
];
const newArray = [];

for (let i = 0; i < randomArray.length; i++) {
  let j = 0;
  String(randomArray[i]).toLowerCase();
  for (let k = 0; k < randomArray.length; k++) {
    if (
      String(randomArray[i]).toLowerCase() ==
      String(randomArray[k]).toLowerCase()
    ) {
      j = j + 1;
    }
  }

  newArray.push({
    value: randomArray[i],
    count: j,
  });
}

console.log(newArray);

let max = newArray[0];
newArray.forEach((item) => {
  if (item.count > max.count) {
    max = item;
  }
});

console.log(`самое повторяющееся значение: ${max.value}`); //через alert раздражает.
// alert(`самое повторяющееся значение: ${max.value}`);
