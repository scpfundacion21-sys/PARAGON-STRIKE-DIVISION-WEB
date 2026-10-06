/* =========================================
   PARAGON STRIKE DIVISION
   SYSTEM BOOT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const bootScreen = document.getElementById("bootScreen");

const mainSystem = document.getElementById("mainSystem");

const progressFill = document.getElementById("progressFill");

const progressText = document.getElementById("progressText");

const systemStatus = document.getElementById("systemStatus");

const enterButton = document.getElementById("enterButton");


/* =========================================
   BOOT STATUS
========================================= */

const bootMessages = [

    {
        percent: 0,
        text: "INITIALIZING..."
    },

    {
        percent: 15,
        text: "LOADING CORE..."
    },

    {
        percent: 30,
        text: "CHECKING SECURITY..."
    },

    {
        percent: 45,
        text: "ESTABLISHING CONNECTION..."
    },

    {
        percent: 60,
        text: "LOADING DATABASE..."
    },

    {
        percent: 75,
        text: "VERIFYING SYSTEM..."
    },

    {
        percent: 90,
        text: "SYSTEM READY..."
    },

    {
        percent: 100,
        text: "CONNECTION ESTABLISHED"
    }

];


/* =========================================
   BOOT PROCESS
========================================= */

let progress = 0;

const bootDuration = 5000;

const startTime = Date.now();


function updateBoot() {

    const elapsed = Date.now() - startTime;

    progress = Math.min(
        Math.floor(
            (elapsed / bootDuration) * 100
        ),
        100
    );


    progressFill.style.width =
        progress + "%";


    progressText.textContent =
        String(progress).padStart(2, "0") + "%";


    let currentMessage =
        bootMessages[0];


    for (const message of bootMessages) {

        if (progress >= message.percent) {

            currentMessage = message;

        }

    }


    systemStatus.textContent =
        currentMessage.text;


    if (progress < 100) {

        requestAnimationFrame(
            updateBoot
        );

    } else {

        finishBoot();

    }

}


/* =========================================
   FINISH BOOT
========================================= */

function finishBoot() {

    setTimeout(() => {

        bootScreen.classList.add(
            "hidden"
        );

        mainSystem.classList.add(
            "visible"
        );

    }, 800);

}


/* =========================================
   ENTER BUTTON
========================================= */

enterButton.addEventListener(
    "click",
    () => {

        enterButton.style.pointerEvents =
            "none";

        enterButton.style.opacity =
            "0.5";

        /*
         * Aquí agregaremos después
         * el menú principal.
         */

        console.log(
            "PARAGON SYSTEM ENTERED"
        );

    }
);


/* =========================================
   START
========================================= */

window.addEventListener(
    "load",
    () => {

        updateBoot();

    }
);
