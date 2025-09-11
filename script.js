let darkmodeStatus = localStorage.getItem("darkmodeStatus");
const themeButton = document.getElementById("theme-button");

function enableDarkmode() {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmodeStatus", "active");
}

function disableDarkmode() {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmodeStatus", null);
}

if (darkmodeStatus === "active") enableDarkmode();

themeButton.addEventListener("click", () => {
    darkmodeStatus = localStorage.getItem("darkmodeStatus");
    darkmodeStatus !== "active" ? enableDarkmode() : disableDarkmode();
});

function clockTiming() {
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const timeDisplay = document.querySelector(".clock__time");
    const secondsDisplay = document.querySelector(".clock_seconds");

    timeDisplay.textContent = setTimeFormat(hour) + ":" + setTimeFormat(minutes);
    secondsDisplay.textContent = setTimeFormat(seconds);
}

function setTimeFormat(value) {
    if (value > 9) return value;
    else return "0" + value;
}

setInterval(clockTiming, 1000);
