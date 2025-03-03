document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function (event) {
        if (this.getAttribute("href").startsWith("#")) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    console.log("About Us Page Loaded");
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formStatus = document.getElementById("formStatus");

  if (name === "" || email === "" || message === "") {
      formStatus.style.color = "red";
      formStatus.textContent = "Please fill in all fields.";
      return;
  }

  formStatus.style.color = "green";
  formStatus.textContent = "Message sent successfully! We'll get back to you soon.";

  // Reset form after submission
  document.getElementById("contactForm").reset();
});



// Toggle menu on click
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('navbarContent').classList.toggle('show');
});



document.addEventListener("DOMContentLoaded", function () {
  let heading = document.querySelector(".highlight-text");

  setInterval(() => {
      heading.style.textShadow =
          `0 0 ${10 + Math.random() * 10}px rgba(255, 215, 0, 0.9), 
           0 0 ${20 + Math.random() * 10}px rgba(255, 215, 0, 0.8)`;
  }, 1000);
});





