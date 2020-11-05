const t = parseFloat(document.getElementById("currenTemp").textContent);
const s = parseFloat(document.getElementById("windSpeed").textContent);
const output = "not applicable";

let w = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
w = Math.round(w);

if (t <= 50 && s > 3) {
    document.getElementById("wind").innerHTML = w;
} else {
    document.getElementById("wind").innerHTML = output;
}