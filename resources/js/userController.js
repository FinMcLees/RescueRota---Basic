// Detects if the user has clicked on the dropdown menu for user edit
var userListDropDown = document.getElementById('userList');

// Watches the Delete and Save button for user editing
var saveUserBtn = document.getElementById('saveUserSubmit');
var deleteUserBtn = document.getElementById('deleteUserSubmit');
saveUserBtn.addEventListener('click', userFetchSaveData);
deleteUserBtn.addEventListener('click', userFetchDeleteData);

// Get edit user form elements
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

  usersRequest.open('GET', 'http://localhost/db/users.json');
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

  usersRequest.open('GET', 'http://localhost/db/users.json');
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
      var currentSelectedUser = data[i];
      // deleteUserData(currentSelectedUser);
    }
  }
}

// Deleting a user
function userFetchDeleteData() {
  var usersRequest = new XMLHttpRequest();

  usersRequest.open('GET', 'http://localhost/db/users.json');
  usersRequest.onload = function() {
    var recievedData = JSON.parse(usersRequest.responseText);
    deleteUserData(recievedData);
  };
  usersRequest.send();
}

function deleteUserData(data) {
  var userSelectIndex = userListDropDown.selectedIndex - 1;
  for (i = 0; i < data.length; i++) {
    if (userSelectIndex == data[i].id) {
      console.log("Current selected user: " + data[i].firstName + " " + data[i].lastName + " will be deleted.");
    }
  }
  console.log();
}

// Saving or Creating a user
function userFetchSaveData() {
  var usersRequest = new XMLHttpRequest();

  usersRequest.open('GET', 'http://localhost/db/users.json');
  usersRequest.onload = function() {
    var recievedData = JSON.parse(usersRequest.responseText);
    saveUserData(recievedData);
  };
  usersRequest.send();
}

function saveUserData(data) {
  var userSelectIndex = userListDropDown.selectedIndex - 1;
  for (i = 0; i < data.length; i++) {
    if (userSelectIndex == data[i].id) {
      console.log("Current selected user: " + data[i].firstName + " " + data[i].lastName + " will be saved.");

      // Retrieves a fresh data item from each of the value properties of the elements
      var firstNameEditForm = document.getElementById('editFirstName');
      var lastNameEditForm = document.getElementById('editLastName');
      var ageEditForm = document.getElementById('editAge');
      var emailEditForm = document.getElementById('editEmail');
      var PBL2EditForm = document.getElementById('editPBL2');
      var SBEditForm = document.getElementById('editSB');
      var FAEditForm = document.getElementById('editFA');
      var MLEditForm = document.getElementById('editML');

      // Sets the data properties of the selected object equal to the corresponding element value
      data[i].firstName = firstNameEditForm.value;
      data[i].lastName = lastNameEditForm.value;
      data[i].age = ageEditForm.value;
      data[i].email = emailEditForm.value;
      data[i].qualifications.PBL2 = PBL2EditForm.checked;
      data[i].qualifications.SB = SBEditForm.checked;
      data[i].qualifications.FA = FAEditForm.checked;
      data[i].qualifications.ML = MLEditForm.checked;

      // Updates the user json file
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', 'http://localhost/db/users.json', true);
      xhr.onload = function() {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {

        }
      }

    }
  }
}

// Event functions
// Fetches the event json list using an XML Http request
function eventFetch() {
  var eventRequest = new XMLHttpRequest();

  eventRequest.open('GET', 'http://localhost/db/events.json');
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

  seriesRequest.open('GET', 'http://localhost/db/series.json');
  seriesRequest.onload = function() {
    var data = JSON.parse(seriesRequest.responseText);
    console.log(data[0]);
  };

  seriesRequest.send();
}
