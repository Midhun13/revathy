//code4ScrollUp
document.addEventListener("DOMContentLoaded", () => {
    const scrollUpButton = document.getElementById("scrollUp");

   
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollUpButton.classList.add("show"); // Show the button
        } 
    });

    // Scroll to top 
    scrollUpButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0, // Scroll to the top
            behavior: "smooth", 
        });
    });
});
// Function to show Gmail or phone contact info
 function displayContactInfo(type) {
    var contactInfoContainer = document.getElementById("contact-info-container");
    var gmailContactInfo = document.getElementById("gmail-contact-info");
    var phoneContactInfo = document.getElementById("phone-contact-info");

    // Hide initially
    gmailContactInfo.style.display = 'none';
    phoneContactInfo.style.display = 'none';

    // Sto shw selct info
    if (type === 'gmail') {
        gmailContactInfo.style.display = 'block';
    } else if (type === 'phone') {
        phoneContactInfo.style.display = 'block';
    }

    // Show the info cont with fade-in effect
    contactInfoContainer.style.display = 'block';
    setTimeout(function() {
        contactInfoContainer.style.opacity = 1; // Fade in
    }, 100);
}
