'use strict'

const asideNav = document.getElementById("AddLesson");

function getContent(content, elment, color) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(content).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elment.style.backgroundColor = color;

  // Add the lessons in aside menu
  asideNav.innerHTML = "";
  if (content === "Lessons") {
    Object.values(lessonsRead).forEach(lesson => asideNav.appendChild(
      createElement("li",
      createElement("a", lesson, function() {getLessonContain(lesson, this, "green")})))); // add onclick function
  }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
