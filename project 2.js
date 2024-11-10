function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username and password are required");
        return false;
    }

    // Add additional validation logic if needed

    return true;
}
