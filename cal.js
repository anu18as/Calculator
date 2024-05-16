function turnOff(){
    var inputField = document.getElementById("inputField")
    inputField.style.visibility="hidden"
}
function turnOn(){
    var inputField = document.getElementById("inputField")
    inputField.style.visibility="visible"
}
function getValues(num){
    var inputValues=document.getElementById("inputValues").value
    console.log(inputValues)
    console.log(num)
    inputValues=num + inputValues


}
function getValues(num){
    var inputValues=document.getElementById("inputValues")
    
    inputValues.value += num
 

}
function clearOneChar(){
     inputValues.Value = inputValues.value.slice(0,-1)
}
function clearAllChar(){
    inputValues.value =""
}
function calculate(){
    inputValues.value = eval(inputValues.value)
}