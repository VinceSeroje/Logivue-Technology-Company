// ===========================================
// 🚀 Section Scroll-In Animation
// Purpose: Adds 'visible' class to sections when they enter the viewport
// ===========================================
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // triggers CSS animation
        }
      });
    },
    { threshold: 0.22 } // triggers when 22% of section is visible
  );

  sections.forEach(section => {
    observer.observe(section); // start observing each section
  });
});

// ===========================================
// 🍔 Mobile Navigation Toggle
// Purpose: Opens/closes nav menu on small screens
// ===========================================
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    // Toggle menu on button click
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation(); // prevent bubbling to document
      navLinks.classList.toggle('open'); // show/hide nav
      navToggle.setAttribute(
        'aria-expanded',
        navLinks.classList.contains('open') ? 'true' : 'false'
      );
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// ===========================================
// 🧭 Smooth Anchor Scrolling
// Purpose: Smoothly scrolls to section when nav link is clicked
// ===========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // prevent default jump
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===========================================
// 🔗 Active Link Highlighting
// Purpose: Highlights nav link based on current scroll position
// ===========================================
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  function activateLinkOnScroll() {
    let scrollPos = window.scrollY + window.innerHeight / 3; // offset for better accuracy
    let currentSection = null;

    // Determine which section is currently in view
    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update nav link classes
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateLinkOnScroll); // update on scroll
  activateLinkOnScroll(); // run on page load
});
