var loginmoney = localStorage.money
var usernametext = $("#username").val()

username.keydown(function(e) {
  if (e.which == 13) {
  console.log(usernametext)
  }	
})

save.onclick=function(){
  console.log("saved")
  console.log(username)
// storeValue(username.toString,"test")
}

load.onclick=function(){

}


