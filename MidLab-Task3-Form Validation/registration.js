function validateRegistration() {
    var name = document.getElementById("reg_name").value;
    if (name === "") {
        alert("Name is required.");
        return false;
    }
    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return false;
    }
    var email = document.getElementById("reg_email").value;
    if (email === "") {
        alert("Email is required.");
        return false;
    }
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    if (atPos <= 0 || dotPos <= atPos + 1 || dotPos >= email.length - 1) {
        alert("Please enter a valid email.");
        return false;
    }
    var genders = document.getElementsByName("gender");
    var genderSelected = false;
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        alert("Please select your gender.");
        return false;
    }
    var dob = document.getElementById("reg_dob").value;
    if (dob === "") {
        alert("Date of birth is required.");
        return false;
    }
    var today = new Date();
    var dobDate = new Date(dob);
    if (dobDate > today) {
        alert("Date of birth cannot be in the future.");
        return false;
    }
    var bg = document.getElementById("reg_bloodgroup").value;
    if (bg === "") {
        alert("Please select your blood group.");
        return false;
    }
    var degrees = document.getElementsByName("degree");
    var degreeSelected = false;
    for (var j = 0; j < degrees.length; j++) {
        if (degrees[j].checked) {
            degreeSelected = true;
            break;
        }
    }
    if (!degreeSelected) {
        alert("Please select at least one degree.");
        return false;
    }
    var photo = document.getElementById("reg_photo").value;
    if (photo === "") {
        alert("Please choose a photo.");
        return false;
    }
    alert("Form is valid!");
    return true;
}
