function addStudyTask() {

    const subjectInput =
        document.getElementById("plannerSubject");

    const timeInput =
        document.getElementById("plannerTime");

    const taskInput =
        document.getElementById("plannerTask");


    const subject =
        subjectInput.value.trim();

    const time =
        timeInput.value;

    const task =
        taskInput.value.trim();


    if (subject === "" || time === "" || task === "") {

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
            localStorage.getItem("studyPlannerTasks")
        ) || [];


    planner.push(newTask);


    localStorage.setItem(
        "studyPlannerTasks",
        JSON.stringify(planner)
    );


    subjectInput.value = "";
    timeInput.value = "";
    taskInput.value = "";


    showPlanner();
}



function showPlanner() {

    const plannerList =
        document.getElementById("plannerList");


    if (!plannerList) {
        return;
    }


    const planner =
        JSON.parse(
            localStorage.getItem("studyPlannerTasks")
        ) || [];


    plannerList.innerHTML = "";


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
                    <strong>Time:</strong> ${item.time}
                </p>

                <p>
                    <strong>Task:</strong> ${item.task}
                </p>

                <button
                    class="main-btn"
                    onclick="completeStudyTask(${index})"
                >
                    Completed ✓
                </button>

            </div>
        `;

    });
}



function completeStudyTask(index) {

    let planner =
        JSON.parse(
            localStorage.getItem("studyPlannerTasks")
        ) || [];


    planner.splice(index, 1);


    localStorage.setItem(
        "studyPlannerTasks",
        JSON.stringify(planner)
    );


    showPlanner();
}



function clearPlanner() {

    localStorage.removeItem(
        "studyPlannerTasks"
    );


    showPlanner();
}



document.addEventListener(
    "DOMContentLoaded",
    function () {

        showPlanner();

    }
);