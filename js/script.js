console.log("Student Helper JavaScript Loaded!");


// ================================
// PERCENTAGE CALCULATOR
// ================================

function calculatePercentage() {

    let obtained = Number(
        document.getElementById("obtainedMarks").value
    );

    let total = Number(
        document.getElementById("totalMarks").value
    );

    let result = document.getElementById("percentageResult");

    if (total <= 0 || obtained < 0 || obtained > total) {
        result.innerHTML = "❌ Please enter valid marks.";
        return;
    }

    let percentage = (obtained / total) * 100;

    result.innerHTML =
        "Your Percentage: " + percentage.toFixed(2) + "%";
}


// ================================
// GRADE CALCULATOR
// ================================

function calculateGrade() {

    let percentage = Number(
        document.getElementById("percentageInput").value
    );

    let result = document.getElementById("gradeResult");

    if (percentage < 0 || percentage > 100) {
        result.innerHTML =
            "❌ Enter percentage between 0 and 100.";
        return;
    }

    let grade;

    if (percentage >= 80) {
        grade = "A+";
    }
    else if (percentage >= 70) {
        grade = "A";
    }
    else if (percentage >= 60) {
        grade = "B";
    }
    else if (percentage >= 50) {
        grade = "C";
    }
    else if (percentage >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    result.innerHTML =
        "Your Grade: " + grade;
}


// ================================
// ATTENDANCE CALCULATOR
// ================================

function calculateAttendance() {

    let attended = Number(
        document.getElementById("attendedClasses").value
    );

    let total = Number(
        document.getElementById("totalClasses").value
    );

    let result = document.getElementById("attendanceResult");

    if (total <= 0 || attended < 0 || attended > total) {

        result.innerHTML =
            "❌ Please enter valid class numbers.";

        return;
    }

    let attendance = (attended / total) * 100;

    result.innerHTML =
        "Your Attendance: " +
        attendance.toFixed(2) + "%";
}


// ================================
// AGE CALCULATOR
// ================================

function calculateAge() {

    let birthDateValue =
        document.getElementById("birthDate").value;

    let result =
        document.getElementById("ageResult");

    if (!birthDateValue) {

        result.innerHTML =
            "❌ Please select your date of birth.";

        return;
    }

    let birthDate =
        new Date(birthDateValue);

    let today =
        new Date();

    if (birthDate > today) {

        result.innerHTML =
            "❌ Please enter a valid date.";

        return;
    }

    let years =
        today.getFullYear() -
        birthDate.getFullYear();

    let months =
        today.getMonth() -
        birthDate.getMonth();

    let days =
        today.getDate() -
        birthDate.getDate();


    if (days < 0) {

        months--;

        let previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    result.innerHTML =
        "Your Age: " +
        years + " Years, " +
        months + " Months, " +
        days + " Days";
}// ========================================
// MATRIC SUBJECT GUIDE
// ========================================

const subjectData = {

    english: {
        title: "English",
        intro: "Matric English ke important topics, preparation tips aur study guidance.",
        about: "English mein grammar, vocabulary, reading comprehension, writing aur literature par focus kiya jata hai.",
        topics: [
            "Grammar",
            "Essay Writing",
            "Letter & Application Writing",
            "Comprehension",
            "Vocabulary",
            "Literature"
        ],
        tips: [
            "Daily grammar practice karein.",
            "New vocabulary words note karein.",
            "Past papers se writing questions practice karein.",
            "Important chapters ke questions revise karein."
        ]
    },

    mathematics: {
        title: "Mathematics",
        intro: "Matric Mathematics ke important concepts aur preparation guidance.",
        about: "Mathematics mein concepts samajhna aur regular practice karna bohat important hai. Sirf formulas yaad karne ke bajaye questions solve karein.",
        topics: [
            "Algebra",
            "Geometry",
            "Trigonometry",
            "Matrices",
            "Quadratic Equations",
            "Important Formulas"
        ],
        tips: [
            "Roz mathematics ke questions practice karein.",
            "Important formulas ki separate list banayein.",
            "Difficult questions ko dobara solve karein.",
            "Past papers zaroor practice karein."
        ]
    },

    science: {
        title: "Science",
        intro: "Matric Science students ke liye important concepts aur preparation guidance.",
        about: "Science subjects mein concepts ko samajhna, diagrams ko practice karna aur important definitions ko revise karna helpful hota hai.",
        topics: [
            "Important Definitions",
            "Diagrams",
            "Numericals",
            "Scientific Concepts",
            "Experiments",
            "Important Questions"
        ],
        tips: [
            "Concepts ko samajh kar study karein.",
            "Important diagrams practice karein.",
            "Definitions ko regularly revise karein.",
            "Past papers se important questions identify karein."
        ]
    },

    "pakistan-studies": {
        title: "Pakistan Studies",
        intro: "Pakistan Studies ke important topics aur examination preparation guidance.",
        about: "Pakistan Studies mein history, geography, important events aur Pakistan ke development se related topics cover kiye jate hain.",
        topics: [
            "Pakistan Movement",
            "Important Historical Events",
            "Geography of Pakistan",
            "Constitution",
            "National Resources",
            "Important Personalities"
        ],
        tips: [
            "Important dates ki list banayein.",
            "Historical events ko sequence mein samjhein.",
            "Short questions regularly revise karein.",
            "Maps aur important locations practice karein."
        ]
    },

    islamiyat: {
        title: "Islamiyat",
        intro: "Islamiyat ke important topics aur exam preparation guidance.",
        about: "Islamiyat mein Quranic teachings, Ahadith, Seerat aur Islamic concepts ko samajhna aur revise karna important hai.",
        topics: [
            "Quranic Teachings",
            "Ahadith",
            "Seerat-un-Nabi",
            "Islamic History",
            "Islamic Values",
            "Important Concepts"
        ],
        tips: [
            "Important Ahadith aur references revise karein.",
            "Important topics ke short notes banayein.",
            "Questions ko samajh kar answers prepare karein.",
            "Regular revision karein."
        ]
    },

    urdu: {
        title: "Urdu",
        intro: "Matric Urdu ke important topics aur writing preparation guidance.",
        about: "Urdu mein grammar, prose, poetry, essays, applications aur literature ki preparation important hoti hai.",
        topics: [
            "Urdu Grammar",
            "Essays",
            "Applications",
            "Poetry",
            "Prose",
            "Important Questions"
        ],
        tips: [
            "Important essays ki practice karein.",
            "Grammar regularly revise karein.",
            "Poetry ke important points samjhein.",
            "Past papers se writing practice karein."
        ]
    }
};


// ========================================
// LOAD SUBJECT INFORMATION
// ========================================

const params = new URLSearchParams(window.location.search);

const subjectName = params.get("subject");

if (subjectName && subjectData[subjectName]) {

    const subject = subjectData[subjectName];

    document.getElementById("subjectTitle").textContent =
        subject.title;

    document.getElementById("subjectIntro").textContent =
        subject.intro;

    document.getElementById("aboutTitle").textContent =
        "About " + subject.title;

    document.getElementById("aboutText").textContent =
        subject.about;


    // Topics

    const topicsContainer =
        document.getElementById("topicsContainer");

    subject.topics.forEach(function(topic) {

        topicsContainer.innerHTML += `
            <div class="card">
                <div class="icon">📖</div>
                <h3>${topic}</h3>
                <p>
                    Is topic ko syllabus aur textbook ke
                    mutabiq achhi tarah prepare karein.
                </p>
            </div>
        `;
    });


    // Tips

    const tipsContainer =
        document.getElementById("tipsContainer");

    subject.tips.forEach(function(tip) {

        tipsContainer.innerHTML += `
            <div class="card">
                <div class="icon">✅</div>
                <h3>Study Tip</h3>
                <p>${tip}</p>
            </div>
        `;
    });

}// ========================================
// STUDY TIMER
// ========================================

let timerSeconds = 25 * 60;

let timerInterval = null;


function updateTimerDisplay() {

    let minutes =
        Math.floor(timerSeconds / 60);

    let seconds =
        timerSeconds % 60;


    let formattedMinutes =
        String(minutes).padStart(2, "0");

    let formattedSeconds =
        String(seconds).padStart(2, "0");


    const display =
        document.getElementById("timerDisplay");


    if (display) {

        display.textContent =
            formattedMinutes + ":" +
            formattedSeconds;
    }
}


function startTimer() {

    if (timerInterval !== null) {
        return;
    }


    timerInterval = setInterval(function () {

        if (timerSeconds > 0) {

            timerSeconds--;

            updateTimerDisplay();

        }

        else {

            clearInterval(timerInterval);

            timerInterval = null;

            alert("🎉 Study session complete!");

        }

    }, 1000);
}


function pauseTimer() {

    clearInterval(timerInterval);

    timerInterval = null;
}


function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timerSeconds = 25 * 60;

    updateTimerDisplay();
}


// ========================================
// WORD COUNTER
// ========================================

function countWords() {

    const text =
        document.getElementById("wordText").value;


    const words =
        text.trim() === ""
            ? []
            : text.trim().split(/\s+/);


    document.getElementById("wordCount")
        .textContent = words.length;


    document.getElementById("characterCount")
        .textContent = text.length;


    document.getElementById("characterNoSpaceCount")
        .textContent =
        text.replace(/\s/g, "").length;
}


function clearWordCounter() {

    const textBox =
        document.getElementById("wordText");


    textBox.value = "";


    countWords();
}


// ========================================
// QUICK NOTES
// ========================================

function saveNotes() {

    const notes =
        document.getElementById("studyNotes").value;


    const message =
        document.getElementById("notesMessage");


    if (notes.trim() === "") {

        message.textContent =
            "❌ Please write something first.";

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

    document.getElementById("studyNotes").value = "";


    localStorage.removeItem(
        "studentHelperNotes"
    );


    document.getElementById("notesMessage")
        .textContent =
        "Notes cleared.";
}


// Load saved notes automatically

const savedNotes =
    localStorage.getItem(
        "studentHelperNotes"
    );


const notesBox =
    document.getElementById("studyNotes");


if (notesBox && savedNotes) {

    notesBox.value = savedNotes;
}


// Start timer display

if (document.getElementById("timerDisplay")) {

    updateTimerDisplay();
}// ========================================
// INTERMEDIATE GROUP GUIDE
// ========================================

const intermediateData = {

    "pre-medical": {
        title: "FSc Pre-Medical",
        intro: "Medical aur health-related fields ke liye Intermediate group.",
        about: "FSc Pre-Medical un students ke liye hota hai jo Biology aur medical sciences mein interest rakhte hain.",
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
        intro: "Engineering aur technical fields ke liye Intermediate group.",
        about: "Pre-Engineering un students ke liye suitable hai jo Mathematics, Physics aur engineering fields mein interest rakhte hain.",
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
            "Physics ke formulas aur concepts samjhein.",
            "Numerical questions zaroor solve karein.",
            "Entry tests ke liye timed MCQ practice karein."
        ]
    },

    ics: {
        title: "ICS",
        intro: "Computer Science aur technology mein interested students ke liye.",
        about: "ICS computer science, mathematics aur related subjects ka strong foundation provide karta hai.",
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
            "Programming concepts ko practice karein.",
            "Mathematics ko strong rakhein.",
            "Computer theory ko sirf ratta nahi, samajh kar padhein.",
            "Small coding projects banana start karein."
        ]
    },

    icom: {
        title: "ICom",
        intro: "Commerce, accounting aur business mein interested students ke liye.",
        about: "ICom business, accounting, economics aur commerce-related studies ka foundation hai.",
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
            "Accounting questions ki regular practice karein.",
            "Economics ke concepts ko examples ke saath samjhein.",
            "Business terms ki short notes banayein.",
            "Past papers practice karein."
        ]
    },

    fa: {
        title: "FA",
        intro: "Arts, humanities aur social sciences mein interested students ke liye.",
        about: "FA flexible group hai jahan students apni interest ke mutabiq arts aur humanities ke subjects choose kar sakte hain.",
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
            "Definitions aur concepts regularly revise karein.",
            "Essay aur long-question practice karein."
        ]
    }

};


const interParams =
    new URLSearchParams(window.location.search);

const groupName =
    interParams.get("group");


if (groupName && intermediateData[groupName]) {

    const group =
        intermediateData[groupName];


    const title =
        document.getElementById("interTitle");

    const intro =
        document.getElementById("interIntro");

    const aboutTitle =
        document.getElementById("interAboutTitle");

    const about =
        document.getElementById("interAbout");


    if (title) {
        title.textContent = group.title;
    }

    if (intro) {
        intro.textContent = group.intro;
    }

    if (aboutTitle) {
        aboutTitle.textContent =
            "About " + group.title;
    }

    if (about) {
        about.textContent = group.about;
    }


    const subjectContainer =
        document.getElementById("interSubjects");


    if (subjectContainer) {

        group.subjects.forEach(function(subject) {

            subjectContainer.innerHTML += `
                <div class="card">
                    <div class="icon">📚</div>
                    <h3>${subject}</h3>
                    <p>
                        Is subject ko apne board syllabus
                        aur textbook ke mutabiq prepare karein.
                    </p>
                </div>
            `;

        });

    }


    const careerContainer =
        document.getElementById("interCareers");


    if (careerContainer) {

     group.careers.forEach(function(career) {

   const careerSlug =
    career
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    careerContainer.innerHTML += `
        <a href="career.html?career=${careerSlug}" class="card">

            <div class="icon">🎓</div>

            <h3>${career}</h3>

            <p>
                Intermediate ke baad is field ki
                complete information dekhein.
            </p>

            <span>Explore Career →</span>

        </a>
    `;

});

    }


    const tipsContainer =
        document.getElementById("interTips");


    if (tipsContainer) {

        group.tips.forEach(function(tip) {

            tipsContainer.innerHTML += `
                <div class="card">
                    <div class="icon">✅</div>
                    <h3>Study Tip</h3>
                    <p>${tip}</p>
                </div>
            `;

        });

    }

}// ========================================
// CAREER GUIDE
// ========================================

const careerData = {

    mbbs: {
        title: "MBBS",
        intro: "Medicine aur healthcare mein career banane ka major degree path.",
        about: "MBBS medical education ka professional degree path hai. Admission requirements, merit aur entry-test rules institution aur authority ke mutabiq vary kar sakte hain.",
        subjects: [
            "Anatomy",
            "Physiology",
            "Biochemistry",
            "Pathology",
            "Pharmacology",
            "Clinical Medicine"
        ],
        paths: [
            "Doctor",
            "Medical Specialist",
            "Hospital Practice",
            "Medical Research",
            "Public Health",
            "Teaching"
        ],
        tips: [
            "Biology aur Chemistry strong rakhein.",
            "Entry test requirements official source se verify karein.",
            "Long-term study commitment ke liye ready rahen.",
            "Medical universities ki eligibility separately check karein."
        ]
    },

    bds: {
        title: "BDS",
        intro: "Dentistry aur oral healthcare mein professional degree.",
        about: "BDS students ko dentistry, oral health aur dental treatment related knowledge aur training deta hai.",
        subjects: [
            "Dental Anatomy",
            "Oral Biology",
            "Pathology",
            "Pharmacology",
            "Dental Materials",
            "Clinical Dentistry"
        ],
        paths: [
            "Dentist",
            "Dental Surgeon",
            "Orthodontics",
            "Dental Clinics",
            "Research",
            "Teaching"
        ],
        tips: [
            "Biology concepts strong karein.",
            "Medical admission requirements check karein.",
            "Practical clinical work mein interest important hai.",
            "Official university criteria zaroor verify karein."
        ]
    },

    "pharm-d": {
        title: "Pharm-D",
        intro: "Pharmacy aur medicines related professional degree.",
        about: "Pharm-D medicines, drug therapy aur pharmaceutical sciences ke study areas ko cover karta hai.",
        subjects: [
            "Pharmacology",
            "Pharmaceutics",
            "Biochemistry",
            "Clinical Pharmacy",
            "Medicinal Chemistry",
            "Pharmacy Practice"
        ],
        paths: [
            "Pharmacist",
            "Hospital Pharmacy",
            "Pharmaceutical Industry",
            "Quality Control",
            "Research",
            "Regulatory Affairs"
        ],
        tips: [
            "Chemistry aur Biology par focus karein.",
            "University eligibility requirements check karein.",
            "Pharmaceutical industry ke roles explore karein.",
            "Course structure university se verify karein."
        ]
    },

    dpt: {
        title: "DPT",
        intro: "Physical therapy aur rehabilitation related degree.",
        about: "DPT movement, rehabilitation aur physical therapy related study aur clinical training provide karta hai.",
        subjects: [
            "Anatomy",
            "Physiology",
            "Biomechanics",
            "Rehabilitation",
            "Exercise Therapy",
            "Clinical Practice"
        ],
        paths: [
            "Physical Therapist",
            "Rehabilitation Centers",
            "Hospitals",
            "Sports Rehabilitation",
            "Private Practice",
            "Research"
        ],
        tips: [
            "Biology aur human body concepts strong karein.",
            "Clinical work mein interest helpful hai.",
            "University admission criteria check karein.",
            "Program accreditation verify karein."
        ]
    },

    biotechnology: {
        title: "Biotechnology",
        intro: "Biology aur technology ko combine karne wali field.",
        about: "Biotechnology biological sciences ko technology aur research ke saath combine karti hai.",
        subjects: [
            "Genetics",
            "Microbiology",
            "Molecular Biology",
            "Biochemistry",
            "Bioinformatics",
            "Laboratory Techniques"
        ],
        paths: [
            "Biotechnology Research",
            "Laboratories",
            "Pharmaceutical Industry",
            "Food Industry",
            "Bioinformatics",
            "Higher Studies"
        ],
        tips: [
            "Biology aur Chemistry strong rakhein.",
            "Research mein interest develop karein.",
            "Laboratory skills important hoti hain.",
            "University program details compare karein."
        ]
    },

    "allied-health-sciences": {
        title: "Allied Health Sciences",
        intro: "Healthcare ki multiple specialized fields ka group.",
        about: "Allied Health Sciences mein diagnostic, therapeutic aur healthcare support roles shamil ho sakte hain.",
        subjects: [
            "Medical Laboratory Sciences",
            "Radiology",
            "Nutrition",
            "Respiratory Therapy",
            "Operation Theatre Technology",
            "Health Sciences"
        ],
        paths: [
            "Medical Lab Technologist",
            "Radiology Technologist",
            "Nutritionist",
            "Clinical Support",
            "Hospitals",
            "Healthcare Centers"
        ],
        tips: [
            "Apni specific specialization carefully choose karein.",
            "Program accreditation verify karein.",
            "Clinical training ka structure check karein.",
            "Career scope university se compare karein."
        ]
    },

    "software-engineering": {
        title: "Software Engineering",
        intro: "Software aur application development ki professional field.",
        about: "Software Engineering software systems ko design, develop, test aur maintain karne ke principles cover karti hai.",
        subjects: [
            "Programming",
            "Data Structures",
            "Databases",
            "Software Design",
            "Web Development",
            "Software Testing"
        ],
        paths: [
            "Software Developer",
            "Web Developer",
            "Mobile App Developer",
            "QA Engineer",
            "DevOps",
            "Software Architect"
        ],
        tips: [
            "Programming ki regular practice karein.",
            "Small projects banayein.",
            "Git aur GitHub seekhein.",
            "Problem-solving skills improve karein."
        ]
    },

    cybersecurity: {
        title: "Cybersecurity",
        intro: "Computer systems aur networks ko secure karne ki field.",
        about: "Cybersecurity systems, networks aur information ko digital threats se protect karne ke defensive concepts cover karti hai.",
        subjects: [
            "Networking",
            "Operating Systems",
            "Information Security",
            "Secure Coding",
            "Cryptography",
            "Digital Forensics"
        ],
        paths: [
            "Security Analyst",
            "SOC Analyst",
            "Security Engineer",
            "Digital Forensics",
            "Security Operations",
            "Cybersecurity Research"
        ],
        tips: [
            "Networking fundamentals strong karein.",
            "Linux aur operating systems seekhein.",
            "Programming fundamentals helpful hain.",
            "Legal aur ethical security labs mein practice karein."
        ],
    }"computer-engineering": {
    title: "Computer Engineering",
    intro: "Computers ke hardware aur software dono se related engineering field.",
    about: "Computer Engineering computer hardware, digital systems, programming aur embedded technology ko combine karti hai.",
    subjects: [
        "Programming",
        "Digital Logic",
        "Computer Architecture",
        "Electronics",
        "Networking",
        "Embedded Systems"
    ],
    paths: [
        "Computer Engineer",
        "Embedded Systems Engineer",
        "Hardware Engineer",
        "Network Engineer",
        "Systems Engineer",
        "Technology Industry"
    ],
    tips: [
        "Mathematics aur Physics strong rakhein.",
        "Programming basics seekhein.",
        "Electronics ke concepts samjhein.",
        "University curriculum compare karein."
    ]
},

"electrical-engineering": {
    title: "Electrical Engineering",
    intro: "Electricity, electronics aur electrical systems ki engineering field.",
    about: "Electrical Engineering power systems, electronics, circuits, communication aur control systems jese areas cover karti hai.",
    subjects: [
        "Circuit Analysis",
        "Electronics",
        "Power Systems",
        "Control Systems",
        "Signals",
        "Communication"
    ],
    paths: [
        "Electrical Engineer",
        "Power Engineer",
        "Electronics Engineer",
        "Control Engineer",
        "Telecom Industry",
        "Energy Sector"
    ],
    tips: [
        "Physics strong karein.",
        "Mathematics ki regular practice karein.",
        "Circuit concepts samjhein.",
        "Practical projects par kaam karein."
    ]
},

"mechanical-engineering": {
    title: "Mechanical Engineering",
    intro: "Machines, mechanics aur manufacturing se related engineering field.",
    about: "Mechanical Engineering machines aur mechanical systems ke design, analysis aur manufacturing ko cover karti hai.",
    subjects: [
        "Mechanics",
        "Thermodynamics",
        "Fluid Mechanics",
        "Machine Design",
        "Manufacturing",
        "Engineering Drawing"
    ],
    paths: [
        "Mechanical Engineer",
        "Design Engineer",
        "Manufacturing Engineer",
        "Automotive Industry",
        "Energy Sector",
        "Maintenance Engineering"
    ],
    tips: [
        "Physics concepts strong rakhein.",
        "Mathematics practice karein.",
        "Engineering drawing samjhein.",
        "Problem solving improve karein."
    ]
},

"civil-engineering": {
    title: "Civil Engineering",
    intro: "Buildings, roads aur infrastructure ki engineering field.",
    about: "Civil Engineering structures, construction, transportation aur infrastructure projects se related field hai.",
    subjects: [
        "Structural Engineering",
        "Surveying",
        "Construction",
        "Transportation",
        "Geotechnical Engineering",
        "Engineering Mathematics"
    ],
    paths: [
        "Civil Engineer",
        "Structural Engineer",
        "Site Engineer",
        "Construction Manager",
        "Transportation Engineer",
        "Infrastructure Projects"
    ],
    tips: [
        "Mathematics aur Physics strong rakhein.",
        "Drawing aur measurements understand karein.",
        "Practical field work ka interest helpful hai.",
        "Accredited programs check karein."
    ]
},

"computer-science": {
    title: "Computer Science",
    intro: "Programming, software aur computing concepts ki broad field.",
    about: "Computer Science algorithms, programming, software, databases, operating systems aur modern computing technologies cover karti hai.",
    subjects: [
        "Programming",
        "Data Structures",
        "Algorithms",
        "Databases",
        "Operating Systems",
        "Computer Networks"
    ],
    paths: [
        "Software Developer",
        "Web Developer",
        "Data Analyst",
        "AI Engineer",
        "Cybersecurity",
        "Cloud Computing"
    ],
    tips: [
        "Programming start karein.",
        "Problem solving practice karein.",
        "GitHub par projects banayein.",
        "Mathematics fundamentals strong rakhein."
    ]
},

"bs-computer-science": {
    title: "BS Computer Science",
    intro: "University-level Computer Science degree.",
    about: "BS Computer Science programming, algorithms, databases, software development aur computing fundamentals ka detailed university program hota hai.",
    subjects: [
        "Programming",
        "Algorithms",
        "Databases",
        "Operating Systems",
        "Networking",
        "Software Engineering"
    ],
    paths: [
        "Software Development",
        "Artificial Intelligence",
        "Cybersecurity",
        "Data Science",
        "Web Development",
        "Cloud Computing"
    ],
    tips: [
        "Coding practice abhi se start karein.",
        "Mathematics improve karein.",
        "Small software projects banayein.",
        "University curriculum compare karein."
    ]
},

"architecture": {
    title: "Architecture",
    intro: "Buildings aur spaces ke design se related professional field.",
    about: "Architecture creative design, technical drawing aur building planning ko combine karti hai.",
    subjects: [
        "Architectural Design",
        "Drawing",
        "Building Materials",
        "Structures",
        "History of Architecture",
        "3D Design"
    ],
    paths: [
        "Architect",
        "Design Consultant",
        "Urban Design",
        "Interior Design",
        "Construction Industry",
        "Planning"
    ],
    tips: [
        "Drawing aur design skills improve karein.",
        "Creativity develop karein.",
        "Architecture admission requirements check karein.",
        "Portfolio requirements university se verify karein."
    ]
},

"artificial-intelligence": {
    title: "Artificial Intelligence",
    intro: "Smart computer systems aur machine learning ki modern field.",
    about: "Artificial Intelligence computers ko data se patterns learn karne aur intelligent tasks perform karne ke concepts cover karti hai.",
    subjects: [
        "Programming",
        "Machine Learning",
        "Mathematics",
        "Data Structures",
        "Neural Networks",
        "Data Analysis"
    ],
    paths: [
        "AI Engineer",
        "Machine Learning Engineer",
        "Data Scientist",
        "AI Research",
        "Software Development",
        "Automation"
    ],
    tips: [
        "Python seekhein.",
        "Mathematics strong karein.",
        "Programming projects banayein.",
        "AI ke fundamentals step-by-step seekhein."
    ]
},

"data-science": {
    title: "Data Science",
    intro: "Data ko analyze karke useful insights nikalne ki field.",
    about: "Data Science programming, statistics aur data analysis ko combine karke large datasets ko understand karti hai.",
    subjects: [
        "Statistics",
        "Python",
        "Data Analysis",
        "Machine Learning",
        "Databases",
        "Data Visualization"
    ],
    paths: [
        "Data Analyst",
        "Data Scientist",
        "Business Intelligence",
        "Machine Learning",
        "Research",
        "Analytics"
    ],
    tips: [
        "Statistics strong karein.",
        "Python learn karein.",
        "Excel aur databases samjhein.",
        "Real datasets par practice karein."
    ]
},

"information-technology": {
    title: "Information Technology",
    intro: "Computer systems, networks aur technology management ki field.",
    about: "Information Technology organizations mein computer systems, networks, software aur technical infrastructure manage karne se related hai.",
    subjects: [
        "Networking",
        "Databases",
        "Web Technologies",
        "Operating Systems",
        "IT Support",
        "Information Security"
    ],
    paths: [
        "IT Specialist",
        "Network Administrator",
        "System Administrator",
        "IT Support",
        "Cloud Support",
        "Database Administration"
    ],
    tips: [
        "Networking fundamentals seekhein.",
        "Operating systems practice karein.",
        "Basic programming helpful hai.",
        "Hands-on projects karein."
    ]
},

"bba": {
    title: "BBA",
    intro: "Business aur management ki university degree.",
    about: "BBA business management, marketing, finance, human resources aur entrepreneurship ke fundamentals cover karta hai.",
    subjects: [
        "Management",
        "Marketing",
        "Finance",
        "Accounting",
        "Human Resources",
        "Entrepreneurship"
    ],
    paths: [
        "Business Management",
        "Marketing",
        "Human Resources",
        "Sales",
        "Entrepreneurship",
        "Banking"
    ],
    tips: [
        "Communication skills improve karein.",
        "Business concepts samjhein.",
        "Presentations ki practice karein.",
        "Internships aur practical experience useful hain."
    ]
},

"bcom": {
    title: "BCom",
    intro: "Commerce, accounting aur business-related degree.",
    about: "BCom commerce, accounting, taxation, economics aur business-related subjects cover karta hai.",
    subjects: [
        "Accounting",
        "Economics",
        "Business Law",
        "Finance",
        "Taxation",
        "Commerce"
    ],
    paths: [
        "Accounting",
        "Finance",
        "Banking",
        "Business",
        "Taxation",
        "Further Professional Studies"
    ],
    tips: [
        "Accounting strong karein.",
        "Economics concepts understand karein.",
        "Excel skills helpful hain.",
        "Professional qualifications bhi explore karein."
    ]
},

"accounting-finance": {
    title: "Accounting & Finance",
    intro: "Accounting, money management aur corporate finance ki field.",
    about: "Accounting & Finance financial records, investment, corporate finance aur business decision-making se related degree field hai.",
    subjects: [
        "Financial Accounting",
        "Corporate Finance",
        "Auditing",
        "Taxation",
        "Economics",
        "Business Mathematics"
    ],
    paths: [
        "Accountant",
        "Financial Analyst",
        "Auditor",
        "Banking",
        "Corporate Finance",
        "Investment Analysis"
    ],
    tips: [
        "Accounting fundamentals strong karein.",
        "Mathematics practice karein.",
        "Excel seekhein.",
        "Professional certifications explore karein."
    ]
},

"ca": {
    title: "CA",
    intro: "Chartered Accountancy ka professional career path.",
    about: "CA accounting, auditing, taxation aur finance se related professional qualification path hai. Exact structure aur requirements relevant professional body se verify karna chahiye.",
    subjects: [
        "Accounting",
        "Auditing",
        "Taxation",
        "Business Law",
        "Finance",
        "Economics"
    ],
    paths: [
        "Chartered Accountant",
        "Auditor",
        "Financial Consultant",
        "Tax Professional",
        "Corporate Finance",
        "Management"
    ],
    tips: [
        "Accounting basics strong rakhein.",
        "Study discipline important hai.",
        "Latest official eligibility check karein.",
        "Professional body's official information follow karein."
    ]
},

"acca": {
    title: "ACCA",
    intro: "International accounting aur finance qualification path.",
    about: "ACCA accounting, audit, taxation aur finance ke professional areas cover karta hai. Entry requirements aur exemptions latest official source se verify karne chahiye.",
    subjects: [
        "Accounting",
        "Audit",
        "Taxation",
        "Financial Management",
        "Business",
        "Corporate Reporting"
    ],
    paths: [
        "Accountant",
        "Auditor",
        "Finance Professional",
        "Consulting",
        "Corporate Finance",
        "Financial Management"
    ],
    tips: [
        "Accounting fundamentals strong karein.",
        "Latest eligibility check karein.",
        "Study plan maintain karein.",
        "Official ACCA information verify karein."
    ]
},

"banking": {
    title: "Banking",
    intro: "Banks aur financial institutions se related career field.",
    about: "Banking finance, customer services, investments, credit aur financial operations se related field hai.",
    subjects: [
        "Finance",
        "Economics",
        "Accounting",
        "Banking Operations",
        "Business",
        "Risk Management"
    ],
    paths: [
        "Bank Officer",
        "Credit Analyst",
        "Relationship Manager",
        "Operations",
        "Financial Services",
        "Risk Management"
    ],
    tips: [
        "Finance concepts samjhein.",
        "Communication skills improve karein.",
        "Excel helpful hai.",
        "Banking internships explore karein."
    ]
},

"bs-english": {
    title: "BS English",
    intro: "English language aur literature ki university degree.",
    about: "BS English language, literature, writing, linguistics aur communication ke different areas cover karta hai.",
    subjects: [
        "English Literature",
        "Linguistics",
        "Writing",
        "Poetry",
        "Drama",
        "Communication"
    ],
    paths: [
        "Teaching",
        "Content Writing",
        "Editing",
        "Media",
        "Communication",
        "Higher Studies"
    ],
    tips: [
        "Reading habit develop karein.",
        "Writing regularly practice karein.",
        "Vocabulary improve karein.",
        "Communication skills strong karein."
    ]
},

"psychology": {
    title: "Psychology",
    intro: "Human behavior aur mind ke scientific study ki field.",
    about: "Psychology human behavior, learning, development aur mental processes ko scientifically study karti hai.",
    subjects: [
        "Introduction to Psychology",
        "Developmental Psychology",
        "Research Methods",
        "Social Psychology",
        "Cognitive Psychology",
        "Statistics"
    ],
    paths: [
        "Research",
        "Education",
        "Human Resources",
        "Community Services",
        "Further Professional Study",
        "Academic Work"
    ],
    tips: [
        "Research skills develop karein.",
        "Statistics basics helpful hain.",
        "Reading aur observation skills improve karein.",
        "Professional practice requirements separately check karein."
    ]
},

"education": {
    title: "Education",
    intro: "Teaching aur learning systems se related academic field.",
    about: "Education field teaching methods, curriculum, learning psychology aur educational management ke concepts cover karti hai.",
    subjects: [
        "Teaching Methods",
        "Educational Psychology",
        "Curriculum",
        "Assessment",
        "Classroom Management",
        "Research"
    ],
    paths: [
        "Teacher",
        "Education Coordinator",
        "Curriculum Development",
        "School Administration",
        "Research",
        "Training"
    ],
    tips: [
        "Communication improve karein.",
        "Presentation practice karein.",
        "Teaching techniques explore karein.",
        "Practical teaching experience helpful hai."
    ]
},

"media-studies": {
    title: "Media Studies",
    intro: "Media, communication aur digital content ki field.",
    about: "Media Studies journalism, digital media, communication, advertising aur content production ko cover kar sakti hai.",
    subjects: [
        "Mass Communication",
        "Journalism",
        "Digital Media",
        "Advertising",
        "Video Production",
        "Media Writing"
    ],
    paths: [
        "Journalism",
        "Content Creation",
        "Digital Marketing",
        "Media Production",
        "Public Relations",
        "Advertising"
    ],
    tips: [
        "Writing improve karein.",
        "Video editing learn karein.",
        "Communication skills strong karein.",
        "Portfolio banayein."
    ]
},

"social-sciences": {
    title: "Social Sciences",
    intro: "Society aur human behavior ko study karne wali broad field.",
    about: "Social Sciences society, culture, politics, economics aur human relationships ke different aspects study karti hain.",
    subjects: [
        "Sociology",
        "Research",
        "Economics",
        "Political Studies",
        "Social Theory",
        "Statistics"
    ],
    paths: [
        "Research",
        "Development Sector",
        "Education",
        "Public Policy",
        "Community Work",
        "Higher Studies"
    ],
    tips: [
        "Research aur writing improve karein.",
        "Current affairs read karein.",
        "Critical thinking develop karein.",
        "Data interpretation skills helpful hain."
    ]
},

"public-administration": {
    title: "Public Administration",
    intro: "Organizations aur public-sector management ki field.",
    about: "Public Administration management, governance, policy aur organizational systems ke concepts cover karti hai.",
    subjects: [
        "Management",
        "Public Policy",
        "Governance",
        "Economics",
        "Human Resources",
        "Administration"
    ],
    paths: [
        "Administration",
        "Public Sector",
        "Project Management",
        "NGOs",
        "Policy Work",
        "Management"
    ],
    tips: [
        "Management skills develop karein.",
        "Communication improve karein.",
        "Current affairs samjhein.",
        "Writing aur analysis skills strong karein."
    ]
}

};


const careerParams =
    new URLSearchParams(window.location.search);

const careerName =
    careerParams.get("career");


if (careerName && careerData[careerName]) {

    const career =
        careerData[careerName];


    const title =
        document.getElementById("careerTitle");

    const intro =
        document.getElementById("careerIntro");

    const aboutTitle =
        document.getElementById("careerAboutTitle");

    const about =
        document.getElementById("careerAbout");


    if (title) title.textContent = career.title;

    if (intro) intro.textContent = career.intro;

    if (aboutTitle) {
        aboutTitle.textContent =
            "About " + career.title;
    }

    if (about) {
        about.textContent = career.about;
    }


    const subjectContainer =
        document.getElementById("careerSubjects");

    if (subjectContainer) {

        career.subjects.forEach(function(item) {

            subjectContainer.innerHTML += `
                <div class="card">
                    <div class="icon">📘</div>
                    <h3>${item}</h3>
                    <p>
                        Is field ka ek important study area.
                    </p>
                </div>
            `;

        });

    }


    const pathContainer =
        document.getElementById("careerPaths");

    if (pathContainer) {

        career.paths.forEach(function(item) {

            pathContainer.innerHTML += `
                <div class="card">
                    <div class="icon">💼</div>
                    <h3>${item}</h3>
                    <p>
                        Is degree ke baad possible
                        career direction.
                    </p>
                </div>
            `;

        });

    }


    const tipsContainer =
        document.getElementById("careerTips");

    if (tipsContainer) {

        career.tips.forEach(function(item) {

            tipsContainer.innerHTML += `
                <div class="card">
                    <div class="icon">✅</div>
                    <h3>Tip</h3>
                    <p>${item}</p>
                </div>
            `;

        });

    }

}// ========================================
// STUDY PLANNER
// ========================================

function addStudyTask() {

    const subject =
        document.getElementById("plannerSubject").value.trim();

    const time =
        document.getElementById("plannerTime").value;

    const task =
        document.getElementById("plannerTask").value.trim();


    if (!subject || !time || !task) {

        alert("Please fill all planner fields.");

        return;
    }


    const newTask = {
        subject: subject,
        time: time,
        task: task
    };


    let planner =
        JSON.parse(
            localStorage.getItem("studyPlanner")
        ) || [];


    planner.push(newTask);


    localStorage.setItem(
        "studyPlanner",
        JSON.stringify(planner)
    );


    document.getElementById("plannerSubject").value = "";

    document.getElementById("plannerTime").value = "";

    document.getElementById("plannerTask").value = "";


    showPlanner();
}


function showPlanner() {

    const plannerList =
        document.getElementById("plannerList");


    if (!plannerList) {
        return;
    }


    plannerList.innerHTML = "";


    const planner =
        JSON.parse(
            localStorage.getItem("studyPlanner")
        ) || [];


    if (planner.length === 0) {

        plannerList.innerHTML = `
            <div class="card">
                <div class="icon">📅</div>
                <h3>No Tasks Yet</h3>
                <p>
                    Add your first study task above.
                </p>
            </div>
        `;

        return;
    }


    planner.forEach(function(item, index) {

        plannerList.innerHTML += `

            <div class="card">

                <div class="icon">📚</div>

                <h3>${item.subject}</h3>

                <p>
                    ⏰ ${item.time}
                </p>

                <p>
                    ${item.task}
                </p>

                <button
                    class="main-btn"
                    onclick="deletePlannerTask(${index})"
                >
                    Completed ✓
                </button>

            </div>

        `;

    });
}


function deletePlannerTask(index) {

    let planner =
        JSON.parse(
            localStorage.getItem("studyPlanner")
        ) || [];


    planner.splice(index, 1);


    localStorage.setItem(
        "studyPlanner",
        JSON.stringify(planner)
    );


    showPlanner();
}


function clearPlanner() {

    localStorage.removeItem("studyPlanner");

    showPlanner();
}


if (document.getElementById("plannerList")) {

    showPlanner();
}