
// creating the list / array & it's filled with string 
let shoppingListItems = ["milk", "eggs", "bread", "apples", "bananas"]


function updateItems(){
    let listElement = document.getElementById("shopping-list-items");

    // this line clears the list so this doesn't end up duplicating the list  *** TEST THIS LINE ***
    listElement.innerHTML = "";
// loop 
// define shopping list, loop through the shopping list and we assign and then append to the screen 
shoppingListItems.forEach((item) => {
    console.log(item);
    let itemElement = document.createElement("li");
    // this adds to the end of the list 
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
    });
    
}
// calling this after the above function has been created 
updateItems();

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item); 
    updateItems();
}

function clearItem() {
    // // this clears the list 
    // shoppingListItems = [];
    // updateItems();

    // this removes one line at a time 
    shoppingListItems.pop(); 
    updateItems();

}


