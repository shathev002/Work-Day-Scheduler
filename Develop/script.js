
// Display current date with Day.js library

var currentDate = $('#currentDay');
var currentDateFormat = dayjs().format('dddd, MMMM DD');

currentDate.text(currentDateFormat);

$(document).ready(function () {

// click event for save button to save text into local storage

$('.saveBtn').on('click', function() { 
  var timeBlock = $(this).parent().attr("id"); 
  var textArea = $(this).siblings(".description").val();

  localStorage.setItem(timeBlock, textArea);
});

//Getting text from localStorage

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


});

// color coding time blocks by comparing each time block hour with the current hour

var currentHr = dayjs().hour();

function colorCoding () {

  //loop to each time block to compare with the current hour
  //split the array to grab each id and used parseInt to convert into a number

  $('.time-block').each(function() {
    var timeBlockHr = parseInt($(this).attr('id').split('-')[1]);

      if (timeBlockHr === currentHr) {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');

      } else if (timeBlockHr < currentHr) {
        $(this).removeClass('present');
        $(this).addClass('past');
        $(this).removeClass('future');

      } else { 

        $(this).removeClass('past');
        $(this).addClass('future');
        $(this).removeClass('present');

      };


  });

};

colorCoding ();








