const mother = {
    name: "Oxana",
    age: 50,
    eyes: "grey",
    hair: "black"
};


function checkProperty(string, object) {
    if (object.hasOwnProperty(string)) {
        return true;
    } else {
        return false;
    }
}

checkProperty('age', mother);