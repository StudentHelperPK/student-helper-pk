const entryTestData = {

    "mdcat": {
        title: "MDCAT",
        intro: "Medical admission test preparation guide.",
        about: "MDCAT medical and dental admission ke liye important entry test hai. Exact eligibility aur current pattern official authority se verify karna zaroori hai.",

        subjects: [
            "Biology",
            "Chemistry",
            "Physics",
            "English",
            "Logical Reasoning"
        ],

        tips: [
            "Biology concepts strong karein.",
            "Chemistry aur Physics MCQs practice karein.",
            "Timed practice tests attempt karein.",
            "Official syllabus regularly check karein."
        ]
    },

    "ecat": {
        title: "ECAT",
        intro: "Engineering entry test preparation guide.",
        about: "ECAT engineering-related admissions ke liye use hone wala entry test hai. Requirements university aur admission cycle ke mutabiq vary kar sakti hain.",

        subjects: [
            "Mathematics",
            "Physics",
            "Chemistry / Computer Science",
            "English"
        ],

        tips: [
            "Mathematics ki regular practice karein.",
            "Physics numericals solve karein.",
            "Formulas ki short list banayein.",
            "Timed MCQ tests attempt karein."
        ]
    },

    "nts": {
        title: "NTS Tests",
        intro: "General admission and aptitude test guidance.",
        about: "NTS different institutions aur programs ke liye testing services provide kar sakta hai. Test type ke mutabiq pattern different ho sakta hai.",

        subjects: [
            "English",
            "Quantitative Reasoning",
            "Analytical Reasoning",
            "General Knowledge",
            "Subject Portion"
        ],

        tips: [
            "Test type pehle confirm karein.",
            "Basic mathematics practice karein.",
            "Vocabulary improve karein.",
            "Sample questions solve karein."
        ]
    },

    "university-test": {
        title: "University Entry Tests",
        intro: "University-specific admission test preparation.",
        about: "Kai universities apne separate admission tests conduct karti hain. Pattern aur subjects university aur program ke mutabiq different ho sakte hain.",

        subjects: [
            "Mathematics",
            "English",
            "Physics",
            "Computer Science",
            "Aptitude / Reasoning"
        ],

        tips: [
            "Target university ka official test pattern check karein.",
            "Past/sample papers dekhein.",
            "Time management practice karein.",
            "Program-specific subjects par focus karein."
        ]
    }

};


const params =
    new URLSearchParams(window.location.search);

const testName =
    params.get("test");


if (testName && entryTestData[testName]) {

    const test =
        entryTestData[testName];


    document.getElementById("testTitle").textContent =
        test.title;

    document.getElementById("testIntro").textContent =
        test.intro;

    document.getElementById("testAboutTitle").textContent =
        "About " + test.title;

    document.getElementById("testAbout").textContent =
        test.about;


    const subjectBox =
        document.getElementById("testSubjects");


    test.subjects.forEach(function(subject) {

        subjectBox.innerHTML += `
            <div class="card">

                <div class="icon">📘</div>

                <h3>${subject}</h3>

                <p>
                    Is area ko official syllabus aur
                    test pattern ke mutabiq prepare karein.
                </p>

            </div>
        `;

    });


    const tipsBox =
        document.getElementById("testTips");


    const titles = [
        "Concepts",
        "Practice",
        "Time Management",
        "Official Updates"
    ];


    test.tips.forEach(function(tip, index) {

        tipsBox.innerHTML += `
            <div class="card">

                <div class="icon">✅</div>

                <h3>
                    ${titles[index] || "Preparation Tip"}
                </h3>

                <p>${tip}</p>

            </div>
        `;

    });

}