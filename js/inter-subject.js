// ========================================
// INTERMEDIATE GROUP GUIDE
// ========================================

const intermediateData = {

    "pre-medical": {
        title: "FSc Pre-Medical",

        intro:
            "Medical aur health-related fields ke liye Intermediate group.",

        about:
            "FSc Pre-Medical un students ke liye hota hai jo Biology aur medical sciences mein interest rakhte hain.",

        subjects: [
            "Biology",
            "Chemistry",
            "Physics",
            "English",
            "Urdu",
            "Islamiyat / Pakistan Studies"
        ],

        careers: [
            "MBBS",
            "BDS",
            "Pharm-D",
            "DPT",
            "Biotechnology",
            "Allied Health Sciences"
        ],

        tips: [
            "Biology ke concepts regularly revise karein.",
            "Chemistry reactions aur concepts samajh kar prepare karein.",
            "Physics numericals ki practice karein.",
            "Entry-test MCQs bhi saath saath practice karein."
        ]
    },


    "pre-engineering": {
        title: "FSc Pre-Engineering",

        intro:
            "Engineering aur technical fields ke liye Intermediate group.",

        about:
            "Pre-Engineering Mathematics, Physics aur engineering fields mein interested students ke liye suitable group hai.",

        subjects: [
            "Mathematics",
            "Physics",
            "Chemistry",
            "English",
            "Urdu",
            "Islamiyat / Pakistan Studies"
        ],

        careers: [
            "Computer Engineering",
            "Electrical Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Computer Science",
            "Architecture"
        ],

        tips: [
            "Mathematics roz practice karein.",
            "Physics ke concepts aur formulas samjhein.",
            "Numerical questions solve karein.",
            "Entry-test MCQs ki timed practice karein."
        ]
    },


    "ics": {
        title: "ICS",

        intro:
            "Computer Science aur technology mein interested students ke liye.",

        about:
            "ICS Computer Science, Mathematics aur related subjects ka strong foundation provide karta hai.",

        subjects: [
            "Computer Science",
            "Mathematics",
            "Physics / Statistics",
            "English",
            "Urdu",
            "Islamiyat / Pakistan Studies"
        ],

        careers: [
            "BS Computer Science",
            "Software Engineering",
            "Cybersecurity",
            "Artificial Intelligence",
            "Data Science",
            "Information Technology"
        ],

        tips: [
            "Programming concepts practice karein.",
            "Mathematics ko strong rakhein.",
            "Computer concepts ko samajh kar padhein.",
            "Small coding projects banana start karein."
        ]
    },


    "icom": {
        title: "ICom",

        intro:
            "Commerce, accounting aur business mein interested students ke liye.",

        about:
            "ICom accounting, commerce, economics aur business studies ka foundation provide karta hai.",

        subjects: [
            "Accounting",
            "Economics",
            "Commerce",
            "Business Mathematics",
            "English",
            "Urdu"
        ],

        careers: [
            "BBA",
            "BCom",
            "Accounting & Finance",
            "CA",
            "ACCA",
            "Banking"
        ],

        tips: [
            "Accounting questions regularly practice karein.",
            "Economics ke concepts samjhein.",
            "Business terms ki notes banayein.",
            "Past papers practice karein."
        ]
    },


    "fa": {
        title: "FA",

        intro:
            "Arts, humanities aur social sciences mein interested students ke liye.",

        about:
            "FA mein students apni interest ke mutabiq arts aur humanities ke subjects choose kar sakte hain.",

        subjects: [
            "English",
            "Urdu",
            "Civics",
            "Education",
            "Psychology",
            "Sociology"
        ],

        careers: [
            "BS English",
            "Psychology",
            "Education",
            "Media Studies",
            "Social Sciences",
            "Public Administration"
        ],

        tips: [
            "Writing skills improve karein.",
            "Important topics ke short notes banayein.",
            "Definitions aur concepts revise karein.",
            "Essay aur long-question practice karein."
        ]
    }

};


// URL se group read karo

const params =
    new URLSearchParams(window.location.search);

const groupName =
    params.get("group");


// Check karo group available hai

if (groupName && intermediateData[groupName]) {

    const group =
        intermediateData[groupName];


    // Main information

    document.getElementById("interTitle").textContent =
        group.title;

    document.getElementById("interIntro").textContent =
        group.intro;

    document.getElementById("interAboutTitle").textContent =
        "About " + group.title;

    document.getElementById("interAbout").textContent =
        group.about;


    // ========================================
    // SUBJECTS
    // ========================================

    const subjectContainer =
        document.getElementById("interSubjects");


    group.subjects.forEach(function(subject) {

        subjectContainer.innerHTML += `

            <div class="card">

                <div class="icon">
                    📚
                </div>

                <h3>
                    ${subject}
                </h3>

                <p>
                    Is subject ko apne board syllabus
                    aur textbook ke mutabiq prepare karein.
                </p>

            </div>

        `;

    });


    // ========================================
    // FUTURE CAREERS
    // ========================================

    const careerContainer =
        document.getElementById("interCareers");


    group.careers.forEach(function(career) {

        const careerSlug =
            career
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");


        careerContainer.innerHTML += `

            <a
                href="career.html?career=${careerSlug}"
                class="card"
            >

                <div class="icon">
                    🎓
                </div>

                <h3>
                    ${career}
                </h3>

                <p>
                    Is field ki complete information,
                    subjects aur career options dekhein.
                </p>

                <span>
                    Explore Career →
                </span>

            </a>

        `;

    });


    // ========================================
    // TIPS
    // ========================================

    const tipsContainer =
        document.getElementById("interTips");


   const studyTipTitles = [
    "Daily Practice",
    "Concept Building",
    "Revision Strategy",
    "Exam Preparation"
];

const studyTipIcons = [
    "📚",
    "💡",
    "🔄",
    "🎯"
];

group.tips.forEach(function(tip, index) {

    tipsContainer.innerHTML += `

        <div class="card">

            <div class="icon">
                ${studyTipIcons[index] || "✅"}
            </div>

            <h3>
                ${studyTipTitles[index] || "Study Tip"}
            </h3>

            <p>
                ${tip}
            </p>

        </div>

    `;

});
}