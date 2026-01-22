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