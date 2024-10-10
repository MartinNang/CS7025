let isPetAwake = true;
let henry = {
    petName : "Henry",
    furColors : ["grey", "white"]
}

function feedPet(pet) {
    console.log(`${pet.petName} has been fed.`);
}

function walkPet(pet) {
    console.log(`${pet.petName} has been walked.`);
}

function testConditions(pet, time) {
    console.log("time", time);
    if (time >= 9 && time < 14) {
        feedPet(pet);
    }
    else if (time >= 14 && time < 20) {
        walkPet(pet);
    }
    else {
        console.log(pet.petName + " is asleep.");
    }
}

function testForLoop(pet) {
    console.log(`${pet.petName}'s fur colors:`);
    for (let i = 0; i < pet.furColors.length; i++) {
        let furColor = pet.furColors[i];
        console.log(furColor);
    }
}

function testForInLoop(pet) {
    console.log(`${pet.petName}'s fur colors:`);
    for (furColor in pet.furColors) {
        console.log(pet.furColors[furColor]);
    }
}

function testWhileLoop(pet) {
    let i = 0;
    console.log(`${pet.petName}'s fur colors:`);
    while (i < pet.furColors.length) {
        let furColor = pet.furColors[i];
        console.log(furColor);
        i++;
    }
}

function testDoWhileLoop(pet) {
    let i = 0;
    console.log(`${pet.petName}'s fur colors:`);
    do {
        let furColor = pet.furColors[i];
        console.log(furColor);
        i++;
    }
    while (i < pet.furColors.length);
}

testConditions(henry, 10);
testConditions(henry, 15);
testConditions(henry, 20);

testForLoop(henry);
testForInLoop(henry);
testDoWhileLoop(henry);




