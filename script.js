//var listvalue = ["trumpclicker"]
var debt = $("#debt")
var clickmoney = 1
var money = Number(localStorage.loadmoney)
var moneyowedvalue = 0
var moneyowed = Number(localStorage.loaddebt)
//document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";
document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";

debt.html("you also have " + moneyowedvalue + " million dollars of debt")

document.getElementById("click").onclick = function click() {
  money += clickmoney;
  document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";
  var money2 = moneyowed+1
  moneyowed = money2*1.01
  console.log(moneyowed)
  moneyowedvalue = "~" + Math.round(moneyowed)
  debt.html("you also have " + moneyowedvalue + " million dollars of debt")
  localStorage.debt = moneyowed
  localStorage.money = money
  
//  addListItem(listvalue, money);
//  console.log(listvalue)
}

