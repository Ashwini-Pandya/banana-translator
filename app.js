var btnTranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txtinput");

console.log(txtinput)
var translator = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + txtinput.value
function clickHandler() {
    console.log("clicked.")
    console.log("input", txtinput.value)
    console.log(translator)
}

btnTranslate.addEventListener("click", clickHandler)


