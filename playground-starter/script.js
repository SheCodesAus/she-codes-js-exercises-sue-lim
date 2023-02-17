function showName(){
    let username = document.getElementById("name-text").value;
    console.log(`Hi, ${username}`);

}
// for loop 
// for (let count = 0; count < 10; count++) {
//     console.log(count);
// }

// // array / list
// let pets = ["Chilli", "Rex", "Roary", "Fleur"];
// // console.log(pets);
// // // push is amend 
// // pets.push("Ivy");
// // console.log(pets);
// // console.log(pets[0]);
// // console.log(pets[3]);

// // 
// // for (let index = 0; index < pets.length; index++) 
// // {console.log(pets[index]);
// // }

// pets.forEach((pet) => {
//     console.log(pet);
// })

let child = "Ruth"

// === is strictly equal to. Always use this in JS 

if (child === "Wolfgang") {
    console.log("Wolfgang is the best child in the world!");
} else if (child ==="Coco" ) {
    console.log("Coco is the second best child in the world ");
} else {
console.log("The child is not Wolfgang and I guess they are ok");
}