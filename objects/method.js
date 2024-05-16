function validate(){
    var uname=document.getElementById("uname").value;
    if (uname==""||uname==null){
        let unam=document.getElementById("uname");
        unam.style.border="1px solid red";
        unam.style.borderRadius="12px"
        let errormessage=document.getElementById("errormessage");
        errormessage.innerText="invalidinput"
        errorMessage.style.color = "red"
        let errorLabel = document.getElementById("errorLabel")
        errorLabel.style.color = "red"
    }
}