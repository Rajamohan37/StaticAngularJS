function validateLogin() {

	var name = document.forms["loginForm"]["username"].value;
	if (name == "") {
		alert("Please enter User Name");
		return false;
	} else if (name == "kishore") {

	}

}

function check(form) {
	if (form.username.value == "raju" && form.password.value == "raju") {
		window.location.href = 'http://localhost:8080/FirstApp/success.html';
		return false;
	} else {
		alert("Error Password or Username");
	}
}