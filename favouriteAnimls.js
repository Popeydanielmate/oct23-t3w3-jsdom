let animals = [
    "fennec fox",
    "lobster",
    "frog",
    "crocodile",
    "dog",
    "monkey",
    "manta ray",
    "horse",
    "red panda",
    "conure",
    "lizard",
    "koala bear",
    "drop bears",
    "whale shark",
    "lion",
    "turtle",
    "otter"
];

function createAnimalList(){
    animals.forEach((animal) => {
        console.log("animal: " + animal);

        // 1. Create li element with animal value as its text
        let newList = document.createElement("li");
        newList.textContent = animal;
        newList.id = animal;

        // 2. Find the ol element that exists in the page and append the li into it
        let rootOlNode = document.querySelector("ol");
        rootOlNode.appendChild(newList);
    });
}