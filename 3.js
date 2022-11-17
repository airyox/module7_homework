function createObjectWithoutPrototype() {
    const noPrototypeObject = Object.create(null); 
    return noPrototypeObject;
}

console.log(createObjectWithoutPrototype());