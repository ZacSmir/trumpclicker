var loginmoney = localStorage.money
var debt = localStorage.debt
var usernametext = $("#username").val()

$("#username").keydown(function(e) {
  if (e.which == 13) {
    usernametext = $("#username").val()
  console.log(usernametext)
  }	
})



save.onclick=function(){
  console.log($("#username").val())
  usernametext = $("#username").val()
  console.log(username)
  var objToSave = {
    loginMoney: loginmoney,
    debt: debt
  }
storeValue(usernametext, objToSave)
}

load.onclick=function(){
localStorage.money = 80
}

var usernamestats = {
 money: "hi",
 debt: "hi"
}

var stats = {
 username: usernametext,
  usernamestats: usernamestats
}



loading = function(data) {
localStorage.loaddebt = data.debt
usernametext.loginmoney = localStorage.loadmoney
}

load.onclick=function(){
  usernametext= $("#username").val()
  once(usernametext, loading)
  console.log(localStorage.loadmoney)
}