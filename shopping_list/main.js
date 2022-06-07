//method one
/*
const shop = document.querySelector("input");

const butxn = document.querySelector("button");
const ulist = document.querySelector("ul");

//events that occur when add button is clicked
butxn.addEventListener("click", () => {
  const addElem = document.createElement("li"); // creates a list

  const delButxn = document.createElement("button"); //creates a button
  delButxn.textContent = "delete"; // labels the button text as delete

  addElem.textContent = shop.value; //adds user input to the list created
  const newText = addElem.textContent; // stores the user input as newText
  ulist.appendChild(addElem); // append the text to the ul

  addElem.appendChild(delButxn); // append the button to each list item

  shop.value = " "; // empties the input feild

  delButxn.addEventListener("click", () => {
    ulist.removeChild(addElem);
  });

});

*/

//methOd 2

const shop = document.querySelector("input");
const butxn = document.querySelector("button");
const ulist = document.querySelector("ul");
var num = 1;

//events that occur when add button is clicked
butxn.addEventListener("click", () => {
  if (shop.value != " ") {
    const newText = `${num}.  ${shop.value} `; //stores user input as new text

    shop.value = " "; // empties the input feild

    // keeps track of numbering
    num = num + 1;

    //create new line span and button
    const newLINE = document.createElement("li");
    const newSPAN = document.createElement("span");
    const newBUTNX = document.createElement("button");

    // jons the span and the button to the list element
    newLINE.appendChild(newSPAN);
    newLINE.appendChild(newBUTNX);

    //shows user input and delete button
    newSPAN.textContent = newText;
    newBUTNX.textContent = "delete";

    //gives class names
    newBUTNX.className = "items_button";
    newLINE.className = "items";

    //appends the user input and delete button
    ulist.appendChild(newLINE);

    //events that occurs when delete button is clicked
    newBUTNX.addEventListener("click", () => {
      ulist.removeChild(newLINE);
      num = num - 1;
    });
  }
  shop.focus();
});
