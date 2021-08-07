const nav = document.getElementById("nav");
const form = document.getElementById("form");


// functions
function getPageName(navLink) {
  const hashTag = navLink.href.indexOf("#") + 1;

  return navLink.href.slice(hashTag);
}

function showPage(pageName) {
  const sections = document.querySelectorAll("section");

  for (const section of sections) {
    if (section.classList.contains(pageName)) {
      if (pageName === "main-page") {
        section.style.paddingTop = "0";
      }
      section.classList.add("show-section");
    } else {
      section.classList.remove("show-section");
    }
  }
}

function addActiveClass(pageName) {
  const navLinks = document.querySelectorAll("nav li > a");

  if (pageName === "main-page") {
    navLinks.forEach(link => link.classList.remove("active"));
    return;
  }

  navLinks.forEach(link => {
    if (getPageName(link) === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


// events listeners
// remove 100px padding top from section-padding class
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('section').style.paddingTop = "0";
});

// show the selected section and add the active class to the selected nav link
nav.addEventListener("click", (event) => {
  const element = event.target;

  if (element.tagName !== "A") {
    return;
  }

  const pageName = getPageName(element);

  addActiveClass(pageName);
  showPage(pageName);
});

// check form inputs
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputs = Array.from(document.querySelector(".inputs").querySelectorAll("input"));

  if (inputs.some(input => input.value === "")) {
    alert("you have to fill in all inputs");
  } else {
    event.target.submit();
  }
});