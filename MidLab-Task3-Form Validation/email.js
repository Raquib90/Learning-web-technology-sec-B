function checkEmailField() {
    var emailInput = document.getElementById("email");
    if (emailInput.value === "") {
        alert("Email cannot be empty.");
        emailInput.focus();
    }
}
function validateEmail() {
    var email = document.getElementById("email").value;
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    if (atPos <= 0 || dotPos <= atPos + 1 || dotPos >= email.length - 1) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}
