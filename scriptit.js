abutton = document.querySelector('#addButton');
cbutton = document.querySelector('#clearButton');
text = document.querySelector('#textfield');
lista = document.querySelector('#Lista');

// Create an unordered list (ul) element and append it to the list container (Lista)
let list = document.createElement('ul');
lista.appendChild(list);

let countElement = document.createElement('p');
document.body.appendChild(countElement);
countElement.id = "taskCounter"

// Event listener for the Add button to add a new item to the list when clicked
abutton.addEventListener("click", function () {
  
  // Get the text from the input field and remove whitespace
  let itemText = text.value.trim();
  
  // Check if the input is not empty and less or equal to 30 characters
  if (itemText !== "" && itemText.length <= 30) {
    let listItem = document.createElement('li');
  
    // Create and append checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let itemTextSpan = document.createElement('span');
    itemTextSpan.textContent = itemText;

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X';
    deleteButton.id = 'deleteButton';
    deleteButton.addEventListener('click' , function() {
      listItem.remove();
      updateCount();
    });
    
    // Event listener to toggle 'done' class when the checkbox is checked/unchecked
    checkbox.addEventListener('change', function () {
      listItem.classList.toggle('done');
      updateCount();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(itemTextSpan);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    text.value = '';  // Clear the input field after adding the item
    updateCount();
  } else {
    // If the input is invalid (empty or too long), show an alert and clear the input field
    alert("Wrong input, try again");
    text.value = '';
  }
});

// Function to count how many tasks to do
function updateCount() {
  let tasksDone = document.querySelectorAll('.done');
  let tasksTotal = list.childElementCount;
  if (tasksTotal === 0) {
    countElement.textContent = '';
  } else {
    countElement.textContent = `${tasksTotal - tasksDone.length}/${tasksTotal}`;
  }

}

// Function to remove items marked as done
function remove() {
  let elements = document.querySelectorAll('.done');
  for (let element of elements) {
    element.remove();
  }
  updateCount()
}
