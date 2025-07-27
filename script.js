
let dati = {};

function aggiornaStorage() {
    localStorage.setItem("valeraDati", JSON.stringify(dati));
}

function caricaStorage() {
    const salvati = localStorage.getItem("valeraDati");
    if (salvati) {
        dati = JSON.parse(salvati);
    }
}

function aggiungiPartita() {
    const nome = document.getElementById("nomePartita").value;
    if (!nome) return;
    if (!dati[nome]) dati[nome] = [];
    aggiornaStorage();
    mostraPartite();
    document.getElementById("nomePartita").value = "";
}

function aggiungiGiocatore() {
    const nome = document.getElementById("nomeGiocatore").value;
    const partita = document.getElementById("partitaAttiva");
    if (!nome || !partita) return;
    dati[partita.textContent].push({ nome });
    aggiornaStorage();
    mostraConvocati(partita.textContent);
    document.getElementById("nomeGiocatore").value = "";
}

function mostraPartite() {
    const lista = document.getElementById("listaPartite");
    lista.innerHTML = "";
    Object.keys(dati).forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        li.onclick = () => {
            document.getElementById("partitaAttiva")?.remove();
            const titolo = document.createElement("h3");
            titolo.id = "partitaAttiva";
            titolo.textContent = nome;
            document.getElementById("convocazioni").prepend(titolo);
            mostraConvocati(nome);
        };
        lista.appendChild(li);
    });
}

function mostraConvocati(partita) {
    const lista = document.getElementById("listaConvocati");
    lista.innerHTML = "";
    dati[partita].forEach(g => {
        const li = document.createElement("li");
        li.textContent = g.nome;
        lista.appendChild(li);
    });
}

function esportaCSV() {
    let csv = "Partita,Giocatore\n";
    for (const partita in dati) {
        dati[partita].forEach(g => {
            csv += `${partita},${g.nome}\n`;
        });
    }
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "convocazioni.csv");
    link.click();
}

caricaStorage();
mostraPartite();
