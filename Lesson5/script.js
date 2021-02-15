//задание 1

const fillArray = (arraySize, valueToFill) => {
  console.log(Array(arraySize).fill(valueToFill));
};

fillArray(3, "а");


// задание 2

 const randomArray = [0, 1, false, 2, undefined, "", 3, null];

 const compact = (data) => {
   return data.filter(check);
 };

 const check = (value) => {
   return value != null && !isNaN(value) && value != 0;
 };

 // return !!value == true;

 console.log(compact(randomArray));

//задание 3

let usersAge = {
  ivanov: "19",
  petrov: "17",
  sidorov: "21",
  maximov: "27",
  iliin: "15",
  alexandrov: "18",
};

const underage = [],
  adult = [];

let keys = Object.keys(usersAge);
keys.forEach((item) => {
  if (usersAge[item] < 18) {
    underage.push({ userName: item, userAge: usersAge[item] });
  } else {
    adult.push({ userName: item, userAge: usersAge[item] });
  }
});

console.log(underage);
console.log(adult);
