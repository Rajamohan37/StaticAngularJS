
function login(loginForm){
	
	if(loginForm.username.value == "kishore" && loginForm.password.value == "kishore"){
		window.location.href = 'success.html';
		return false;
	}
}