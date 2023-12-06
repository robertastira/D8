const myForm = document.getElementById('main-form');

function decorateText(e) {
    this.style.textDecoration  = 'line-through';
}

myForm.addEventListener('submit', function (e) {
e.preventDefault();
console.log('Iniziamo a raccogliere le attività!')

const newActivity = document.getElementById('toDoList').value // Input attività da registrare
console.log(newActivity)

const userActivity = document.createElement('div')
userActivity.addEventListener("click", decorateText);

userActivity.innerHTML = `<p>${toDoList.value}</p>`

const activitySection = document.getElementById('activityBook')
activitySection.appendChild(userActivity)

toDoList.value = ''

})
