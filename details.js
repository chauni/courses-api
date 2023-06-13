"use strict";

const coursesDetailDiv = document.getElementById("courseDetailDiv");


fetch('http://localhost:8081/api/courses').then(response => response.json()).then(data => {

    const urlParams = new URLSearchParams(location.search);

    data.forEach((course) => {

    let id = -1;
    if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    if(id == course.id) {
        console.log(course)
        const content = `
        <div class="card mt-4">
                <div class="card-header">
                <h5 class="mb-0">
                ${course.courseName} (${course.courseNum}) <span class="lead fs-6">Instructor: ${course.instructor}</span>
                </h5>
            </div>

            <div class="card-body py-2">
            <p>Start date: ${course.startDate}</p>
            <p>Duration: ${course.numDays} days</p>
            </div>
            `
        coursesDetailDiv.innerHTML += content;
    }
    }
    });
})

