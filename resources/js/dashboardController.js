// Defines the url variable for the server connection
var urlUsers = "http://localhost:8888/db/users.json";
var urlSeries = "http://localhost:8888/db/series.json";
var urlEvents = "http://localhost:8888/db/events.json";

// User functions
// Fetches the user json list using an XML Http request
function userFetch() {
  var usersRequest = new XMLHttpRequest();

  usersRequest.open('GET', urlUsers);
  usersRequest.onload = function() {
    var recievedData = JSON.parse(usersRequest.responseText);
    collateUsers(recievedData);
  };
  usersRequest.send();
}

function collateUsers(data){
  return;
}

function eventRotaDefine(){
  // Grab the input elements
  var nameEvent = document.getElementById('eventRotaName').value;
  var boatNo = document.getElementById('eventBoatNo').value;
  var mlBoatNo = document.getElementById('eventBoatNoML').value;
  var personnelPerBoat = document.getElementById('eventBoatPersonnelNo').value;
  var startDate = document.getElementById('eventDateStart').value;
  var eventLength = document.getElementById('eventDateLength').value;

  console.log(nameEvent);
  console.log(boatNo);
  console.log(mlBoatNo);
  console.log(personnelPerBoat);
  console.log(startDate);
  console.log(eventLength);
  //
}

function seriesRotaDefine(){
  userFetch()

  // Grab the input elements
}
