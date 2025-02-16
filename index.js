

document.addEventListener("DOMContentLoaded", function () {
    // Select all navbar links with hash links (e.g., #about)
    const navLinks = document.querySelectorAll("nav a[href^='#']");
  
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior
  
            const targetId = this.getAttribute("href"); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section
  
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height
                    behavior: "smooth" // Enable smooth scrolling
                });
            }
        });
      });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
      AOS.init();
    });