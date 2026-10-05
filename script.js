```javascript
/* =========================================
   PARAGON // STRIKE DIVISION
   SYSTEM BOOT
========================================= */

const intro = document.getElementById("intro");
const progressBar = document.getElementById("progressBar");
const bootPercent = document.getElementById("bootPercent");
const statusText = document.getElementById("statusText");
const skipButton = document.getElementById("skip");

const statuses = [
    { percent: 0, text: "ESTABLISHING SECURE CONNECTION..." },
    { percent: 25, text: "VERIFYING PARAGON NETWORK..." },
    { percent: 55, text: "AUTHENTICATING TACTICAL DATABASE..." },
    { percent: 82, text: "LOADING STRIKE DIVISION..." },
    { percent: 100, text: "SECURE CONNECTION ESTABLISHED." }
];

let progress = 0;
let finished = false;

function updateBoot() {

    progress++;

    if (progress > 100) {
        progress = 100;
    }

    progressBar.style.width =
        progress + "%";

    bootPercent.textContent =
        String(progress).padStart(2, "0") + "%";


    const currentStatus = statuses
        .slice()
        .reverse()
        .find(status => progress >= status.percent);


    if (currentStatus) {

        statusText.textContent =
            currentStatus.text;

    }


    if (progress >= 100) {

        finishBoot();

    }
}


function finishBoot() {

    if (finished) return;

    finished = true;

    statusText.textContent =
        "SECURE CONNECTION ESTABLISHED.";


    setTimeout(() => {

        hideIntro();

    }, 700);
}


function hideIntro() {

    intro.classList.add("hidden");

}


skipButton.addEventListener("click", () => {

    hideIntro();

});


const bootInterval = setInterval(() => {

    updateBoot();

    if (finished) {

        clearInterval(bootInterval);

    }

}, 45);
```
