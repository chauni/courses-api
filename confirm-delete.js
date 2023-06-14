const confirmDeleteBtn = document.getElementById('confirmDeleteBtn')
const courseId = urlParams.get('courseid')
console.log(courseId);

confirmDeleteBtn.addEventListener('click', () => {
    fetch(`http://localhost:8081/api/courses/${courseId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    .then(response => {
        if (response.status === 200) {
            window.location.href = './index.html'
        }
    });
})