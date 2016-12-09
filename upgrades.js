
var i = 0
localstorage.buildatower = i

var dadmoney = false
var dadbutton = $("#dad")

dadbutton.click(dadbuttonfunction)


function dadbuttonfunction(){
  g
dadmoney = true
localStorage.dadmoney = true
console.log("it worked")
}


var buildtower = $("#buildtower")

buildtower.click(buildingatower)

function buildingatower(){
localstorage.buildatower = i+1
}