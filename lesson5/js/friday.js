function myfunction() {}
var day = new Date().getDay();
var message;
if (day == 5) {
    message = document.getElementsByClassName('.message').style.display = "block";
} else {
    message = document.getElementsByClassName('.message').style.display = "none";
}