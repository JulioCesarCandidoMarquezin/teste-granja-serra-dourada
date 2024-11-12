const btn_loc = document.querySelector("#btn-loc");
const mapa = document.querySelector("#mapa");

const btn_talk = document.querySelector("#btn-talk");
const blocks = document.querySelectorAll(".content");
const email_box = document.querySelector("#email-box");

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
