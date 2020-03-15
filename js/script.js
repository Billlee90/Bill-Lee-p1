/* Javascript Content for Project 1 */

/* Display 'greeting' varies on the time of hours */
var today = new Date(); //Current date
var hourNow = today.getHours(); //Hours in a day
var greeting; //input

/*'Greeting' input */
if (hourNow >= 18)
{
    greeting = "Good Evening!";
}
else if (hourNow >= 12) 
{
    greeting = "Good Afternoon!";
} 
else if (hourNow >= 0)
{
    greeting = "Good Morning!";
}
else
{
    greeting = "Welcome!";
}

/* Display output 'greeting' in html */
var greetingEl = document.getElementById('greeting');
greetingEl.textContent = greeting;

/* Display Time and Date */

//Refresh rate in milli seconds (1 Sec) 
function display_time() {
    var refresh = 1000; 
    var myTime = setTimeout("display_date()", refresh);
}

function display_date() {
    var x = new Date();
    var x1; // Current date
    var x2; // Time

    //Change to 'AM/PM via time' 
    if (hourNow >= 12) //PM
    {
        x1 = x.getMonth() + 1 + '/' + x.getDate() + '/' + x.getFullYear();
        x2 = " - " +  x.getHours()+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ' PM';
        document.getElementById('time').innerHTML = x1 + x2;
        display_time();
    }
    else if (hourNow >= 0) //AM
    {
        x1 = x.getMonth() + 1 + '/' + x.getDate() + '/' + x.getFullYear();
        x2 = " - " +  x.getHours()+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ' AM';
        document.getElementById('time').innerHTML = x1 + x2;
        display_time();
    }


/* Package Price and Discounts */

var familyCost = 100;   //family price
var singleCost = 50;    //Single price    
var familyDiscountPercent = .20;    //Family discount percentage
var singleDiscountPercent = .15;   //single discount percentage


// Display family price
var familyPriceE1 = document.getElementById("familyPrice");
familyPriceE1.textContent = familyCost;

// Display single price
var singlePriceE1 = document.getElementById('singlePrice');
singlePriceE1.textContent = singleCost;

//Display discount for family and single
var familyDiscountE1 = document.getElementById("familyDiscount");
familyDiscountE1.textContent = familyDiscountPercent * 100;

var singleDiscountE1 = document.getElementById("singleDiscount");
singleDiscountE1.textContent = singleDiscountPercent * 100;

//Total Price with Discount for family and single
var familyPriceDiscount = familyCost - (familyCost * familyDiscountPercent);
var singlePriceDiscount = singleCost - (singleCost * singleDiscountPercent);

var familyDiscountTotalCost = document.getElementById('familyDiscountPrice');
familyDiscountTotalCost.textContent = familyPriceDiscount;

var singleDiscountTotalCost = document.getElementById('singleDiscountPrice');
singleDiscountTotalCost.textContent = singlePriceDiscount;

}