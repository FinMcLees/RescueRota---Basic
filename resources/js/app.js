var usersRequest = new XMLHttpRequest();

usersRequest.open('GET', 'https://raw.githubusercontent.com/FinMcLees/RescueRota---Basic/master/resources/db/data.json');
usersRequest.onload = function() {
  var data = JSON.parse(usersRequest.responseText);
  console.log(data[0]);
};

usersRequest.send();
