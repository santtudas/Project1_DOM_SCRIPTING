abutton = document.querySelector('#addButton');
cbutton = document.querySelector('#clearButton');
text = document.querySelector('#textfield');
lista = document.querySelector('#Lista');

// Create an unordered list (ul) element and append it to the list container (Lista)
let list = document.createElement('ul');
lista.appendChild(list);

// Event listener for the Add button to add a new item to the list when clicked
abutton.addEventListener("click", function () {
  
  // Get the text from the input field and remove whitespace
  let itemText = text.value.trim();
  
  // Check if the input is not empty and less or equal to 30 characters
  if (itemText !== "" && itemText.length <= 30) {
    let listItem = document.createElement('li');
    
    let = deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Poista'; //ei skulaa


    // Create and append checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let itemTextSpan = document.createElement('span');
    itemTextSpan.textContent = itemText;
    
    // Event listener to toggle 'done' class when the checkbox is checked/unchecked
    checkbox.addEventListener('change', function () {
      listItem.classList.toggle('done');
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(itemTextSpan);
    list.appendChild(listItem);
    text.value = '';  // Clear the input field after adding the item
  } else {
    // If the input is invalid (empty or too long), show an alert and clear the input field
    alert("Wrong input, try again");
    text.value = '';
  }
});

// Function to remove items marked as done
function remove() {
  let elements = document.querySelectorAll('.done');
  for (let element of elements) {
    element.remove();
  }
}
