let akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();

    gender = document.getElementById("gender").value
    dateOfBirth = document.getElementById("date").value

    dateOfBirth = new Date(dateOfBirth);

    let yearOfBirth = dateOfBirth.getFullYear();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let dayOfBirth = dateOfBirth.getDate();

    CC = yearOfBirth.toString().substr(0, 2);
    YY = yearOfBirth.toString().substr(2, 2);
    MM = birthMonth
    DD = dayOfBirth

    dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    dayOfTheWeek = parseInt(dayOfTheWeek);

    let akanName;

    femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    let bornDay;

    if (dayOfTheWeek == 0 && gender == "female") {
        bornDay = "Sunday";
        akanName = femaleAkanNames[0];
    } else if (dayOfTheWeek == 0 && gender == "male") {
        bornDay = "Sunday";
        akanName = maleAkanNames[0];


    } else if (dayOfTheWeek == 1 && gender == "female") {
        bornDay = "Monday";
        akanName = femaleAkanNames[1];
    } else if (dayOfTheWeek == 1 && gender == "male") {
        bornDay = "Monday";
        akanName = maleAkanNames[1];

}