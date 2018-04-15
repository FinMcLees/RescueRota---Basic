function userFetch() {
  var usersRequest = new XMLHttpRequest();

  usersRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/data.json');
  usersRequest.onload = function() {
    var data = JSON.parse(usersRequest.responseText);
    console.log(data[0]);
  };

  usersRequest.send();
}

function eventFetch(){
  var eventRequest = new XMLHttpRequest();

  eventRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/events.json');
  eventRequest.onload = function() {
    var data = JSON.parse(eventRequest.responseText);
    console.log(data[0]);
  };

  eventRequest.send();
}

function seriesFetch(){
  var seriesRequest = new XMLHttpRequest();

  seriesRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/series.json');
  seriesRequest.onload = function() {
    var data = JSON.parse(seriesRequest.responseText);
    console.log(data[0]);
  };

  seriesRequest.send();
}

function renderUsersList(data){
  for (var i = 0; i < data.length; i++) {
    }

function usersUpdate(){

}

function eventUpdate(){

}

function seriesUpdate(){

}
