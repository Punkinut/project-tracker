var wholeTime = moment();
$("#top-time").text(wholeTime.format("MMM Do, YYYY, H[:]mA"));

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( ".sortable" ).sortable();
  } );


var projectButton = $("#project-button")
var nameInput = $(".name-time")
var hourRate = $(".hour-rate")
var dueDate = $(".due-date")
var dropDown = $(".drop-down")
var addsToRow = $(".row-addition")

// Function that validates the information
function formValid (event) {
    if(typeof nameInput.val() !== 'string' || nameInput.val().trim() === "" || typeof parseInt(hourRate.val()) !== 'number' || hourRate.val().trim() === "" || typeof dueDate.val() !== 'string' || dueDate.val().trim() === "" || dropDown.val() == "no") {
        event.preventDefault();
        alert("Please fill in the required fields!")
    } else {
        appendData();
        projectButton.attr("data-dismiss", "modal")
    }
}

// Function that adds the data to the page
function appendData () {
    var tableRow = $("<tr>");
    var tableHead = $("<th>");
    var tableDataOne = $("<td>")
    var tableDataTwo = $("<td>");
    var tableDataThree = $("<td>");
    var tableDataFour = $("<td>");
    var tableDataFive = $("<td>");
    tableHead.text(nameInput.val());
    tableDataOne.text(dropDown.val())
    tableDataTwo.text(hourRate.val() + "/hr")
    tableDataThree.text(dueDate.val())
    tableDataFour.text(days)
    tableDataFive.text(rate)
    tableRow.append(tableHead);
    tableRow.append(tableDataOne);
    tableRow.append(tableDataTwo);
    tableRow.append(tableDataThree);
    tableRow.append(tableDataFour);
    tableRow.append(tableDataFive);
    addsToRow.append(tableRow);
}

var calc;

function daysUntilDateCalculator () {
    var currentDay = moment().format("DDD");
    var futureDayGather = dueDate.val();
    var futureDay = moment(futureDayGather, "MM-DD-YY").format("DDD")
    calc = futureDay - currentDay;
    return calc;
}

function totalEarningsCalculator () {
    var dayRate = hourRate.val() * 6;
    totalRate = dayRate * calc;
    return totalRate;
}

var days = daysUntilDateCalculator;
var rate = totalEarningsCalculator;

// Higher order variable that collect all the functions
var data = formValid;

projectButton.on("click", data);
