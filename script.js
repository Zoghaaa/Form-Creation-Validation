document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

    form.addEventListener("submit", function (event) {

        event.preventDefault()

        const usernameInput = document.getElementById("username").value.trim()
        const emailInput = document.getElementById("email").value.trim()
        const passwordInput = document.getElementById("password").value.trim()

////Initialize Validation Variables:
        let isValid = true
        let messages = []

        ////Username Validation:
        if (usernameInput.length < 3) {
            isValid = false
            messages.push("Username must be at least 3 characters long.")
        }

        ////Email Validation:

        if (!emailInput.includes('@') || !emailInput.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        
        ////Password validation:
        if(passwordInput.length < 8){
            isValid = false
            messages.push("Password must be at least 8 characters long.");
        }

        ////Feedback Display Logic:

        feedbackDiv.style.display = "block" //feedback visivle

        if(isValid){
            feedbackDiv.textContent= "Registration successful!"
            feedbackDiv.style.color = "#28a745";
        } else{
            feedbackDiv.innerHTML = messages.join("<br>"); // Join error messages with line breaks
            feedbackDiv.style.color = "#dc3545"
        }

    })


})
