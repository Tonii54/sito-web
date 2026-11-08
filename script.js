const pulsante = document.getElementById("pulsante");
const username = document.getElementById("username");

const numeri=["1234", "54", "6767", "69", "89", "104"];
const parole=["blunt", "dev"];

pulsante.addEventListener('click', () => {
    const testo = document.getElementById("parola").value.trim();
    if (testo.value === "") {
        alert("Inserisci un testo");
    } else {
        const numerocasuale = numeri[Math.floor(Math.random() * numeri.length)];
        const parolacasuale = parole[Math.floor(Math.random() * parole.length)];
        username.textContent = testo + parolacasuale + numerocasuale;
        testo.value = "";

    }
});
