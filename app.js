
function login() {
  var u = document.getElementById('user').value;
  var p = document.getElementById('pass').value;
  if((u=='under21' || u=='primasquadra') && p=='password'){
    alert('Login effettuato come ' + u);
    // Qui caricherai la dashboard squadra
  } else {
    alert('Credenziali errate');
  }
}
