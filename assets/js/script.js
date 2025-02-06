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

// Function to open image in full screen
function openFullScreen(img) {
  var modal = document.getElementById("imageModal");
  var fullScreenImg = document.getElementById("fullScreenImg");
  
  fullScreenImg.src = img.src; // Set image source
  modal.style.display = "flex"; // Show modal
}

// Function to close full-screen mode
function closeFullScreen() {
  document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside image
document.getElementById("imageModal").addEventListener("click", function(event) {
  if (event.target === this) {
    closeFullScreen();
  }
});


