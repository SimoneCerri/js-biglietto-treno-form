//Create some variables and take it from html
let fullName = document.querySelector(".full_name");
let kiloMeters = document.querySelector(".kilometers");
let submit = document.querySelector(".submit_form");
let reset = document.querySelector(".reset_form");

//Add the click event to get variables
//document.addEventListener("click",)
submit.addEventListener("click" , function() {
    let fullNameValue = fullName.value;
    let kiloMetersValue = kiloMeters.value;

    console.log(fullNameValue);
    console.log(kiloMetersValue);

    let result = document.querySelector(".ticket");

    result.append(" " + fullNameValue);
});
