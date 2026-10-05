/* =========================================================
   PARAGON // STRIKE DIVISION
   SYSTEM BOOT
========================================================= */

const bootScreen = document.getElementById("boot-screen");
const commandCenter = document.getElementById("command-center");

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const bootPercent = document.getElementById("boot-percent");

const bootStatus = document.getElementById("boot-status");
const bootWarning = document.getElementById("boot-warning");

const enterButton = document.getElementById("enter-button");


/* =========================================================
   BOOT VARIABLES
========================================================= */

let progress = 0;

const bootMessages = [
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


/* =========================================================
   UPDATE BOOT
========================================================= */

function updateBoot() {

  progressBar.style.width = progress + "%";

  progressText.textContent =
    String(progress).padStart(2, "0") + "%";

  bootPercent.textContent =
    String(progress).padStart(2, "0") + "%";


  let currentMessage =
    bootMessages[0].text;


  for (let i = 0; i < bootMessages.length; i++) {

    if (progress >= bootMessages[i].percent) {

      currentMessage =
        bootMessages[i].text;
    }
  }


  bootStatus.textContent =
    currentMessage;


  /* =========================================
     100%
  ========================================== */

  if (progress >= 100) {

    progress = 100;

    progressBar.style.width = "100%";

    progressText.textContent = "100%";

    bootPercent.textContent = "100%";

    bootStatus.textContent =
      "SECURE CONNECTION ESTABLISHED.";


    bootWarning.textContent =
      "SYSTEM READY // USER AUTHENTICATION REQUIRED";


    /* ACTIVAR BOTÓN */

    enterButton.disabled = false;

    enterButton.style.opacity = "1";

  }
}


/* =========================================================
   BOOT LOOP
========================================================= */

const bootInterval = setInterval(() => {

  if (progress < 100) {

    progress++;

    updateBoot();

  } else {

    /*
       MUY IMPORTANTE:

       NO hacemos ninguna transición aquí.

       El sistema queda detenido en 100%.
    */

    clearInterval(bootInterval);
  }

}, 55);


/* =========================================================
   ENTRAR
========================================================= */

enterButton.addEventListener("click", () => {

  if (enterButton.disabled) {
    return;
  }


  /* Evitar doble clic */

  enterButton.disabled = true;


  /* Fade del SYSTEM BOOT */

  bootScreen.classList.add("fade-out");


  setTimeout(() => {

    bootScreen.style.display = "none";

    commandCenter.style.display = "block";

    commandCenter.classList.add("fade-in");

    window.scrollTo(0, 0);

  }, 800);

});
