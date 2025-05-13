'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

// Function to apply theme from localStorage
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');

    themeBtn.forEach(btn => {
      btn.classList.add('light');
      btn.classList.remove('dark');
    });

  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');

    themeBtn.forEach(btn => {
      btn.classList.add('dark');
      btn.classList.remove('light');
    });
  }
}

// Apply theme on initial load
applySavedTheme();

// Theme toggle click
themeBtn.forEach(btn => {
  btn.addEventListener('click', function () {

    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    themeBtn.forEach(btn => {
      btn.classList.toggle('light');
      btn.classList.toggle('dark');
    });

    // Save theme to localStorage
    if (document.body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }

  });
});
