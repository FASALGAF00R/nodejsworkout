const form = document.querySelector('form')
const email=document.querySelector('input[type=email]');
const password =document.querySelector('input[type=password]');
console.log("jhdusndg");

form.addEventListener("submit",onSubmitFunction);

function onSubmitFunction(event){
    console.log("hii");
    if(email.value===""||password.value===""){
alert("please fill the form")
event.preventDefault();
return false;
    }
}