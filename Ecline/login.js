function validateForm() {
    var email = document.getElementById("email").value;
    console.log(email);

    var register = document.getElementById("register").value;
    console.log(register);

    var password = document.getElementById("password").value;

    if (email === "" || register === "" || password === "") {
        alert("Please Fill in All Fields");
    } else {
        alert("Registration Successful");
        document.getElementById("register").value = "";
        document.getElementById("password").value = "";
        document.getElementById("email").value = "";
    } 
}