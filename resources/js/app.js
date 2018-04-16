// Detects if the user has clicked on the dropdown menu for user edit
var userListDropDown = document.getElementById('userList');

var firstNameEditForm = document.getElementById('editFirstName');
var lastNameEditForm = document.getElementById('editLastName');
var ageEditForm = document.getElementById('editAge');
var emailEditForm = document.getElementById('editEmail');
var PBL2EditForm = document.getElementById('editPBL2');
var SBEditForm = document.getElementById('editSB');
var FAEditForm = document.getElementById('editFA');
var MLEditForm = document.getElementById('editML');

userFetch();

// User functions
// Fetches the user json list using an XML Http request
function userFetch() {
  var usersRequest = new XMLHttpRequest();

  usersRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/users.json');
  usersRequest.onload = function() {
    var recievedData = JSON.parse(usersRequest.responseText);
    renderUsersList(recievedData);
  };
  usersRequest.send();
}

function renderUsersList(data) {
  var userString = "";
  for (var i = 0; i < data.length; i++) {
    userString = "<option>" + data[i].firstName + " " + data[i].lastName + "</option>";
    userListDropDown.insertAdjacentHTML('beforeend', userString);
  }
}

function userFetchFormFill() {
  var usersRequest = new XMLHttpRequest();

  usersRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/users.json');
  usersRequest.onload = function() {
    var recievedData = JSON.parse(usersRequest.responseText);
    renderUserData(recievedData);
  };
  usersRequest.send();
}

function renderUserData(data) {
  console.log('User Selected');
  var userSelectIndex = userListDropDown.selectedIndex - 1;
  console.log(userSelectIndex);
  for (i = 0; i < data.length; i++) {
    if (userSelectIndex == data[i].id) {
      firstNameEditForm.value = data[i].firstName;
      lastNameEditForm.value = data[i].lastName;
      ageEditForm.value = data[i].age;
      emailEditForm.value = data[i].email;
      PBL2EditForm.checked = data[i].qualifications.PBL2;
      SBEditForm.checked = data[i].qualifications.SB;
      FAEditForm.checked = data[i].qualifications.FA;
      MLEditForm.checked = data[i].qualifications.ML;
    } else {
    }
  }
}

// Event functions
// Fetches the event json list using an XML Http request
function eventFetch() {
  var eventRequest = new XMLHttpRequest();

  eventRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/events.json');
  eventRequest.onload = function() {
    var data = JSON.parse(eventRequest.responseText);
    console.log(data[0]);
  };

  eventRequest.send();
}

//Series Functions
//Fetch the series json list using an XML Http request
function seriesFetch() {
  var seriesRequest = new XMLHttpRequest();

  seriesRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/series.json');
  seriesRequest.onload = function() {
    var data = JSON.parse(seriesRequest.responseText);
    console.log(data[0]);
  };

  seriesRequest.send();
}
