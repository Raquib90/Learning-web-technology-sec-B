function checkNameField() {
    var nameInput = document.getElementById("myname");
    if (nameInput.value === "") {
        alert("Name cannot be empty.");
        nameInput.focus();
    }
}
function validateName() {
    var nameInput = document.getElementById("myname").value;
    if (nameInput === "") {
        alert("Please enter your name.");
        return false;
    }
    if (nameInput.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }
    return true;
}
