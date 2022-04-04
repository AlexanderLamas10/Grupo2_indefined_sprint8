window.addEventListener("load", function(){
    let registro = document.querySelector("form.registerjs");

    registro.addEventListener("submit", function(e) {
        

        let errores = [];

        let campoNombre  = document.querySelector("input.name");

        if (campoNombre.value == ""){
            errores.push("El campo de nombres tiene que estar completo")
        } else if (campoNombre.value.length < 3){
            errores.push("lol")
        }

        
        let campoEmail = document.querySelector("input.email");
        if (campoEmail.value == ""){
            errores.push("El campo de email tiene que estar completo")
        }
            // hacer que sea obligatorio pedir el @
        
        


        let campoContraseña = document.querySelector("input.password");
        if (campoContraseña.value == ""){
            errores.push("La contraseña es obligatoria sss")
        } else if (campoContraseña.value.length < 8 ){
            errores.push("La contraseña debe de tener al menos 8 caracteres")
        }


        let campoImagen = document.querySelector("input.file")
        if (campoImagen.value == ""){
            errores.push("debe de ser un archivo jpg")
        }


        if (errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
            }
        }
    })
})