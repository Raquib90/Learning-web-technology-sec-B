function checkDobField() {
    var dobInput = document.getElementById("dob");
    if (dobInput.value === "") {
        alert("Please select your date of birth.");
    }
}
function validateDob() {
    var dob = document.getElementById("dob").value;
    if (dob === "") {
        alert("Please select your date of birth.");
        return false;
    }
    var today = new Date();
    var dobDate = new Date(dob);
    if (dobDate > today) {
        alert("Date of birth cannot be in the future.");
        return false;
    }
    return true;
}
