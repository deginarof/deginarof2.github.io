const day = new Date();
console.log(day);
const dayNumber = day.getDay();
console.log(dayNumber);
const result = document.getElementById("message");
if (dayNumber == 5) {
    result.classList.add("showme");
} else {
    result.classList.add("hideme");
}