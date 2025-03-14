const button = document.getElementById("button"); // Ensure an element with this id exists
let flag = false;

function addingEventListener() {
  button.addEventListener("click", () => {
    flag = true;
  });
}

addingEventListener(); // Call the function to attach the event listener
