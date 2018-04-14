var request = new XMLHttpRequest();

request.open('GET', '../db/data.json');
request.onload = function() {
  console.log(request.responseText);
};

request.send();
