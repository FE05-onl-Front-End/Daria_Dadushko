const zooAnimals = [
  {
    name: "panda",
    nickname: "sin",
    weight: 70,
    isHealthy: true,
    isFed: true,
    warden: {
      name: "George",
      age: 40,
    },
  },
  {
    name: "manul ",
    nickname: "tosha",
    weight: 3,
    isHealthy: true,
    isFed: true,
    warden: {
      name: "Julia",
      age: 35,
    },
  },
  {
    name: "sloth",
    nickname: "sid ",
    weight: 5,
    isHealthy: false,
    isFed: true,
    warden: {
      name: "Julia",
      age: 35,
    },
  },
  {
    name: "parrot",
    nickname: "kesha",
    weight: 0.5,
    isHealthy: true,
    isFed: true,
    warden: {
      name: "Ien",
      age: 72,
    },
  },
];

function zoo() {
  return {
    freeAnimal: (animals, name) => {
      //Функция для освобождения животных
      let check = 0;
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() == name.toLowerCase()) {
          let deleteAnimal = animals.splice(i, 1);
          console.log(`animal species  ${name} has been set free `);
          check = 1;
        }
      }
      if (check === 0) {
        console.log(`there are no  ${name} animals in the zoo `);
      }
    },

    addAnimal: (animals, animal) => {
      //Функция для добавления новых животных
      animals.push(animal);
    },

    changeWarden: (animals, animalName, newWarden) => {
      //функция для замены смотрителя
      let foundAnimal = findAnimal(animals, animalName);
      if (foundAnimal != null) {
        foundAnimal.warden = newWarden;
      } else {
        console.log(`there are no  ${animalName} animals in the zoo  `);
      }
    },

    changeAnimalHealth: (animals, animalName, healthState) => {
      //Функция для заменя состояния здоровья
      let foundAnimal = findAnimal(animals, animalName);
      if (foundAnimal != null) {
        foundAnimal.isHealthy = healthState;
        console.log(`${animalName} is healthy - ${foundAnimal.isHealthy}`);
      } else {
        console.log(`there are no  ${animalName} animals in the zoo `);
      }
    },

    changeAnimalFedStatus: (animals, animalName, fedStatus) => {
      //Функция для замены статуса сытости
      let foundAnimal = findAnimal(animals, animalName);
      if (foundAnimal != null) {
        foundAnimal.isFed = fedStatus;
        console.log(`${animalName} is fed - ${foundAnimal.isFed}`);
      } else {
        console.log(`there are no  ${animalName} animals in the zoo `);
      }
    },

    changeAnimalWeight: (animals, animalName, animalWeight) => {
      //функция для заменя веса животного
      let foundAnimal = findAnimal(animals, animalName);
      if (foundAnimal != null) {
        foundAnimal.weight = animalWeight;
        console.log(`${animalName}, weight = ${foundAnimal.weight} kg`);
      } else {
        console.log(`there are no  ${animalName} animals in the zoo `);
      }
    },

    changeAnimalNickname: (animals, animalName, animalNickname) => {
      //функция для замены клички животного
      let foundAnimal = findAnimal(animals, animalName);
      if (foundAnimal != null) {
        foundAnimal.nickname = animalNickname;
        console.log(
          `${animalName}, nickname changed to ${foundAnimal.nickname}`
        );
      } else {
        console.log(`there are no  ${animalName} animals in the zoo `);
      }
    },

    printAnimalList: (animals) => {
      //функция для выведения списка обитателей
      console.log(`list of zoo inhabitants :`);
      for (let i = 0; i < animals.length; i++) {
        console.log(
          `species: ${animals[i].name},
            animal nickname: ${animals[i].nickname},
            animal weight: ${animals[i].weight} кг,
            animal is healty: ${animals[i].isHealthy},
            animal is fed: ${animals[i].isFed},
            warden name: ${animals[i].warden.name},
            warden age: ${animals[i].warden.age} years.`
        );
      }
    },
  };
}

function findAnimal(animals, animalName) {
  // функция для выполнения частой операции по поиску животного по его виду в массиве
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].name.toLowerCase() == animalName.toLowerCase()) {
      return animals[i];
    }
  }
  return null;
}

let zooManager = zoo();

zooManager.freeAnimal(zooAnimals, "panda"); // (массив, "вид животного")
zooManager.freeAnimal(zooAnimals, "asdasdasd");

zooManager.addAnimal(zooAnimals, {
  // ( массив, новый объект с данными нового животного)
  name: "elephant",
  nickname: "max",
  weight: 2000,
  isHealthy: true,
  isFed: true,
  warden: {
    name: "tim",
    age: 30,
  },
});
zooManager.changeWarden(zooAnimals, "elephant", {
  // ( массив, "вид животного", массив с данными смотрителя)
  name: "alex",
  age: 18,
});

const illState = false; //(массив, "вид животного", состояние здоровья)
const healthyState = true;
zooManager.changeAnimalHealth(zooAnimals, "elephant", illState);
zooManager.changeAnimalHealth(zooAnimals, "parrot", healthyState);

const hungry = false; //(массив, "вид животного", уровень сытости)
const full = true;
zooManager.changeAnimalFedStatus(zooAnimals, "elephant", hungry);
zooManager.changeAnimalFedStatus(zooAnimals, "parrot", full);

zooManager.changeAnimalWeight(zooAnimals, "elephant", 3000); //(массив, "вид животного", вес животного в кг)

zooManager.changeAnimalNickname(zooAnimals, "parrot", "timi"); //(массив, "вид животного", "новая кличка")

zooManager.printAnimalList(zooAnimals); //(массив)
