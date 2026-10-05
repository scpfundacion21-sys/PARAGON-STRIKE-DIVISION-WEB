/* =====================================================
   PARAGON // STRIKE DIVISION
   SYSTEM BOOT
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const intro =
    document.getElementById("intro");

const progressBar =
    document.getElementById("progressBar");

const bootPercent =
    document.getElementById("bootPercent");

const statusText =
    document.getElementById("statusText");

const enterButton =
    document.getElementById("enterButton");


/* =====================================================
   ESTADOS
===================================================== */

const bootStatuses = [

    {
        percent: 0,
        text: "ESTABLISHING SECURE CONNECTION..."
    },

    {
        percent: 25,
        text: "VERIFYING PARAGON NETWORK..."
    },

    {
        percent: 50,
        text: "AUTHENTICATING TACTICAL DATABASE..."
    },

    {
        percent: 75,
        text: "LOADING STRIKE DIVISION..."
    },

    {
        percent: 100,
        text: "SECURE CONNECTION ESTABLISHED."
    }

];


let progress = 0;

let bootComplete = false;


/* =====================================================
   ACTUALIZAR BOOT
===================================================== */

function updateBoot() {

    progress++;

    if (progress > 100) {

        progress = 100;

    }


    progressBar.style.width =
        progress + "%";


    bootPercent.textContent =
        String(progress).padStart(2, "0") + "%";


    let currentStatus =
        bootStatuses[0];


    for (
        let i = 0;
        i < bootStatuses.length;
        i++
    ) {

        if (
            progress >=
            bootStatuses[i].percent
        ) {

            currentStatus =
                bootStatuses[i];

        }

    }


    statusText.textContent =
        currentStatus.text;


    if (progress >= 100) {

        completeBoot();

    }

}


/* =====================================================
   BOOT COMPLETADO
===================================================== */

function completeBoot() {

    if (bootComplete) {

        return;

    }


    bootComplete = true;


    progress = 100;


    progressBar.style.width =
        "100%";


    bootPercent.textContent =
        "100%";


    statusText.textContent =
        "SECURE CONNECTION ESTABLISHED.";


    enterButton.disabled = false;

}


/* =====================================================
   ENTRAR
===================================================== */

enterButton.addEventListener(
    "click",
    function () {

        if (!bootComplete) {

            return;

        }


        intro.classList.add("hidden");


        document.body.style.overflow =
            "auto";

    }
);


/* =====================================================
   INICIAR SISTEMA
===================================================== */

const bootInterval =
    setInterval(
        function () {

            updateBoot();


            if (bootComplete) {

                clearInterval(
                    bootInterval
                );

            }

        },
        45
    );
