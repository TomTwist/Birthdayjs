now = new Date
var theYear=now.getYear()
if (theYear < 1900)
theYear=theYear+1900
// parseInt(theYear)

var yearOfBirth = parseInt(prompt("What's the year of your birth?"))
var counterAge = 0

while ( yearOfBirth <= theYear) {
  document.write('<p class="year-item">' + counterAge + ' in ' + yearOfBirth + '</p>')
  yearOfBirth += 1
  counterAge += 1
}
