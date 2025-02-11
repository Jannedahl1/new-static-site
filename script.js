document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation
        if (name && email && message) {
            alert("Message Sent! Thank you, " + name);
            form.reset(); // Clear form fields
        } else {
            alert("Please fill out all fields.");
        }
    });
});
