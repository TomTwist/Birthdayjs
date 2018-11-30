now = new Date // importiert das heutige Datum
var theYear = now.getYear() //holt das Jahr aus dem Datum
if (theYear < 1900)
theYear= theYear + 1900
var html = [];

var yearOfBirth = parseInt(prompt("What's the year of your birth?"))
var counterAge = 0

function printAges(message) {
  var outputDiv = document.getElementById('age-output');
  outputDiv.innerHTML = message;
}

while (yearOfBirth <= theYear) {
  html += '<p class="year-item">' + counterAge + ' in ' + yearOfBirth + '</p>'; //hier werden die einzelnen jahre gesammelt und gelistet
  yearOfBirth += 1;
  counterAge += 1;
}

printAges(html);
