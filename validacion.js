const inputs = document.querySelectorAll("#input");
const form = document.getElementById("form-contact");
const button_send = document.getElementById('btn-send')

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
       valida(input.target);
    });
});

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    if (form.checkValidity()) {
        
        Swal.fire(
            'Mensaje enviado',
            'Gracias por contactar',
            'success'
        )
        form.reset();
    }
});

function valida(input)  {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        
        input.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
          mostrarMensajeDeError(tipoDeInput, input);
    }
}
  
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
      patternMismatch: "El nombre debe contener maximo 50 caracteres.",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El asunto debe contener maximo 50 caracteres.",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
        patternMismatch: "El mensaje debe contener maximo 300 caracteres.",
    },
}

