const scholarshipData = {

    "merit": {
        title: "Merit Scholarships",
        intro: "Strong academic performance wale students ke liye scholarships.",
        about: "Merit scholarships generally academic results, grades ya outstanding performance ke basis par di jati hain.",

        eligibility: [
            "Strong academic results",
            "Required minimum percentage / GPA",
            "Institution ki eligibility conditions",
            "Sometimes extracurricular achievements"
        ],

        documents: [
            "Academic transcripts",
            "Result cards",
            "Student ID / admission proof",
            "Application form"
        ],

        tips: [
            "Academic record updated rakhein.",
            "Minimum criteria carefully check karein.",
            "Deadline se pehle apply karein.",
            "Official scholarship notice read karein."
        ]
    },

    "need-based": {
        title: "Need-Based Scholarships",
        intro: "Financial support ki zaroorat rakhne wale students ke liye.",
        about: "Need-based scholarships financial circumstances ko consider karke students ko education support provide karti hain.",

        eligibility: [
            "Financial need",
            "Student enrollment",
            "Required academic standing",
            "Institution-specific income criteria"
        ],

        documents: [
            "Income proof",
            "Academic documents",
            "Student identification",
            "Financial aid application"
        ],

        tips: [
            "Financial documents pehle prepare karein.",
            "Information accurately fill karein.",
            "Required proof attach karein.",
            "Official eligibility criteria verify karein."
        ]
    },

    "university": {
        title: "University Scholarships",
        intro: "Universities ki taraf se students ke liye financial aid.",
        about: "Universities merit, need, sports ya other categories mein scholarships aur fee waivers offer kar sakti hain.",

        eligibility: [
            "Current or new university student",
            "Academic performance",
            "Program-specific criteria",
            "University rules"
        ],

        documents: [
            "Admission letter",
            "Academic transcripts",
            "Scholarship application",
            "Other university-required documents"
        ],

        tips: [
            "University financial-aid page check karein.",
            "Admission ke time scholarship options dekhein.",
            "Renewal requirements bhi samjhein.",
            "Deadline note karein."
        ]
    },

    "government": {
        title: "Government Scholarships",
        intro: "Government aur public-sector education support programs.",
        about: "Government scholarship programs different education levels aur eligibility categories ke liye available ho sakte hain.",

        eligibility: [
            "Program-specific academic criteria",
            "Required residency / enrollment status",
            "Income criteria in some schemes",
            "Relevant education level"
        ],

        documents: [
            "Academic records",
            "Identification documents",
            "Enrollment proof",
            "Program-specific forms"
        ],

        tips: [
            "Official government portal use karein.",
            "Fake scholarship offers se bachain.",
            "Deadline aur eligibility carefully read karein.",
            "Documents complete submit karein."
        ]
    },

    "international": {
        title: "International Scholarships",
        intro: "Study abroad aur international education opportunities.",
        about: "International scholarships foreign universities, governments aur organizations ki taraf se offer ho sakti hain.",

        eligibility: [
            "Academic performance",
            "Language requirements",
            "Program admission requirements",
            "Scholarship-specific conditions"
        ],

        documents: [
            "Academic transcripts",
            "Passport where required",
            "Statement of purpose",
            "Recommendation letters"
        ],

        tips: [
            "Application early start karein.",
            "Language requirements check karein.",
            "Official university websites use karein.",
            "Scholarship aur admission deadlines separately check karein."
        ]
    },

    "college": {
        title: "College Scholarships",
        intro: "Matric aur Intermediate students ke liye support opportunities.",
        about: "Colleges academic performance, financial need aur other criteria ki basis par fee concessions ya scholarships offer kar sakte hain.",

        eligibility: [
            "College admission",
            "Academic results",
            "Financial need where applicable",
            "College-specific rules"
        ],

        documents: [
            "Result card",
            "Admission proof",
            "Student documents",
            "Application form"
        ],

        tips: [
            "College office se scholarship options poochein.",
            "Admission ke waqt fee-concession policy check karein.",
            "Academic performance maintain karein.",
            "Application deadline miss na karein."
        ]
    }

};


const params =
    new URLSearchParams(window.location.search);

const scholarshipName =
    params.get("type");


if (
    scholarshipName &&
    scholarshipData[scholarshipName]
) {

    const scholarship =
        scholarshipData[scholarshipName];


    document.getElementById("scholarshipTitle").textContent =
        scholarship.title;

    document.getElementById("scholarshipIntro").textContent =
        scholarship.intro;

    document.getElementById("scholarshipAboutTitle").textContent =
        "About " + scholarship.title;

    document.getElementById("scholarshipAbout").textContent =
        scholarship.about;


   const eligibilityBox =
    document.getElementById("scholarshipEligibility");


const eligibilityTitles = [
    "Academic Criteria",
    "Required Qualification",
    "Student Requirements",
    "Additional Criteria"
];


const eligibilityIcons = [
    "🎓",
    "📚",
    "👨‍🎓",
    "✅"
];


scholarship.eligibility.forEach(function(item, index) {

    eligibilityBox.innerHTML += `

        <div class="card">

            <div class="icon">
                ${eligibilityIcons[index] || "✅"}
            </div>

            <h3>
                ${eligibilityTitles[index] || "Eligibility Requirement"}
            </h3>

            <p>
                ${item}
            </p>

        </div>

    `;

});


    const documentsBox =
    document.getElementById("scholarshipDocuments");


const documentTitles = [
    "Academic Records",
    "Supporting Proof",
    "Student Information",
    "Application Documents"
];


const documentIcons = [
    "📊",
    "📑",
    "🪪",
    "📝"
];


scholarship.documents.forEach(function(item, index) {

    documentsBox.innerHTML += `

        <div class="card">

            <div class="icon">
                ${documentIcons[index] || "📄"}
            </div>

            <h3>
                ${documentTitles[index] || "Required Document"}
            </h3>

            <p>
                ${item}
            </p>

        </div>

    `;

});

    const tipsBox =
        document.getElementById("scholarshipTips");


    const tipTitles = [
        "Check Requirements",
        "Prepare Documents",
        "Apply Early",
        "Verify Officially"
    ];


    scholarship.tips.forEach(function(item, index) {

        tipsBox.innerHTML += `
            <div class="card">
                <div class="icon">💡</div>
                <h3>${tipTitles[index] || "Tip"}</h3>
                <p>${item}</p>
            </div>
        `;

    });

}