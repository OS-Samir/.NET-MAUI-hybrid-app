// wwwroot/js/scripts.js
function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    const eyeIcon = passwordField.nextElementSibling;
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}
