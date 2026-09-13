// ==========================================
// MATRIC SUBJECT GUIDE
// ==========================================

const matricSubjectData = {

    "english": {
        title: "English",
        intro: "Matric English ki preparation, important areas aur study guidance.",
        about: "English mein grammar, comprehension, writing skills, vocabulary aur textbook content par focus kiya jata hai.",

        topics: [
            "Grammar",
            "Essay Writing",
            "Letters & Applications",
            "Comprehension",
            "Vocabulary",
            "Textbook Chapters"
        ],

        tips: [
            "Daily English reading ki practice karein.",
            "Grammar rules ko examples ke saath samjhein.",
            "Essays aur applications likhne ki practice karein.",
            "Past papers se important questions revise karein."
        ]
    },


    "mathematics": {
        title: "Mathematics",
        intro: "Matric Mathematics ke concepts, formulas aur preparation guidance.",
        about: "Mathematics mein concepts ko samajhna aur questions ki regular practice karna sabse important hai.",

        topics: [
            "Algebra",
            "Quadratic Equations",
            "Matrices",
            "Geometry",
            "Trigonometry",
            "Important Formulas"
        ],

        tips: [
            "Roz Mathematics ke questions solve karein.",
            "Important formulas ki separate list banayein.",
            "Weak chapters ko dobara practice karein.",
            "Past papers timed conditions mein solve karein."
        ]
    },


    "science": {
        title: "Science",
        intro: "Matric Science ke important concepts aur preparation guidance.",
        about: "Science ki preparation mein concepts, definitions, diagrams, experiments aur numerical questions important hote hain.",

        topics: [
            "Scientific Concepts",
            "Important Definitions",
            "Diagrams",
            "Numericals",
            "Experiments",
            "Important Questions"
        ],

        tips: [
            "Concepts ko samajh kar study karein.",
            "Important diagrams ki practice karein.",
            "Definitions regularly revise karein.",
            "Past-paper questions solve karein."
        ]
    },


    "urdu": {
        title: "Urdu",
        intro: "Matric Urdu ki writing, grammar aur literature preparation.",
        about: "Urdu mein grammar, essays, applications, prose aur poetry ki preparation important hoti hai.",

        topics: [
            "Urdu Grammar",
            "Essays",
            "Applications",
            "Poetry",
            "Prose",
            "Important Questions"
        ],

        tips: [
            "Important essays likhne ki practice karein.",
            "Urdu grammar regularly revise karein.",
            "Poetry aur prose ke important points samjhein.",
            "Past papers se writing practice karein."
        ]
    },


    "islamiyat": {
        title: "Islamiyat",
        intro: "Matric Islamiyat ke important areas aur exam preparation.",
        about: "Islamiyat mein Quranic teachings, Ahadith, Seerat aur Islamic concepts ko samajhna important hai.",

        topics: [
            "Quranic Teachings",
            "Ahadith",
            "Seerat-un-Nabi ﷺ",
            "Islamic History",
            "Islamic Values",
            "Important Questions"
        ],

        tips: [
            "Important topics ke short notes banayein.",
            "Ahadith aur relevant references revise karein.",
            "Long questions points ki form mein prepare karein.",
            "Regular revision karein."
        ]
    },


    "pakistan-studies": {
        title: "Pakistan Studies",
        intro: "Pakistan Studies ki history, geography aur exam preparation guidance.",
        about: "Pakistan Studies mein Pakistan Movement, history, geography, resources aur national development ke topics cover hote hain.",

        topics: [
            "Pakistan Movement",
            "Important Historical Events",
            "Geography of Pakistan",
            "Constitutional Development",
            "Natural Resources",
            "Important Personalities"
        ],

        tips: [
            "Important dates ki short list banayein.",
            "Historical events ko sequence mein samjhein.",
            "Maps aur locations ki practice karein.",
            "Past-paper questions regularly revise karein."
        ]
    }

};


// ==========================================
// URL SE SUBJECT NAME GET KARO
// ==========================================

const matricParams =
    new URLSearchParams(window.location.search);

const matricSubject =
    matricParams.get("subject");


// ==========================================
// SUBJECT DATA DISPLAY KARO
// ==========================================

if (
    matricSubject &&
    matricSubjectData[matricSubject]
) {

    const subject =
        matricSubjectData[matricSubject];


    // Main headings

    const title =
        document.getElementById("subjectTitle");

    const intro =
        document.getElementById("subjectIntro");

    const aboutTitle =
        document.getElementById("aboutTitle");

    const aboutText =
        document.getElementById("aboutText");


    if (title) {
        title.textContent = subject.title;
    }

    if (intro) {
        intro.textContent = subject.intro;
    }

    if (aboutTitle) {
        aboutTitle.textContent =
            "About " + subject.title;
    }

    if (aboutText) {
        aboutText.textContent = subject.about;
    }


    // ======================================
    // IMPORTANT TOPICS
    // ======================================

    const topicsContainer =
        document.getElementById("topicsContainer");


    if (topicsContainer) {

        subject.topics.forEach(function(topic) {

            topicsContainer.innerHTML += `

                <div class="card">

                    <div class="icon">
                        📖
                    </div>

                    <h3>
                        ${topic}
                    </h3>

                    <p>
                        Is topic ko apni textbook aur
                        board syllabus ke mutabiq prepare karein.
                    </p>

                </div>

            `;

        });

    }


    // ======================================
    // STUDY TIPS
    // ======================================

    const tipsContainer =
        document.getElementById("tipsContainer");


    const tipTitles = [
        "Daily Practice",
        "Smart Preparation",
        "Revision",
        "Exam Practice"
    ];


    const tipIcons = [
        "📚",
        "💡",
        "🔄",
        "🎯"
    ];


    if (tipsContainer) {

        subject.tips.forEach(function(tip, index) {

            tipsContainer.innerHTML += `

                <div class="card">

                    <div class="icon">
                        ${tipIcons[index] || "✅"}
                    </div>

                    <h3>
                        ${tipTitles[index] || "Study Tip"}
                    </h3>

                    <p>
                        ${tip}
                    </p>

                </div>

            `;

        });

    }

}