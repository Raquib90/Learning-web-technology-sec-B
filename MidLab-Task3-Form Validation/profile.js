function checkUserId() {
    var userId = document.getElementById("userid");
    if (userId.value === "") {
        alert("User ID cannot be empty.");
        userId.focus();
    }
}
function validateProfilePicture() {
    var userId = document.getElementById("userid").value;
    var picture = document.getElementById("picture").value;
    if (userId === "") {
        alert("Please enter User ID.");
        return false;
    }
    if (picture === "") {
        alert("Please choose a picture file.");
        return false;
    }
    return true;
}
