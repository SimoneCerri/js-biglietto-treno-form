//Create some variables and take it from html
let fullName = document.querySelector(".full_name");
let fullNameValue = fullName.value;

let kiloMeters = document.querySelector(".kilometers");
let kiloMetersValue = kiloMeters.value;

let submit = document.querySelector(".submit_form");
let reset = document.querySelector(".reset_form");
console.log(submit);

//Add the click event to get variables
//document.addEventListener("click",)
submit.addEventListener("click" , function() {
    console.log(fullName);
    console.log(kiloMeters);
    let result = document.querySelector(".ticket");
    result.append("Prova")
});
