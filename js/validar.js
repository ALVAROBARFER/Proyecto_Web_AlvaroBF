const botonRegistro = document.querySelector("#btnRegis");
const botonLogin = document.querySelector("#btnLogin");

botonRegistro.addEventListener('click', (e) => {

    let vacios = document.getElementsByClassName('--input');

    for (valor of vacios){

        if(valor.value != null){


        } else {

            valor.innerHTML = '<div class="invalid-feedback --vacio">El campo esta vacío.</div>';
        }
    }
});