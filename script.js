var listvalue = "trumpclicker"

 function onNewListItem("listvalue", function(output) {
  money.html(output)
})

var clickmoney = 1
var money = 0
document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";
document.getElementById("click").onclick = function click() {
  money += clickmoney;
  document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";
  addListItem("listvalue", money);
  console.log()
}
