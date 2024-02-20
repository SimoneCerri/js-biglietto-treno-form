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

    let result = document.querySelector(".ticket");
    price = (kiloMeters.value) * 0.21;
    console.log(price);
    let final_price,discount;

    if (ageDiscountValue < 18) //Under 18 discount and final price
    {
        discount = price * 0.2;
        console.log(discount);
        final_price = price - discount;
        console.log(final_price);
        
    }
    else if (ageDiscountValue >= 65) //Over 65 discount and final price
    {
        discount = price * 0.4;
        console.log(discount);
        final_price = price - discount;
        console.log(final_price);
    } else //Last case between 18 and 66 yo
    {
        discount = 0;
        console.log(discount);
        final_price = price;
        console.log(final_price);
    }

    //HTML input of the results
    result.append("Ticket's owner: " + fullNameValue); 
    result.append("Max validation: " + kiloMetersValue + " km");
    result.append("Discount: " + discount + " ()");
    result.append("Ticket price: " + final_price + " \u20AC");
}
);

/* reset.addEventListener("click", function ()
{
    document.querySelector(".full_name").reset();
    document.querySelector(".kilometers").reset();
    document.querySelector(".submit_form").reset();
}
); */


