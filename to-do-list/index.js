// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Get a reference to the form and unordered list
    let myForm = document.getElementById("fm");
    let myList = document.getElementById("myList");
    let inputField = document.getElementById("inp");
  
    // Add an event listener to the form that listens for when it's submitted
    myForm.addEventListener("submit",(event) => {
      // Prevents the default form submission behavior
      event.preventDefault();
  
      // Get the input value from the text input field
      const inputValue = inputField.value;
  
      // Create a new list item element
      const newListItem = document.createElement("li");
  
      // Set its text content to be equal to what was entered in the text input field
      newListItem.textContent = inputValue;
  
      // Create a delete button element
      const deleteButton = document.createElement("button");
      
      // Set its text content to "delete"
      deleteButton.textContent = "delete";
  
      // Add an event listener to listen for when this button is clicked
      deleteButton.addEventListener("click", function () {
        // Remove this list item from its parent unordered list when clicked
        newListItem.remove();
      });
  
      // Append this delete button element as a child of our new list item element 
      newListItem.appendChild(deleteButton);
  
      // Append our new list item element as a child of our unordered list
      myList.appendChild(newListItem);
  
      // Clear the text input field
      inputField.value = "";
    });
  
    // Add an event listener to the button that listens for when it's clicked
    document.getElementById("bt").addEventListener("click", function() {
      // Get the input value from the text input field
      const inputValue = inputField.value.trim();
  
      // Create a new list item element
      const newListItem = document.createElement("li");
  
      // Set its text content to be equal to what was entered in the text input field
      newListItem.textContent = inputValue;
  
      // Create a delete button element
      const deleteButton = document.createElement("button");
      
      // Set its text content to "delete"
      deleteButton.textContent = "delete";
  
      // Add an event listener to listen for when this button is clicked
      deleteButton.addEventListener("click", function () {
        // Remove this list item from its parent unordered list when clicked
        newListItem.remove();
      });
  
      // Append this delete button element as a child of our new list item element 
      newListItem.appendChild(deleteButton);
  
      // Append our new list item element as a child of our unordered list
      myList.appendChild(newListItem);
  
      // Clear the text input field
      inputField.value = "";
    });
  });
  