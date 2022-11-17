const mother = {
    name: "Oxana",
    age: 50,
    eyes: "grey",
    hair: "black"
};

const daughter = Object.create(mother);
daughter.name =  "Masha";
daughter.age = 15;
daughter.freckles = true;

function showProperties(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        console.log(`Свойство: ключ ${key}, значение ${object[key]}`)
      }  
    };
}

showProperties(daughter);
