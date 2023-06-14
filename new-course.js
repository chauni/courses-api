const deptInput = document.getElementById('deptInput')
const courseNumInput = document.getElementById('courseNumInput')
const courseNameInput = document.getElementById('courseNameInput')
const instructorInput = document.getElementById('instructorInput')
const startDateInput = document.getElementById('startDateInput')
const numDaysInput = document.getElementById('numDaysInput');

const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    fetch(`http://localhost:8081/api/courses`, {
        method: 'POST',
        body: JSON.stringify({
            dept: deptInput.value,
            courseNum: courseNumInput.value,
            courseName: courseNameInput.value,
            instructor: instructorInput.value,
            startDate: startDateInput.value,
            numDays: numDaysInput.value
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(newCourse => {
        window.location.href = `./details.html?courseid=${newCourse.id}`
    })
})
