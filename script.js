//var listvalue = ["trumpclicker"]
var debt = $("#debt")
 

var clickmoney = 1
var money = 0
var moneyowed = 0
//document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";

document.getElementById("click").onclick = function click() {
  money += clickmoney;
  document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";
  var money2 = moneyowed+1
  console.log("ssdaf")
  var moneyowed = money2*1.1
  console.log(moneyowed)
  debt.html("you also have " + moneyowed + " million dollars of debt")
  
  
//  addListItem(listvalue, money);
//  console.log(listvalue)
}

function login(){
console.log("lginpage")

}