function generateNewArray() {  

  let numbersArray = [];
  while (numbersArray.length < 100) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const numberAdder = () => {
      if (numbersArray.includes(randomNumber) === false) {
        numbersArray.push(randomNumber);
      }
    };
    numberAdder();
  }
  console.log(numbersArray);
}

generateNewArray();
generateNewArray();
