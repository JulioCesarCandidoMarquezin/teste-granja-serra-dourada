const btn_loc = document.getElementById("btn-loc");
const mapa = document.getElementById("mapa");

const btn_talk = document.getElementById("btn-talk");
const btn_cancel = document.getElementById("btn-cancel");
const blocks = document.querySelectorAll(".content");
const email_box = document.getElementById("email-box");

const form = document.getElementById('email-form');
const inputs = form.querySelectorAll('input[required]');
const tel_input = document.getElementById('telefone-input');
const btn_submit = document.getElementById('btn-submit');

function validarFormulario() {       
    let tudoPreenchido = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            tudoPreenchido = false;
        }        
    });

    btn_submit.disabled = !tudoPreenchido;
}

function formatarTelefone(input) {
    let value = input.target.value.replace(/\D/g, ''); 
    if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length > 10) value = value.slice(0, 10) + '-' + value.slice(10, 14);
    input.target.value = value.slice(0, 15); 
}

btn_loc.addEventListener("click", () => {
    if (mapa.style.display === 'none') {
        mapa.style.display = 'flex';
        btn_loc.textContent = 'Ocultar localização';
    } else {
        mapa.style.display = 'none';
        btn_loc.textContent = 'Mostrar localização';
    }

})

btn_talk.addEventListener("click", () => {

    blocks.forEach((block) => {
        if (block.id != "email-box"){
            block.style.display = 'none';
        }
    })
    email_box.style.display = 'flex';
    btn_loc.style.display = 'none';
})

btn_cancel.addEventListener("click", () => {
    blocks.forEach((block) =>{
        if (block.id != "email-box"){
            block.style.display = 'block';
        }else {
            block.style.display = 'none';
        }
        btn_loc.style.display = 'flex';
    })
})

tel_input.addEventListener('input', formatarTelefone);

form.addEventListener('input', validarFormulario);
