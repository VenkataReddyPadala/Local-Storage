const studentForm = document.querySelector('#studentForm');
const studentContainer = document.querySelector('.students');
const errorMsg = document.querySelector('.error');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = JSON.parse(localStorage.getItem("students")) || [] ;

const addStudents = (name,age,roll) => {
    students.push({name:name,age:age,roll:roll});
    localStorage.setItem("students",JSON.stringify(students))
};

const createStudentElement = (name,age,roll) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');
    studentName.innerHTML = "Student Name: " + name;
    studentAge.innerHTML = "Student Age: " + age;
    studentRoll.innerHTML = "Student Roll: " + roll;
    studentDiv.append(studentName,studentAge,studentRoll);
    studentContainer.appendChild(studentDiv);

    studentContainer.style.display = students.length === 0 ? "none" : "flex";

};

studentContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(student => {
    createStudentElement(student.name,student.age,student.roll);
});

studentForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    var ispresent = false;
    for(const val of students) {
    
        if(val.roll === rollInput.value) 
        {
            ispresent = true;
            errorMsg.innerText = "Roll Number Already Exist"; 
        }
    }
    if(!ispresent){
    addStudents(nameInput.value,ageInput.value,rollInput.value);
    
    createStudentElement(nameInput.value,ageInput.value,rollInput.value);
    errorMsg.innerText = "";
    }
    nameInput.value = null;
    ageInput.value = null;
    rollInput.value = null;
    
});

