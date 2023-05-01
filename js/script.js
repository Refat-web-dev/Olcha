var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//timer
const deadline = "2023-06-20 00:00"
function getTime(endTime) {

    const t = Date.parse(endTime) - Date.parse(new Date),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        hours,
        minutes,
        seconds
    }
}
function showTime(endTime, selector) {
    const timer = document.querySelector(selector),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        interval = setInterval(setTime, 1000);

    function setTime() {
        const t = getTime(endTime)
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
        if (t.t <= 0) {
            hours.innerHTML = '0'
            minutes.innerHTML = '0'
            seconds.innerHTML = '0'
            console.log(t.t);
            clearInterval(interval)
        }

    }
}
showTime(deadline, ".timer")
