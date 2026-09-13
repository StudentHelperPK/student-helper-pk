// ================================
// STUDY TIMER
// ================================

let timerSeconds = 25 * 60;

let timerInterval = null;


function updateTimerDisplay() {

    const display =
        document.getElementById("timerDisplay");


    if (!display) {
        return;
    }


    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;


    display.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


function startTimer() {

    if (timerInterval !== null) {
        return;
    }


    timerInterval =
        setInterval(function () {

            if (timerSeconds > 0) {

                timerSeconds--;

                updateTimerDisplay();

            } else {

                clearInterval(timerInterval);

                timerInterval = null;

                alert("🎉 Study session complete!");

            }

        }, 1000);
}


function pauseTimer() {

    if (timerInterval !== null) {

        clearInterval(timerInterval);

        timerInterval = null;
    }
}


function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timerSeconds = 25 * 60;

    updateTimerDisplay();
}


// ================================
// WORD COUNTER
// ================================

function countWords() {

    const box =
        document.getElementById("wordText");


    if (!box) {
        return;
    }


    const text =
        box.value;


    const words =
        text.trim() === ""
            ? []
            : text.trim().split(/\s+/);


    document.getElementById("wordCount")
        .textContent =
        words.length;


    document.getElementById("characterCount")
        .textContent =
        text.length;


    document.getElementById("characterNoSpaceCount")
        .textContent =
        text.replace(/\s/g, "").length;
}


function clearWordCounter() {

    const box =
        document.getElementById("wordText");


    box.value = "";

    countWords();
}


// ================================
// QUICK NOTES
// ================================

function saveNotes() {

    const notesBox =
        document.getElementById("studyNotes");

    const message =
        document.getElementById("notesMessage");


    const notes =
        notesBox.value.trim();


    if (notes === "") {

        message.textContent =
            "❌ Write something first.";

        return;
    }


    localStorage.setItem(
        "studentHelperNotes",
        notes
    );


    message.textContent =
        "✅ Notes saved successfully!";
}


function clearNotes() {

    const notesBox =
        document.getElementById("studyNotes");


    notesBox.value = "";


    localStorage.removeItem(
        "studentHelperNotes"
    );


    document.getElementById("notesMessage")
        .textContent =
        "Notes cleared.";
}


// ================================
// PAGE LOAD
// ================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateTimerDisplay();


        const notesBox =
            document.getElementById("studyNotes");


        const savedNotes =
            localStorage.getItem(
                "studentHelperNotes"
            );


        if (notesBox && savedNotes) {

            notesBox.value =
                savedNotes;
        }

    }
);