
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

function exportCSV(){
  var csvContent = "data:text/csv;charset=utf-8,Nome,Presenze\nRossi Marco,10\nBianchi Luca,8";
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "statistiche.csv");
  document.body.appendChild(link);
  link.click();
}
