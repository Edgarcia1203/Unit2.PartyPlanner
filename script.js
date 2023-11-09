const partyList = document.getElementById('party-items');
const partyForm = document.getElementById('new-party-form');


function addParty(name, date, time, location, description) {
  const partyItem = document.createElement('li');
  partyItem.innerHTML = `
    <strong>${name}</strong>
    <br>Date: ${date}, Time: ${time}
    <br>Location: ${location}
    <br>Description: ${description}
    <button class="delete-button">Delete</button>
  `;
  partyList.appendChild(partyItem);
}


function deleteParty(event) {
  if (event.target.classList.contains('delete-button')) {
    event.target.parentElement.remove();
  }
}


partyForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('party-name').value;
  const date = document.getElementById('party-date').value;
  const time = document.getElementById('party-time').value;
  const location = document.getElementById('party-location').value;
  const description = document.getElementById('party-description').value;
  addParty(name, date, time, location, description);
  partyForm.reset(); 
});


partyList.addEventListener('click', deleteParty);