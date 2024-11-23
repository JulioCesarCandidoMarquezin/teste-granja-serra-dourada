const btn_loc = document.querySelector("#btn-loc");
const mapa = document.querySelector("#mapa");

const btn_talk = document.querySelector("#btn-talk");
const btn_cancel = document.querySelector("#btn-cancel");
const blocks = document.querySelectorAll(".content");
const email_box = document.querySelector("#email-box");

const form = document.getElementById('email-form');
const inputs = form.querySelectorAll('input[required]');
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

btn_submit.addEventListener("click", () => {
    btn_submit.disabled = true;
})

inputs.forEach(input => {
    input.addEventListener('input', validarFormulario);
});