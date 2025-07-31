
let giocatori = [];
let partite = [];

function aggiungiGiocatore() {
    const nome = prompt("Nome del giocatore:");
    if (nome) {
        giocatori.push({ nome, convocazioni: 0, minuti: 0, gol: 0, ammonizioni: 0, espulsioni: 0 });
        aggiornaListaGiocatori();
        aggiornaStatistiche();
    }
}

function aggiornaListaGiocatori() {
    const ul = document.getElementById("listaGiocatori");
    ul.innerHTML = "";
    giocatori.forEach(g => {
        const li = document.createElement("li");
        li.textContent = g.nome;
        ul.appendChild(li);
    });
}

function aggiungiPartita() {
    const avversario = prompt("Avversario:");
    if (avversario) {
        const partita = { avversario, convocati: [] };
        partite.push(partita);
        aggiornaListaPartite();
    }
}

function aggiornaListaPartite() {
    const ul = document.getElementById("listaPartite");
    ul.innerHTML = "";
    partite.forEach((p, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${p.avversario}</strong> - <button onclick="gestisciConvocati(${index})">Convocazioni</button>`;
        ul.appendChild(li);
    });
}

function gestisciConvocati(index) {
    const convocati = prompt("Inserisci nomi convocati separati da virgola:");
    if (convocati) {
        partite[index].convocati = convocati.split(",").map(n => n.trim());
        aggiornaStatistiche();
    }
}

function aggiornaStatistiche() {
    giocatori.forEach(g => {
        g.convocazioni = 0;
        g.minuti = 0;
        g.gol = 0;
        g.ammonizioni = 0;
        g.espulsioni = 0;
    });

    partite.forEach(p => {
        p.convocati.forEach(nome => {
            const g = giocatori.find(g => g.nome === nome);
            if (g) g.convocazioni += 1;
        });
    });

    const div = document.getElementById("tabellaStatistiche");
    let html = "<table border='1'><tr><th>Giocatore</th><th>Convocazioni</th><th>Minuti</th><th>Gol</th><th>Ammonizioni</th><th>Espulsioni</th></tr>";
    giocatori.forEach(g => {
        html += `<tr><td>${g.nome}</td><td>${g.convocazioni}</td><td>${g.minuti}</td><td>${g.gol}</td><td>${g.ammonizioni}</td><td>${g.espulsioni}</td></tr>`;
    });
    html += "</table>";
    div.innerHTML = html;
}

function scaricaCSV() {
    let csv = "Nome,Convocazioni,Minuti,Gol,Ammonizioni,Espulsioni\n";
    giocatori.forEach(g => {
        csv += `${g.nome},${g.convocazioni},${g.minuti},${g.gol},${g.ammonizioni},${g.espulsioni}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "statistiche.csv";
    link.click();
}

function scaricaPDF() {
    window.print();
}
