function validarFormulario(){
	var usuario = document.getElementsByName("usuario")[0].value;
	var contraseña = document.getElementsByName("contraseña")[0].value;
	var correo = document.getElementsByName("correo")[0].value;

	if (usuario === "") {
		alert("Por favor, ingresa un nombre de usuario.");
		return false;
	}
	if (correo === "") {
		alert("Por favor, ingresa tu correo.");
		return false;
	}

	var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regexCorreo.test(correo)) {
		alert("ingresa un correo valido");
		return false;
	}
	if (contraseña === "") {
		alert("Por favor, ingresa una contraseña.");
		return false;
	}



	alert("Registrado con exito")

	return true;
}