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

function seriesRotaDefine(data) {
  // Grab the input elements
  var seriesName = document.getElementById('seriesType').value;
  var reqBoatNo = document.getElementById('seriesBoatNo').value;
  var personnelPerBoat = document.getElementById('seriesPersonnelNo').value;
  var startDate = document.getElementById('seriesStartDate').value;
  var endDate = document.getElementById('seriesEndDate').value;

  var seriesobj = {
    "Name": seriesName,
    "numberOfBoats": reqBoatNo,
    "startDate": startDate,
    "endDate": endDate,
    "races": {
      "date": {
        "boat1": {
          "RBoatDriver": {},
          "RBoatCrew": {}
        },
        "boat2": {
          "RBoatDriver": {},
          "RBoatCrew": {}
        }
      },
      "date": {
        "boat1": {
          "RBoatDriver": {},
          "RBoatCrew": {}
        },
        "boat2": {
          "RBoatDriver": {},
          "RBoatCrew": {}
        }
      },
      "date": {
        "boat1": {
          "RBoatDriver": {},
          "RBoatCrew": {}
        },
        "boat2": {
          "RBoatDriver": {},
          "RBoatCrew": {}
        }
      }
    }
  }

  console.log(seriesobj);

  boatFill = reqBoatNo;
  console.log("Personnel per boat is set at: " + personnelPerBoat);

  function getCountOf(d1, d2, dayToSearch) {

    var dateObj1 = d1.parse();
    var dateObj2 = d2.parse();
    var count = 0;
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayIndex = week.indexOf(dayToSearch);

    while (dateObj1.getTime() <= dateObj2.getTime()) {
      if (dateObj1.getDay() == dayIndex) {
        count++
      }
      dateObj1.setDate(dateObj1.getDate() + 1);
    }
    return count;
  }

  var d1 = new Date(startDate);

  var d2 = new Date(endDate);

  var dayToSearch = "Sun";

  getCountOf(d1, d2, dayToSearch);

  datesRequired = count;

  console.log(datesRequired);

  // Maybe....
  for (var a = 0; a < datesRequired; a++) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].qualifications.PBL2 && data[i].age >= 16 && boatFill > 0 && data[i].used != true) {
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

    boatFill = reqBoatNo;

    for (var i = 0; i < data.length; i++) {
      if (data[i].qualifications.PBL2 && boatFill > 0 && data[i].used != true) {
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
}
