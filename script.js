var clickmoney = 1
var moneys = 0
document.getElementById('money').innerHTML = 'you have ' + moneys + " million dollars";
document.getElementById("click").onclick = function click() {
  console.log("stuff")
  var money = money + clickmoney
  console.log(money)
  document.getElementById('money').innerHTML = 'you have ' + moneys + " million dollars";
}