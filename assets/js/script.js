//Create some variables and take it from html
let fullName = document.querySelector(".full_name");
let kiloMeters = document.querySelector(".kilometers");
let submit = document.querySelector(".submit_form");
let reset = document.querySelector(".reset_form");
let ageDiscount = document.getElementById("ages");
let discount, price;
/* submit = [{max:1,count:0}] */

//Add the click event to get variables
submit.addEventListener("click", function ()
{
    let fullNameValue = fullName.value;
    let kiloMetersValue = kiloMeters.value;
    let ageDiscountValue = ageDiscount.value;
    console.log(fullNameValue);
    console.log(kiloMetersValue);
    console.log(ageDiscountValue);

    /* let result = document.querySelector(".ticket"); */
    
    price = (kiloMeters.value) * 0.21;
    console.log(price);
    let final_price,discount,discount_percent;

    if (ageDiscountValue < 18) //Under 18 discount and final price
    {
        discount_percent = ("20%");
        discount = price * 0.2;
        console.log(discount);
        final_price = price - discount;
        console.log(final_price);
        
    }
    else if (ageDiscountValue >= 65) //Over 65 discount and final price
    {
        discount_percent = ("40%");
        discount = price * 0.4;
        console.log(discount);
        final_price = price - discount;
        console.log(final_price);
    } else //Last case between 18 and 66 yo
    {
        discount_percent = ("Full-Price");
        discount = 0;
        console.log(discount);
        final_price = price;
        console.log(final_price);
    }

    //variables for HTML - JS
    let result_name = document.querySelector(".result_name");
    /* let result_km = document.querySelector(".result_km"); */
    let result_discount = document.querySelector(".result_discount");
    let result_final_price = document.querySelector(".result_final_price");

    //HTML input of the results inside ticket
    result_name.append(fullNameValue); 
    /* result_km.append("Max validation: " + kiloMetersValue + "km"); */
    result_discount.append("Discount: " + discount_percent + " value of: " + discount + "\u20AC");
    result_final_price.append(final_price.toFixed(2) + " \u20AC");

    //about the 2 random number create for the ticket
    let carriage = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    console.log(carriage);
    let CcodeP = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
    console.log(CcodeP);
    let train_carriage = document.querySelector(".train_carriage")
    let cp_code = document.querySelector(".cp_code")
    train_carriage.append (carriage);
    cp_code.append(CcodeP);
}
);



/* reset.addEventListener("click", function ()
{
    document.querySelector(".full_name").reset();
    document.querySelector(".kilometers").reset();
    document.querySelector(".submit_form").reset();
}
); */


