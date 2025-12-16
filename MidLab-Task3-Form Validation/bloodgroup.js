function checkBloodGroup() {
    var bg = document.getElementById("bloodgroup");
    if (bg.value === "") {
        alert("Please select a blood group.");
    }
}
function validateBloodGroup() {
    var bg = document.getElementById("bloodgroup").value;
    if (bg === "") {
        alert("Please select your blood group.");
        return false;
    }
    return true;
}
