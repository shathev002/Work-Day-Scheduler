// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});


var saveBtn = $('.saveBtn');
var currentDate = $('#currentDay');
var currentDateFormat = dayjs().format('dddd, MMMM DD');

currentDate.text(currentDateFormat);

$(document).ready(function () {

 // save button  

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
// color coding time blocks

var currentHr = dayjs().hour();
//var timeBlockHr = parseInt($(this).attr('id').split('')[1]); //error
//var timeBlockHr = parseInt($(this).attr('id')); //undefined 
//var timeBlockHr = $(this).attr('id'); //undefined 
//console.log($(this).attr('id')); //undefined 

//console.log(currentHr);
//console.log(timeBlockHr);
console.log($(this));

function colorCoding () {


  $('time-block').each(function() {
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








