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
  return data;
}

function renderUsersList(data){
  var userString = "";

  for (var i = 0; i < data.length; i++) {
    userString = "<option id='selectNo"i"'>" + data[i].firstName + " " + data[i].lastName + "</option>";
    userListDropDown.insertAdjacentHTML('beforeend', userString);
    }
}

function renderUserData(data){
  console.log('User Selected');
  data
}

// Event functions
// Fetches the event json list using an XML Http request
function eventFetch(){
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
function seriesFetch(){
  var seriesRequest = new XMLHttpRequest();

  seriesRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/series.json');
  seriesRequest.onload = function() {
    var data = JSON.parse(seriesRequest.responseText);
    console.log(data[0]);
  };

  seriesRequest.send();
}
