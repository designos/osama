
// get elements 
nameField = document.getElementById("name-field");
emailField = document.getElementById("email-field");
messageField = document.getElementById("message-field");
phoneNumberField = document.getElementById("phone-field");
sendMessage = document.getElementById("send-message");
dnagerAlert = document.getElementById("danger-alert");
successAlert = document.getElementById("success-alert");

// send message
sendMessage.onclick = () => {
    if (nameField.value !== "" && emailField.value !== "" && messageField.value !== "" && phoneNumberField.value !== "") {
        sendEmail();
    }

    if (nameField.value == "" && emailField.value == "" && messageField.value == "" && phoneNumberField.value == "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value !== "" && emailField.value !== "" && messageField.value == "" && phoneNumberField.value !== "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "Message field have an error. Please check and try again.";
    } else if (nameField.value !== "" && emailField.value == "" && messageField.value !== "" && phoneNumberField.value !== "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "Email field have an error. Please check and try again.";
    } else if (nameField.value == "" && emailField.value !== "" && messageField.value !== "" && phoneNumberField.value !== "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "Name field have an error. Please check and try again.";
    } else if (nameField.value !== "" && emailField.value !== "" && messageField.value !== "" && phoneNumberField.value == "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "Phone number field have an error. Please check and try again.";
    } else if (nameField.value !== "" && emailField.value == "" && messageField.value == "" && phoneNumberField.value == "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value == "" && emailField.value !== "" && messageField.value == "" && phoneNumberField.value == "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value == "" && emailField.value == "" && messageField.value !== "" && phoneNumberField.value == "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value == "" && emailField.value == "" && messageField.value == "" && phoneNumberField.value !== "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value !== "" && emailField.value !== "" && messageField.value == "" && phoneNumberField.value == "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value == "" && emailField.value == "" && messageField.value !== "" && phoneNumberField.value !== "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value == "" && emailField.value !== "" && messageField.value == "" && phoneNumberField.value !== "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value !== "" && emailField.value == "" && messageField.value == "" && phoneNumberField.value !== "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value !== "" && emailField.value == "" && messageField.value !== "" && phoneNumberField.value == "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    } else if (nameField.value == "" && emailField.value !== "" && messageField.value !== "" && phoneNumberField.value == "") {
        dnagerAlert.style.display = "block";
        dnagerAlert.innerHTML = "One or more fields have an error. Please check and try again.";
    }
    else {
        dnagerAlert.style.display = "none";
    };

    setTimeout(() => {

        dnagerAlert.style.display = "none";

    }, 5000);
}


// get api
function sendEmail() {

    Email.send({
        SecureToken: "f74f2e0e-dbf5-42f2-a545-32f042d5263c",
        To: 'osamahn.work@gmail.com',
        From: `osamahn.work@gmail.com`,
        Subject: `${nameField.value}`,
        Body: `
            <b>Phone Number:</b> ${phoneNumberField.value} <br>
            <b>Email:</b>: ${emailField.value} <br> 
            <hr> <br>
           <b>:Message</b> <br> ${messageField.value}`
    }).then(
        () => {
            successAlert.style.display = "block";
            successAlert.innerHTML = "Thank you for your message. It has been sent.";

            nameField.value = "";
            emailField.value = "";
            messageField.value = "";
            phoneNumberField.value = "";
        }
    );

    setTimeout(() => {

        successAlert.style.display = "none";

    }, 3000);

};

