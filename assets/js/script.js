function inserir(n) {
  var num = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = num + n;
}
function limpar() {
  document.getElementById("display").innerHTML = "";
}
function calcular() {
  var res = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = eval(res);
}
function voltar() {
  var res = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = res.substring(
    0,
    res.length - 1
  );
}

