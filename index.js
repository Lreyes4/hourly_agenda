var btns = $('.input-group-append');
var times = $('.time');
var textAreas = $('textarea');
var currentDay = $('#currentDay');
var date = moment().format("MMM Do, YYYY, hh:mm");

currentDay.text(date)
var time = moment().format("HH");
console.log(time);

btns.on('click', function (event) {
    console.log($(this).siblings('textarea').val())
    const value = $(this).siblings('textarea').val()
    console.log($(this).siblings('.time').text())
    const key = $(this).siblings('.time').text()
    localStorage.setItem(key, value)
});
const workday = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (let i = 0; i < times.length; i++) {
    const element = times[i];
    console.log(element.textContent)
    const storage = localStorage.getItem(element.textContent)
    if (storage) {
        textAreas[i].value = storage

    }
    if (workday[i] === time) {
        element.classList.add('present')
        textAreas[i].classList.add('present')
    } else if (workday[i] < time) {
        element.classList.add('past')
        textAreas[i].classList.add('past')
    } else {
        element.classList.add('future')
        textAreas[i].classList.add('future')
    }
}