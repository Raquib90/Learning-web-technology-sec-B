function validateDegree() {
    var degrees = document.getElementsByName("degree");
    var checkedCount = 0;
    for (var i = 0; i < degrees.length; i++) {
        if (degrees[i].checked) {
            checkedCount++;
        }
    }
    if (checkedCount === 0) {
        alert("Please select at least one degree.");
        return false;
    }
    return true;
}
