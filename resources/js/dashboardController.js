// Defines the url variable for the server connection
var urlUsers = "http://localhost:8888/db/users.json";
var urlSeries = "http://localhost:8888/db/series.json";
var urlEvents = "http://localhost:8888/db/events.json";

// User functions
// Fetches the user json list using an XML Http request
function eventUserFetch() {
  var usersRequest = new XMLHttpRequest();

  usersRequest.open('GET', urlUsers);
  usersRequest.onload = function() {
    var recievedData = JSON.parse(usersRequest.responseText);
    eventRotaDefine(recievedData);
  };
  usersRequest.send();
}

function collateUsers(data){
  return;
}

function eventRotaDefine(data) {
  // Grab the input elements
  var nameEvent = document.getElementById('eventRotaName').value;
  var reqBoatNo = document.getElementById('eventBoatNo').value;
  var mlBoatNo = document.getElementById('eventBoatNoML').value;
  var personnelPerBoat = document.getElementById('eventBoatPersonnelNo').value;
  var startDate = document.getElementById('eventDateStart').value;
  var eventLength = document.getElementById('eventDateLength').value;

  var eventobj = {
    "EventName": nameEvent,
    "NumberOfBoats": reqBoatNo,
    "NumberOfMarklayers": mlBoatNo,
    "StartDate": startDate,
    "EventLength": eventLength,
    "MLBoatDriver": {},
    "MLBoatCrew": {},
    "RBoatDriver": {},
    "RBoatCrew": {}
  }

  boatFill = reqBoatNo;
  console.log("Personnel per boat is set at: " + personnelPerBoat);

  // Maybe....
  for (var i = 0; i < data.length; i++) {
    if (data[i].qualifications.PBL2 && data[i].qualifications.ML && data[i].age >= 16 && boatFill > 0 && mlBoatNo > 0 && data[i].used != true) {
      for (var a = 0; a < personnelPerBoat; a++) {
        var selector = 1;
        if (selector = 1) {
          eventobj.MLBoatDriver[boatFill] = data[i].firstName + " " + data[i].lastName;
          data[i].used = true;
          selector--;
        }
      }
      mlBoatNo--;
      boatFill--;
    } else if (data[i].qualifications.PBL2 && data[i].age >= 16 && data[i].qualifications.ML == false && reqBoatNo > mlBoatNo && boatFill > 0 && data[i].used != true) {
      for (var a = 0; a < personnelPerBoat; a++) {
        var selector = 1;
        if (selector = 1) {
          eventobj.RBoatDriver[boatFill] = data[i].firstName + " " + data[i].lastName;
          data[i].used = true;
          selector--;
        }
      }
      boatFill--;
    }
  }

  // Grab the input elements
  var nameEvent = document.getElementById('eventRotaName').value;
  var reqBoatNo = document.getElementById('eventBoatNo').value;
  var mlBoatNo = document.getElementById('eventBoatNoML').value;
  var personnelPerBoat = document.getElementById('eventBoatPersonnelNo').value;
  var startDate = document.getElementById('eventDateStart').value;
  var eventLength = document.getElementById('eventDateLength').value;

  boatFill = reqBoatNo;

  // Maybe not...
  for (var i = 0; i < data.length; i++) {
    if (data[i].qualifications.PBL2 && boatFill > 0 && mlBoatNo > 0 && data[i].used != true) {
      for (var a = 0; a < personnelPerBoat; a++) {
        var selector = 1;
        if (selector = 1) {
          eventobj.MLBoatCrew[boatFill] = data[i].firstName + " " + data[i].lastName;
          data[i].used = true;
          selector--;
        }
      }
      mlBoatNo--;
      boatFill--;
    } else if (data[i].qualifications.PBL2 && data[i].qualifications.ML == false && reqBoatNo > mlBoatNo && boatFill > 0 && data[i].used != true) {
      for (var a = 0; a < personnelPerBoat; a++) {
        var selector = 1;
        if (selector = 1) {
          eventobj.RBoatCrew[boatFill] = data[i].firstName + " " + data[i].lastName;
          data[i].used = true;
          selector--;
        }
      }
      boatFill--;
    }
  }
  console.log(eventobj);
  console.log(data);
}

function seriesRotaDefine(data){
  // Grab the input elements
  var seriesName = document.getElementById('seriesRotaName').value;
  var reqBoatNo = document.getElementById('seriesBoatNo').value;
  var personnelPerBoat = document.getElementById('seriesBoatPersonnelNo').value;
  var startDate = document.getElementById('seriesDateStart').value;
  var endDate = document.getElementById('seriesDateLength').value;

  var seriesobj = {
    "Name": nameSeroes,
    "numberOfBoats": reqBoatNo,
    "startDate": startDate,
    "endDate": eventLength,
    "RBoatDriver": {},
    "RBoatCrew": {}
  }

  boatFill = reqBoatNo;
  console.log("Personnel per boat is set at: " + personnelPerBoat);

  // Maybe....
  for (var i = 0; i < data.length; i++) {
    } if (data[i].qualifications.PBL2 && data[i].age >= 16 && data[i].qualifications.ML == false && reqBoatNo > mlBoatNo && boatFill > 0 && data[i].used != true) {
      for (var a = 0; a < personnelPerBoat; a++) {
        var selector = 1;
        if (selector = 1) {
          eventobj.RBoatDriver[boatFill] = data[i].firstName + " " + data[i].lastName;
          data[i].used = true;
          selector--;
        }
      }
      boatFill--;
    }
  }

  // Grab the input elements
  var seriesName = document.getElementById('seriesRotaName').value;
  var reqBoatNo = document.getElementById('seriesBoatNo').value;
  var personnelPerBoat = document.getElementById('seriesBoatPersonnelNo').value;
  var startDate = document.getElementById('seriesDateStart').value;
  var endDate = document.getElementById('seriesDateLength').value;

  boatFill = reqBoatNo;

  // Maybe not...
  for (var i = 0; i < data.length; i++) {
     if (data[i].qualifications.PBL2 && data[i].qualifications.ML == false && reqBoatNo > mlBoatNo && boatFill > 0 && data[i].used != true) {
      for (var a = 0; a < personnelPerBoat; a++) {
        var selector = 1;
        if (selector = 1) {
          eventobj.RBoatCrew[boatFill] = data[i].firstName + " " + data[i].lastName;
          data[i].used = true;
          selector--;
        }
      }
      boatFill--;
    }
  }
  console.log(seriesobj);
  console.log(data);
}
