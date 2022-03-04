let akanForm = document.getElementById('akanForm');
akanForm.addEventListener('submit', (e) => {
    e.preventDefault();

    gender = document.getElementById('gender').value;
    date = document.getElementById('Date-of-Birth').value;
})







































// function SUBMIT(){
//     let date = document.getElementById('date').value;
//     let month = document.getElementById('month').value;
//     let yearOfBirth = document.getElementById('year').value;

//     if (date === "" || date < 1 || date >31){
//         alert("Date must be between 1 and 31");
//     }
//     else if (month === "" || month < 1 || date >12) {
//         alert("Month must be between 1 and 12");
//     }
//     else if(year === "") {
//         alert("You must enter a year")
//     }
//     else {
//         return false;
//     }
// }
