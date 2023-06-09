"use strict";

const coursesTable = document.getElementById("coursesTable");
const tbody = document.querySelector("#coursesTable tbody");


fetch("http://localhost:8081/api/courses")
  .then((response) => response.json())
  .then((data) => {

    data.forEach((course) => {

      buildTableRows(tbody, course);

    });
  });

  function buildTableRows(table, course) {
    const row = table.insertRow();

      const courseTitleCell = row.insertCell();
      courseTitleCell.innerHTML = course.courseName;

      const courseDept = row.insertCell();
      courseDept.innerHTML = course.dept;

      const courseNumber = row.insertCell();
      courseNumber.innerHTML = course.courseNum;

      const courseDetailsLink = row.insertCell();
      courseDetailsLink.innerHTML = `<a href="./details.html?courseid=${course.id}">View course details</a>`;

      const deleteCourseLink = document.createElement('a');
      deleteCourseLink.href = `./confirm-delete.html?courseid=${course.id}`
      deleteCourseLink.innerText = 'Delete Course'
      deleteCourseLink.classList.add('link-danger', 'btn', 'border-danger')
      
      row.append(deleteCourseLink)
  }
