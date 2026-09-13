// ================================
// PERCENTAGE CALCULATOR
// ================================

function calculatePercentage() {

    const obtained =
        parseFloat(document.getElementById("obtainedMarks").value);

    const total =
        parseFloat(document.getElementById("totalMarks").value);

    const result =
        document.getElementById("percentageResult");


    if (
        isNaN(obtained) ||
        isNaN(total) ||
        total <= 0 ||
        obtained < 0 ||
        obtained > total
    ) {

        result.textContent =
            "❌ Please enter valid marks.";

        return;
    }


    const percentage =
        (obtained / total) * 100;


    result.textContent =
        "Your Percentage: " +
        percentage.toFixed(2) +
        "%";
}


// ================================
// GRADE CALCULATOR
// ================================

function calculateGrade() {

    const percentage =
        parseFloat(
            document.getElementById("percentageInput").value
        );

    const result =
        document.getElementById("gradeResult");


    if (
        isNaN(percentage) ||
        percentage < 0 ||
        percentage > 100
    ) {

        result.textContent =
            "❌ Enter a percentage between 0 and 100.";

        return;
    }


    let grade;


    if (percentage >= 80) {

        grade = "A+";

    } else if (percentage >= 70) {

        grade = "A";

    } else if (percentage >= 60) {

        grade = "B";

    } else if (percentage >= 50) {

        grade = "C";

    } else if (percentage >= 40) {

        grade = "D";

    } else {

        grade = "F";
    }


    result.textContent =
        "Your Grade: " + grade;
}


// ================================
// ATTENDANCE CALCULATOR
// ================================

function calculateAttendance() {

    const attended =
        parseFloat(
            document.getElementById("attendedClasses").value
        );

    const total =
        parseFloat(
            document.getElementById("totalClasses").value
        );

    const result =
        document.getElementById("attendanceResult");


    if (
        isNaN(attended) ||
        isNaN(total) ||
        total <= 0 ||
        attended < 0 ||
        attended > total
    ) {

        result.textContent =
            "❌ Please enter valid class numbers.";

        return;
    }


    const attendance =
        (attended / total) * 100;


    result.textContent =
        "Your Attendance: " +
        attendance.toFixed(2) +
        "%";
}


// ================================
// AGE CALCULATOR
// ================================

function calculateAge() {

    const value =
        document.getElementById("birthDate").value;

    const result =
        document.getElementById("ageResult");


    if (!value) {

        result.textContent =
            "❌ Select your date of birth.";

        return;
    }


    const birthDate =
        new Date(value);

    const today =
        new Date();


    if (birthDate > today) {

        result.textContent =
            "❌ Please select a valid date.";

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

        const previousMonth =
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


    result.textContent =
        `Your Age: ${years} Years, ${months} Months, ${days} Days`;
}// ==========================================
// GPA CALCULATOR
// ==========================================

function addGpaCourse() {

    const container =
        document.getElementById("gpaCourses");

    const row =
        document.createElement("div");

    row.className = "gpa-row";

    row.innerHTML = `
        <input
            type="number"
            class="grade-point"
            placeholder="Grade Point e.g. 3.7"
            step="0.01"
            min="0"
            max="4"
        >

        <input
            type="number"
            class="credit-hours"
            placeholder="Credit Hours e.g. 3"
            min="1"
        >
    `;

    container.appendChild(row);
}


function calculateGPA() {

    const gradePoints =
        document.querySelectorAll(".grade-point");

    const creditHours =
        document.querySelectorAll(".credit-hours");

    const result =
        document.getElementById("gpaResult");


    let totalQualityPoints = 0;

    let totalCredits = 0;


    for (let i = 0; i < gradePoints.length; i++) {

        const grade =
            parseFloat(gradePoints[i].value);

        const credits =
            parseFloat(creditHours[i].value);


        if (
            isNaN(grade) ||
            isNaN(credits)
        ) {
            continue;
        }


        if (
            grade < 0 ||
            grade > 4 ||
            credits <= 0
        ) {

            result.textContent =
                "❌ Please enter valid Grade Points and Credit Hours.";

            return;
        }


        totalQualityPoints +=
            grade * credits;

        totalCredits +=
            credits;
    }


    if (totalCredits === 0) {

        result.textContent =
            "❌ Please enter at least one complete course.";

        return;
    }


    const gpa =
        totalQualityPoints / totalCredits;


    result.textContent =
        "Your GPA: " +
        gpa.toFixed(2) +
        " / 4.00";
}


// ==========================================
// CGPA CALCULATOR
// ==========================================

function addSemester() {

    const container =
        document.getElementById("cgpaSemesters");

    const row =
        document.createElement("div");

    row.className = "gpa-row";


    row.innerHTML = `
        <input
            type="number"
            class="semester-gpa"
            placeholder="Semester GPA e.g. 3.4"
            step="0.01"
            min="0"
            max="4"
        >

        <input
            type="number"
            class="semester-credits"
            placeholder="Credit Hours e.g. 18"
            min="1"
        >
    `;


    container.appendChild(row);
}


function calculateCGPA() {

    const semesterGpas =
        document.querySelectorAll(".semester-gpa");

    const semesterCredits =
        document.querySelectorAll(".semester-credits");

    const result =
        document.getElementById("cgpaResult");


    let totalPoints = 0;

    let totalCredits = 0;


    for (
        let i = 0;
        i < semesterGpas.length;
        i++
    ) {

        const gpa =
            parseFloat(
                semesterGpas[i].value
            );

        const credits =
            parseFloat(
                semesterCredits[i].value
            );


        if (
            isNaN(gpa) ||
            isNaN(credits)
        ) {
            continue;
        }


        if (
            gpa < 0 ||
            gpa > 4 ||
            credits <= 0
        ) {

            result.textContent =
                "❌ Please enter valid GPA and Credit Hours.";

            return;
        }


        totalPoints +=
            gpa * credits;

        totalCredits +=
            credits;
    }


    if (totalCredits === 0) {

        result.textContent =
            "❌ Please enter at least one semester.";

        return;
    }


    const cgpa =
        totalPoints / totalCredits;


    result.textContent =
        "Your CGPA: " +
        cgpa.toFixed(2) +
        " / 4.00";
}