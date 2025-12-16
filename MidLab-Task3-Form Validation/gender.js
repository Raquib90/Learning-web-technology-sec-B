function validateGender() {
    var options = document.getElementsByName("gender");
    var selected = false;
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        alert("Please select your gender.");
        return false;
    }
    return true;
}
