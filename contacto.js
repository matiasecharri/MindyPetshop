let $form = document.getElementById("formulario")


$form.addEventListener("submit", (evento)=> {FormData(evento)})



function FormData(evento) {  

    evento.preventDefault()
    let raza

    if (evento.target[4].checked){
        raza = evento.target[4].value
    }
    if (evento.target[5].checked) {
        raza = evento.target[5].value
    }
    if (evento.target[6].checked) {
        raza = evento.target[6].value
    }

    datosUsuario = {
        nombre: evento.target[0].value,
        telefono: evento.target[1].value,
        nombreDeMascota: evento.target[2].value,
        razaMascota: raza,
        correoElectronico: evento.target[7].value,
        mensaje:  evento.target[8].value
        
    }

    console.log(datosUsuario);
    swal('Gracias por comunicarte con nosotros', 'Tu mensaje sera leido y contestado a la brevedad', 'success');
    

}
