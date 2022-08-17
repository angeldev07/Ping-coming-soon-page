// Buttons
const sendButton = document.querySelector(".cta")
// Input
const emailInput = document.querySelector(".input")
//Error mensaje
const error = document.querySelector(".email-error")

const expresion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


sendButton.addEventListener("click", ()=>{
    const value = emailInput.value;

    if(value == "" || !expresion.test(value)){
        emailInput.classList.add("error")
        error.classList.add("showError")
    } 
    
    if(value != "" && expresion.test(value)){
        window.location.reload()
    }

})

emailInput.addEventListener(("keyup"), ()=>{
    if(emailInput.classList.contains("error")){
        emailInput.classList.remove("error")
        error.classList.remove("showError")
    }
})