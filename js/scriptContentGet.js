'use strict'

const asideNav = document.getElementById("AddLesson");

// function drawElement(classEl, element, color) {
//   let i, elements;
//   // Remove the background color of all tablinks/buttons
//   elements = document.getElementsByClassName(classEl);
//   for (i = 0; i < elements.length; i++) {
//       elements[i].style.backgroundColor = "";
//   }
//
//   // Add the specific color to the button used to open the tab content
//   elment.style.backgroundColor = color;
// }

function getContent(content, elment, color, unit) {
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

  // drawElement("tablink", elment, color)

  // Add the lessons in aside menu
  asideNav.innerHTML = "";
  // if (content === "Lessons") {
    if (unit == "readWrite"){
      readWrite.forEach(lesson => asideNav.appendChild(createElement("li",
      createElement("a", lesson.rus, function() {getLessonContain(lesson.eng, this, "lightgreen")})))); // add onclick function
    } else if (unit == "lessonsAll") {
      Object.values(lessonsAll).forEach(lesson => asideNav.appendChild(createElement("li",
      createElement("a", lesson.title, function() {getLessonContain(lesson.key, this, "lightgreen")}))));
    }
  // }
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
