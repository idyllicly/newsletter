function accept(){
    let submitForm = document.getElementById("submitForm");
    let submitSuccess = document.getElementById("submitSuccess");
    submitForm.style.display = "none";
    submitSuccess.style.display = "block";
    return false
}