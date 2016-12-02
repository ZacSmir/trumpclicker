var localstorage.dadmoney = false
var dadmoney = false
var dadbutton = $("#dad")

dadbutton.click(dadbuttonfunction)

function dadbuttonfunction(){
dadmoney = true
localStorage.dadmoney = true

}

if (localStorage.dadmoney = true){

console.log("BACK IN BLACK")
}