let nombreApellido = document.querySelector("input.nombreApellido");
let email = document.querySelector("input.email");
let password = document.querySelector("input.password");
let formulario = document.querySelector("form.registerjs");

// errores
let errorNombre = document.querySelector("#errorNombre");
let errorEmail = document.querySelector("#errorEmail");
let errorPassword = document.querySelector("#errorPassword");

nombreApellido.addEventListener("blur", nombreValidator)
email.addEventListener("blur",emailValidator)
password.addEventListener("blur",passwordValidator)

let errores = {};

function nombreValidator()
    {
        if(nombreApellido.value.length == 0)
        {
            let error = "El nombre no puede quedar vacio"
            errorNombre.innerHTML = error;
            errores.nombre = error

        }else if(nombreApellido.value.length < 2)
            {
                let error = "El nombre debe ser mayor a 2 caracteres"
                errorNombre.innerHTML = error;
                errores.nombre = error
            }
            else{
                errorNombre.innerHTML = "";
                errores.nombre = "";
            };
        
        console.log(errores);
    }

function emailValidator()
    {
        if (email.value == ""){
            let error = "Ingresa un email";
            errorEmail.innerHTML = error;
            errores.email = error;
                } 
        else if (email.value != "" && (!email.value.includes("@") || !email.value.includes("."))){
            let error = "Debe ingresar un email valido";
            errorEmail.innerHTML = error;
            errores.email = error;
                } 
        else {
                    errorEmail.innerHTML = "";
                    errores.email = "";
                };
    };

function passwordValidator()
    {
        let inputPassword = password.value;
            if (inputPassword == ""){
                let error = "Ingresa una contraseña";
                errorPassword.innerHTML = error
                errores.password = error;
            }
            else if (inputPassword != "" && inputPassword.length < 8){
                let error = "La contraseña deberá tener al menos 8 caracteres";
                errorPassword.innerHTML = error
                errores.password = error;
            }
            else{
                errorPassword.innerHTML = "";
                errores.password = "";
            };
    }

formulario.addEventListener("submit",function(event)
    {
        if (errores.length > 0)
        {
            event.preventDefault();
            let ulErrores = document.querySelector(".errores");
                ulErrores.innerHTML = "Revisa los campos por corregir";
                console.log(ulErrores);
        }
        
    })
