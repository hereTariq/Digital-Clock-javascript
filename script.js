const clockElement = document.getElementById('clock');
const buttonsElement = document.querySelectorAll(".format button");
let format;

// function for getting the time
const getTime = function() {

    //getting date object
    let date = new Date();

    // extrcting hour, minute and second from date object
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let amPm = hour >= 12 ? "PM" : "AM";

    if (format === "12") {

        hour = hour >= 12 ? hour % 12 : hour;
    }
    // formatting the clock
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    clockElement.innerHTML = `<h2> ${hour} : ${minute} : ${second} ${amPm}  </h2>`;
}
buttonsElement.forEach(button => {
    button.addEventListener('click', () => {
        format = button.dataset.format;
        getTime();
    })
});

setInterval(getTime, 1000)
