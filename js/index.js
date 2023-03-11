const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const toggleBtn = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");


//sidebar open
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

//sidebar closes
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})


const enableDarkMode = () => {
  document.body.classList.add("dark-theme-variables");
  toggleBtn.classList.add("dark-theme-variables");
  localStorage.setItem("dark-mode", "enabled");

};

const disableDarkMode = () => {
  document.body.classList.remove("dark-theme-variables");
  toggleBtn.classList.remove("dark-theme-variables");
  localStorage.setItem("dark-mode", "disabled");

};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
    themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
    themeToggler.querySelector('span:nth-child(2)').classList.add('active');
  } else {
    disableDarkMode();
    themeToggler.querySelector('span:nth-child(1)').classList.add('active');
    themeToggler.querySelector('span:nth-child(2)').classList.remove('active');
  }
});