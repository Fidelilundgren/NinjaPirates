// For the hamburger on the header
function myFunction() {
        
    if (document.getElementById('links-nav').style.display === "flex")
    {
        document.getElementById('links-nav').style.display = "none";
    }
    else
    {
        document.getElementById('links-nav').style.display = "flex";
     }
}

// Booking page - To show rooms if all fields are choosed 
var bookingForm = document.getElementById("booking-form"); /* hämtar formuläret */
var results = document.getElementById("search-results"); /* hömta resultat */
var errorText = document.getElementById("booking-error");

if (results) {
    results.style.display = "none"; /* Detta gör så att inga rum visas innan man klickar på sökknappen */
}

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var checkIn = document.getElementById("check-in").value; /* Hämtar check-in datum */
        var checkOut = document.getElementById("check-out").value; /* Hämtar check-out datum */
        var guests = document.getElementById("guests").value; /* Hämtar antal gäster */

        if (checkIn === "" || checkOut === "" || guests === "") { /* Kollar om något fält är tomt */
            errorText.innerText = "Please fill in all fields before searching."; /* Visar att du måste fylla i alla fält */
            results.style.display = "none"; /* visar inget om något fält är tomt */
        } else {
            errorText.innerText = "";
            results.style.display = "grid"; /* Visar rummen om alla fält är ifyllda */
        }
    });
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Hämta värden 
    const fn = document.getElementById('firstName').value;
    const em = document.getElementById('email').value;
    const ph = document.getElementById('phone').value;

    
    const output = document.getElementById('formResponse');

    if (output) {
        output.innerHTML = `<strong>Thank you ${fn}!</strong><br>We have received your email (${em}) and will call you on ${ph}.`;
        output.style.color = "#009966";
        // console.log("Data utskriven", {fn, em, ph});
    }
         this.reset();  // Rensar värdet i kontakta oss
});




