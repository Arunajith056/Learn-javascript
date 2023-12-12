document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("fm");
  const myList = document.getElementById("myList");
  const inputField = document.getElementById("inp");

  myForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const inputValue = inputField.value.trim();

      if (inputValue !== "") {
          const newRow = document.createElement("tr");

          const textCell = document.createElement("td");
          textCell.textContent =inputValue;

          const buttonCell = document.createElement("td");
          const deleteButton = document.createElement("button");

          deleteButton.classList.add("btn", "btn-danger");
          deleteButton.textContent = "Delete";

          deleteButton.addEventListener("click", function () {
              newRow.remove();
          });

          buttonCell.appendChild(deleteButton);
          newRow.appendChild(textCell);
          newRow.appendChild(buttonCell);
          myList.appendChild(newRow);

          inputField.value = "";
      }
  });

  document.getElementById("bt").addEventListener("click", function () {
      const inputValue = inputField.value.trim();

      if (inputValue !== "") {
          const newListItem = document.createElement("tr");
          const textCell = document.createElement("td");

          textCell.textContent = inputValue;

          const deleteButtonCell = document.createElement("td");
          const deleteButton = document.createElement("button");

          deleteButton.classList.add("btn", "btn-danger");
          deleteButton.textContent = "Delete";

          deleteButton.addEventListener("click", function () {
              newListItem.remove();
          });

          deleteButtonCell.appendChild(deleteButton);
          newListItem.appendChild(textCell);
          newListItem.appendChild(deleteButtonCell);
          myList.appendChild(newListItem);

          inputField.value = "";
      }
  });
});
