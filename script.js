//var listvalue = ["trumpclicker"]
var dadmoney = localStorage.dadmoney
var debt = $("#debt")
var clickmoney = 1
var money = Number(localStorage.loadmoney || 0)
var moneyowedvalue = 0
var moneyowed = Number(localStorage.loaddebt || 0)
//document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";

if (dadmoney = true){
  setInterval(function(){
    money = money + 1
  document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";
                        }, 3000);

}

document.getElementById("click").onclick = function click() {
  money += clickmoney;
  document.getElementById('money').innerHTML = 'you have ' + money + " million dollars";
  var money2 = moneyowed+1
  moneyowed = money2*1.01
  console.log(moneyowed)
  var moneyowedvalue = "~" + Math.round(moneyowed)
  debt.html("you also have " + moneyowedvalue + " million dollars of debt")
  localStorage.debt = moneyowed
  localStorage.money = money
  
//  addListItem(listvalue, money);
//  console.log(listvalue)
}

