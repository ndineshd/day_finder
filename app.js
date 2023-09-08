var userName = prompt("Enter Your Name :");
var welcomeMessage = "Welcome To Day Finder " + userName;
alert(welcomeMessage);

//refering and store the values of inputs,button,output
var yearInput = document.getElementById("year");
var monthInput  = document.getElementById("month");
var dayInput = document.getElementById("day");
var checkButton = document.getElementById("btn");
var outputDiv = document.getElementById("output")

//addind event listner to then button if i click then execute the function
checkButton.addEventListener("click", function(){
    //reading the input values and storing
    var yr = parseInt(yearInput.value);
    //js is get the months from 0 index
    var mnth = parseInt(monthInput.value) - 1; 
    var dy = parseInt(dayInput.value);

    //create date obj and store the values as yyyy-mm-dd
    var date = new Date(yr, mnth, dy);
    //get the day of week as number based index valoes 0 - 6
    var dayOfWeek = date.getDay();
    //storing  day names in array 
    var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    //getting day name fron week days
    var dayName = daysOfWeek[dayOfWeek];
    //displaying 
    outputDiv.textContent= "the day is: " + dayName;


});