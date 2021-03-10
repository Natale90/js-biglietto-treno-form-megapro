
var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');
var costo = 0.21;
var costoTotale = 0;

generaBtn.addEventListener("click", function(){

  // console.log("ho cliccato su genera");
  var nome = document.getElementById("nome").value;
  // console.log(nome);

  var distanza = parseInt(document.getElementById("distanza").value);
  // console.log(distanza);

  var eta = document.getElementById("eta").value;
  console.log(nome, distanza, eta);

  if (nome !== "" && distanza > 0 && eta !== "") {

    costoTotale = costo * distanza;
    console.log(costoTotale);

    if (eta == 1) {

      var  scontoMin = parseInt((costoTotale * 0.2).toFixed(2));
      costoTotale = costoTotale - scontoMin;
      // var offertaMin = "offerta minorenni";
      document.getElementById("offerta").innerHTML = "Offerta minorenni";
    } else if (eta == 3) {

      var  scontoOver = parseInt((costoTotale * 0.4).toFixed(2));
      costoTotale = costoTotale - scontoOver;
      var offertaOver = "Offerta Over 65";
      document.getElementById("offerta").innerHTML = "Offerta over 65";
    }

    console.log(costoTotale);

    document.getElementById("costo_tot").innerHTML = costoTotale;

    var cpCode = Math.floor(Math.random() * (100000 - 90000)) + 90000;
    console.log(cpCode, typeof cpCode);

    document.getElementById("codice_cp").innerHTML = cpCode;

    var vagone = Math.floor(Math.random() * 15) + 1;
    document.getElementById("carrozza").innerHTML = vagone;

    document.getElementById("nome_cognome").innerHTML = nome;

  } else {


  }
})


// annullaBtn.addEventListener("click", function(){
//
//   console.log("ho cliccato su annulla");
// })
