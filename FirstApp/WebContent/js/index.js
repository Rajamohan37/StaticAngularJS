function validateLogin() {

	var name = document.forms["loginForm"]["username"].value;
	if (name == "") {
		alert("Please enter User Name");
		return false;
	} else if (name == "kishore") {

	}

}

function login(form){
	
	if (form.username.value == "raju" && form.password.value == "raju") {
		_redirect();
	} else {
		alert("Error Password or Username");
	}
	
}

function _redirect() {
	window.location.assign("http://localhost:8080/FirstApp/success.html");
	return false;
}