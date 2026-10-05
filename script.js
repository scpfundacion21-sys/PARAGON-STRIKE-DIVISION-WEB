/* =========================================
   PARAGON // STRIKE DIVISION
   INTRO SYSTEM
========================================= */

const intro = document.getElementById("intro");

const progressBar = document.getElementById("progressBar");

const progressPercent =
    document.getElementById("progressPercent");

const systemStatus =
    document.getElementById("systemStatus");

const statusText =
    document.getElementById("status");

const skipButton =
    document.getElementById("skip");


let progress = 0;

let loadingFinished = false;


/* =========================================
   MENSAJES DEL SISTEMA
========================================= */

const statuses = [

    {
        percent: 25,
        text: "AUTHENTICATING PARAGON NETWORK..."
    },

    {
        percent: 55,
        text: "VERIFYING SECURE CONNECTION..."
    },

    {
        percent: 82,
        text: "ACCESSING STRIKE DIVISION..."
    },

    {
        percent: 100,
        text: "SECURE CONNECTION ESTABLISHED."
    }

];


/* =========================================
   ACTUALIZAR ESTADO
========================================= */

function updateStatus(value) {

    systemStatus.textContent =
        `SYSTEM BOOT // ${String(value).padStart(2, "0")}%`;

    progressPercent.textContent =
        `${String(value).padStart(2, "0")}%`;

    progressBar.style.width =
        `${value}%`;


    for (const item of statuses) {

        if (value >= item.percent) {

            statusText.textContent =
                item.text;

        }

    }

}


/* =========================================
   FINALIZAR INTRO
========================================= */

function showSite() {

    if (loadingFinished) return;

    loadingFinished = true;

    progress = 100;

    updateStatus(100);


    setTimeout(() => {

        intro.style.opacity = "0";

        intro.style.visibility = "hidden";

        document.body.style.overflowY = "auto";

    }, 600);

}


/* =========================================
   CARGA
========================================= */

const loading = setInterval(() => {

    progress++;

    updateStatus(progress);


    if (progress >= 100) {

        clearInterval(loading);

        setTimeout(showSite, 700);

    }

}, 45);


/* =========================================
   ENTRAR
========================================= */

skipButton.addEventListener("click", () => {

    clearInterval(loading);

    showSite();

});


/* =========================================
   ESTADO INICIAL
========================================= */

document.body.style.overflow = "hidden";

updateStatus(0);
