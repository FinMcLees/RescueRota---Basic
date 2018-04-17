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

function eventRotaDefine(data){
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
    "BoatLayout": {
    }
  }

  boatFill = reqBoatNo;

  // Maybe....
  for (var i = 0; i < data.length; i++) {
    if (data[i].qualifications.PBL2 && data[i].qualifications.ML && data[i].age >= 16 && boatFill > 0) {
      eventobj.BoatLayout[boatFill] = data[i].firstName + " " + data[i].lastName;
      console.log(boatFill);
    } else if (data[i].qualifications.PBL2 && data[i].age >= 16 && data[i].qualifications.ML == false && reqBoatNo > mlBoatNo && boatFill > 0) {
      eventobj.BoatLayout[boatFill] = person = data[i].firstName + " " + data[i].lastName;
    }
    boatFill--;
  }
  console.log(eventobj.BoatLayout);
}
// function seriesRotaDefine(){
//   // Grab the input elements
//   for (var i = 0; i < data.length; i++) {
//     for (var j = 0; j < spacesRequired; j++) {
//       if (data[i].qualifications.PBL2 && data[i].qualifications.ML && data[i].age >= 16) {
//         console.log(j)
//       }
//     }
//   }
// }
