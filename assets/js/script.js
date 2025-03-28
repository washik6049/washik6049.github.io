// Add interactive features if required
console.log("Welcome to Washik's Portfolio!");
const roles = ["Web Development", "App Development", "UI/UX Design", "Blogger", "Researcher"];
let currentRoleIndex = 0;

function changeRole() {
  const roleElement = document.getElementById("role-text");
  const arrowElement = document.getElementById("arrow");

  // Remove the existing fade-in animation classes to reset them
  roleElement.classList.remove("fade-in");
  arrowElement.classList.remove("pulse");

  // Force reflow to restart the animation
  void roleElement.offsetWidth;
  void arrowElement.offsetWidth; // Trigger reflow for the arrow

  // Add the animation classes again
  roleElement.classList.add("fade-in");
  arrowElement.classList.add("pulse");

  // Update the role text
  roleElement.textContent = roles[currentRoleIndex];

  // Move to the next role in the array
  currentRoleIndex = (currentRoleIndex + 1) % roles.length;
}

// Change the role every 2 seconds (2000 milliseconds)
setInterval(changeRole, 2000);

// Initial role change
changeRole();

document.addEventListener("DOMContentLoaded", function () {
    const technologies = [
      "HTML",
      "CSS",
      "JS",
      "PHP",
      "Flutter",
      "Dart",
      "C",
      "Python",
      "Java",
      "C++",
      "Django",
      "SQL",
      "MySQL",
      "ML",
      "Deep Learning",
      "NLP"
    ];
  
    const techLine = document.getElementById("tech-line");
    let index = 0;
  
    function displayTechnologies() {
      techLine.innerHTML = ""; // Clear previous content
  
      technologies.forEach((tech, i) => {
        const techSpan = document.createElement("span");
        techSpan.textContent = tech + (i < technologies.length - 1 ? " ▸ " : ""); // Add ▸ unless it's the last item
        techSpan.classList.add("tech-item");
        techSpan.style.setProperty('--delay', `${i * 0.5}s`); // Set a custom delay for each item
        techLine.appendChild(techSpan);
      });
    }
  
    function loopAnimation() {
      displayTechnologies(); // Display technologies
      setTimeout(loopAnimation, technologies.length * 500 + 1000); // Restart the loop after full animation
    }
  
    loopAnimation(); // Start the animation loop
  });
  
  function toggleFlip(card) {
    const innerCard = card.querySelector(".service-card-inner");
    innerCard.style.transform =
      innerCard.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
  }  
    
  // Show Popup when "Hire Me!" button is clicked
document.querySelectorAll('.hire-btn').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the card from flipping back
    document.getElementById('popup-box').classList.remove('hidden');
  });
});

// Handle "Back" button in the popup
document.getElementById('back-btn').addEventListener('click', () => {
  window.location.href = '#services'; // Go back to the top (Home section)
  document.getElementById('popup-box').classList.add('hidden');
});

// Close Popup when clicking outside the content
document.getElementById('popup-box').addEventListener('click', (event) => {
  if (event.target.id === 'popup-box') {
    document.getElementById('popup-box').classList.add('hidden');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check saved preference and apply theme
  const isDarkMode = localStorage.getItem("dark-mode") === "true";
  if (isDarkMode) {
    enableDarkMode();
    darkModeToggle.checked = true;
  }

  // Toggle dark mode on checkbox change
  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      enableDarkMode();
      localStorage.setItem("dark-mode", "true"); // Save preference
    } else {
      disableDarkMode();
      localStorage.setItem("dark-mode", "false"); // Save preference
    }
  });

  function enableDarkMode() {
    body.classList.add("dark-mode");
  }

  function disableDarkMode() {
    body.classList.remove("dark-mode");
  }
});

const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav ul');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Enable smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Function to trigger animations when sections come into view
function revealSections() {
  let sections = document.querySelectorAll('.section');
  let windowHeight = window.innerHeight;

  sections.forEach((section) => {
    let sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

// Trigger function on scroll

window.addEventListener('scroll', revealSections);
revealSections(); // Run on page load


// 3. Typing Effect for "Welcome" Text
document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = "Welcome to my portfolio!";
  const welcomeElement = document.querySelector("#home .intro h2");
  welcomeElement.innerHTML = `<span class="typing-container"></span><img src="assets/images/hi.gif" alt="👋">`;
  const typingContainer = welcomeElement.querySelector(".typing-container");

  let charIndex = 0;

  function typeWelcome() {
    if (charIndex < welcomeText.length) {
      typingContainer.textContent += welcomeText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWelcome, 100); // Adjust speed of typing here
    }
  }

  typeWelcome(); // Start typing animation
});

// Ensure all sections are marked for scroll animations (adding .section class dynamically)
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("#home, #about, #education, #publications, #services, #projects, #certifications, #volunteering, .contact-section");
  sections.forEach(section => {
    section.classList.add("section"); // Ensure all animated sections have the .section class
  });
});

// 5. Bounce-In Effect for Certification and Volunteering Images on Scroll
document.addEventListener("DOMContentLoaded", function () {
  function revealImages() {
    const images = document.querySelectorAll(".certification-card img, .volunteering-card img");
    const windowHeight = window.innerHeight;

    images.forEach((img) => {
      const imgTop = img.getBoundingClientRect().top;
      if (imgTop < windowHeight - 100 && !img.classList.contains("bounce-in")) {
        img.classList.add("bounce-in");
      }
    });
  }

  // Trigger on scroll and on initial load
  window.addEventListener("scroll", revealImages);
  revealImages();
});

// Section-Wise Animation Trigger for Education Cards
document.addEventListener("DOMContentLoaded", function () {
  function revealEducationCards() {
    const cards = document.querySelectorAll(".education-card");
    const windowHeight = window.innerHeight;

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight - 100 && !card.classList.contains("visible")) {
        card.classList.add("visible");
      }
    });
  }

  // Trigger on scroll and on initial load
  window.addEventListener("scroll", revealEducationCards);
  revealEducationCards();
});

// Ensure Fullscreen Functionality for Certification Images
document.addEventListener("DOMContentLoaded", function () {
  // Attach openFullScreen to all certification images
  var certImages = document.querySelectorAll(".certificate-img");
  certImages.forEach(function (img) {
    img.onclick = function () {
      openFullScreen(this);
    };
  });
});

// Consolidated Fullscreen Functionality for Both Volunteering and Certification Images
document.addEventListener("DOMContentLoaded", function () {
  // Debug: Confirm the script is running
  console.log("DOM fully loaded, setting up fullscreen listeners");

  // Functions for opening and closing the fullscreen modal
  function openFullScreen(img) {
    console.log("openFullScreen called for image:", img.src); // Debug log
    var modal = document.getElementById("imageModal");
    var fullScreenImg = document.getElementById("fullScreenImg");

    if (!modal || !fullScreenImg) {
      console.error("Modal or fullScreenImg element not found!");
      return;
    }

    fullScreenImg.src = img.src;
    modal.style.display = "flex";
  }

  function closeFullScreen() {
    console.log("closeFullScreen called"); // Debug log
    var modal = document.getElementById("imageModal");
    if (modal) {
      modal.style.display = "none";
    } else {
      console.error("Modal element not found!");
    }
  }

  // Attach openFullScreen to all volunteering images
  var volunteeringImages = document.querySelectorAll(".volunteering-img");
  volunteeringImages.forEach(function (img) {
    img.onclick = function () {
      console.log("Volunteering image clicked:", img.src); // Debug log
      openFullScreen(this);
    };
  });

  // Attach openFullScreen to all certification images
  var certImages = document.querySelectorAll(".certificate-img");
  certImages.forEach(function (img) {
    img.onclick = function () {
      console.log("Certification image clicked:", img.src); // Debug log
      openFullScreen(this);
    };
  });

  // Attach closeFullScreen to modal click
  var modal = document.getElementById("imageModal");
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === this || event.target.classList.contains("close")) {
        closeFullScreen();
      }
    });
  } else {
    console.error("Modal element not found on page load!");
  }

  // Expose functions globally to ensure inline onclick works
  window.openFullScreen = openFullScreen;
  window.closeFullScreen = closeFullScreen;
});

// Make Entire Publication Card Clickable
document.addEventListener("DOMContentLoaded", function () {
  // Select all publication cards
  const publicationCards = document.querySelectorAll(".publication-card");

  publicationCards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      // Find the link inside the card
      const link = card.querySelector("a");
      if (link) {
        const href = link.getAttribute("href");
        console.log("Publication card clicked, navigating to:", href); // Debug log

        if (href) {
          // Open the link in a new tab (mimics target="_blank")
          window.open(href, "_blank");
        } else {
          console.warn("No href found in the link inside the card:", card);
        }
      } else {
        console.warn("No link found inside the publication card:", card);
      }
    });
  });
});
