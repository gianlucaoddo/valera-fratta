
function login() {
  var u = document.getElementById('user').value;
  var p = document.getElementById('pass').value;
  if((u=='under21' || u=='primasquadra') && p=='password'){
    alert('Login effettuato come ' + u);
    document.getElementById('dashboard').style.display = 'block';
  } else {
    alert('Credenziali errate');
  }
}

function showSection(section){
  var sections = document.getElementsByClassName('section');
  for(var i=0; i<sections.length; i++){
    sections[i].style.display = 'none';
  }
  document.getElementById(section).style.display = 'block';
}

function inserisciGiocatore(){
  var nome = document.getElementById('nomeGiocatore').value;
  var li = document.createElement('li');
  li.textContent = nome;
  document.getElementById('listaGiocatori').appendChild(li);
  document.getElementById('nomeGiocatore').value = '';
}

function inserisciPartita(){
  var avv = document.getElementById('avversario').value;
  var data = document.getElementById('dataPartita').value;
  var li = document.createElement('li');
  li.textContent = data + ' vs ' + avv;
  document.getElementById('listaPartite').appendChild(li);
  document.getElementById('avversario').value = '';
  document.getElementById('dataPartita').value = '';
}
