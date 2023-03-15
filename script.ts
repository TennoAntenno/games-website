
//AGE
var age, daysBetweenDates;
daysBetweenDates = function(d1, d2) {
    var diffDays, oneDay;
    oneDay = 24 * 60 * 60 * 1000;
    diffDays = (d2 - Date.parse(d1)) / oneDay;
    return diffDays;
};

age = function() {
    document.getElementById("age").textContent = String((daysBetweenDates('Aug 11, 2007 00:00:00', new Date()) / 365.24).toFixed(8));
};

setInterval(age, 20);

//SCROLL BLUR
window.onscroll = function(){
    var title = document.getElementById("title")
    title.style.backgroundSize = (80 - window.scrollY / 150)+ "px " + (80 - window.scrollY / 150 + "px")
    title.style.fontSize = 2 - window.scrollY / 2500 + "rem";
    title.style.filter = "blur(" + window.scrollY / 125 + "px)";
}