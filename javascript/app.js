// Get elements by their IDs and classes
const dropdownToggle = document.getElementById("dropdownButton");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuphoneToggle = document.getElementById("dropdownTogglemobile");
const dropdownMenuMobile = document.querySelector(".dropdownMenuMobile");
const toggleNotice = document.getElementById("toggleNotice");
const dropDownNotice = document.querySelector(".noticeBox-dropDown");

// EVENT LISTENER FOR toggleNotice BUTTON
toggleNotice.addEventListener("click", () => {
  if (
    dropDownNotice.style.display === "" ||
    dropDownNotice.style.display === "none"
  ) {
    // OPEN dropDownNotice AND CLOSE OTHER DROPDOWNS
    dropDownNotice.style.display = "block";
    dropdownMenu.style.display = "none";
    dropdownMenuMobile.style.display = "none";
  } else {
    // CLOSE dropDownNotice
    dropDownNotice.style.display = "none";
  }
});

// EVENT LISTENER FOR dropdownToggle BUTTON
dropdownToggle.addEventListener("click", () => {
  if (
    dropdownMenu.style.display === "" ||
    dropdownMenu.style.display === "none"
  ) {
    // OPEN dropdownMenu AND CLOSE dropDownNotice IF OPEN
    dropdownMenu.style.display = "block";
    dropDownNotice.style.display = "none";
  } else {
    // CLOSE dropdownMenu
    dropdownMenu.style.display = "none";
  }
});

// EVENT LISTENER FOR dropdownMenuphoneToggle BUTTON
dropdownMenuphoneToggle.addEventListener("click", () => {
  if (
    dropdownMenuMobile.style.display === "" ||
    dropdownMenuMobile.style.display === "none"
  ) {
    // OPEN dropdownMenuMobile AND CLOSE dropDownNotice IF OPEN
    dropdownMenuMobile.style.display = "block";
    dropDownNotice.style.display = "none";
  } else {
    // CLOSE dropdownMenuMobile
    dropdownMenuMobile.style.display = "none";
  }
});

// EVENT LISTENER TO CLOSE DROPDOWNS WHEN CLICKED OUTSIDE
window.addEventListener("click", (event) => {
  if (
    !event.target.closest(".dropDown") &&
    !event.target.closest(".dropdown-menu") &&
    !event.target.closest(".dropdownMenuMobile") &&
    !event.target.closest(".noticeBox-dropDown") &&
    !event.target.closest(".profileBtn") &&
    !event.target.closest(".notifyButton")
  ) {
    // CLOSE ALL DROPDOWNS
    dropdownMenu.style.display = "none";
    dropDownNotice.style.display = "none";
    dropdownMenuMobile.style.display = "none";
  }
});

// EVENT LISTENER FOR ACCORDION BUTTONS
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // TOGGLE 'active' CLASS AND DISPLAY OF ACCORDION CONTENT
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});

// PROCESS EACH IMAGE CONTAINER
const containers = document.querySelectorAll(".imageContainer");
const counter = document.getElementById("counter");
let checkedCount = 0;

containers.forEach(container => {
  const productImage = container.querySelector(".productImage");
  const spinnerImage = container.querySelector(".spinnerImage");
  const checkmarkImage = container.querySelector(".checkmarkImage");
  const accordionContent = container.parentElement.querySelector(".content");
  let isChecked = false;

  // EVENT LISTENER FOR CLICK ON IMAGE CONTAINER
  container.addEventListener("click", () => {
    if (!isChecked) {
      // IF THE IMAGE IS NOT CHECKED
      productImage.style.opacity = 0;
      spinnerImage.style.opacity = 1;
      spinnerImage.style.display = "block";

      setTimeout(() => {
        spinnerImage.style.display = "none";
        checkmarkImage.style.opacity = 1;
        checkmarkImage.style.display = "block";
        isChecked = true;

        // OPEN THE ACCORDION WHEN CHECKED
        accordionContent.style.maxHeight = "400px";

        // Update the counter
        checkedCount++;
        updateCounter();
      }, 1000);
    } else {
      // IF THE IMAGE IS ALREADY CHECKED
      checkmarkImage.style.opacity = 0;
      checkmarkImage.style.display = "none";
      productImage.style.opacity = 1;
      isChecked = false;

      // CLOSE THE ACCORDION WHEN UNCHECKED
      accordionContent.style.maxHeight = "0px";

      // Update the counter
      checkedCount--;
      updateCounter();
    }
  });
});

function updateCounter() {
  counter.textContent = `${checkedCount} / 5`;
}

// TRACK THE NUMBER OF CHECKED IMAGE CONTAINERS AND UPDATE PROGRESS BAR
const totalImageContainers =
  document.querySelectorAll(".imageContainer").length;
let checkedImageContainers = 0;
const progressBar = document.querySelector(".progress-bar");

// FUNCTION TO UPDATE PROGRESS BAR
function updateProgressBar() {
  const progressPercentage =
    (checkedImageContainers / totalImageContainers) * 100;
  progressBar.style.width = `${progressPercentage}%`;

  // ADD/REMOVE 'active' CLASS BASED ON PROGRESS
  if (progressPercentage > 0) {
    progressBar.classList.add("active");
  } else {
    progressBar.classList.remove("active");
  }
}

// EVENT LISTENER FOR CLICK ON IMAGE CONTAINER
document.querySelectorAll(".imageContainer").forEach((container) => {
  container.addEventListener("click", () => {
    if (container.classList.contains("checked")) {
      checkedImageContainers--;
      container.classList.remove("checked");
    } else {
      checkedImageContainers++;
      container.classList.add("checked");
    }

    // UPDATE PROGRESS BAR
    updateProgressBar();
  });
});

// REMOVE 'skeleton' CLASS FROM ALL ELEMENTS WITH CLASS 'skeleton' ON WINDOW LOAD
const allSkeleton = document.querySelectorAll(".skeleton");
window.addEventListener("load", function () {
  allSkeleton.forEach((item) => {
    item.classList.remove("skeleton");
  });
});

// EVENT LISTENER FOR ACCORDION BUTTONS IN #accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll("#accordion li label");
  const accordionItems = document.querySelectorAll("#accordion li");

  accordionButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // TOGGLE 'active' CLASS AND DISPLAY OF ACCORDION CONTENT
      accordionItems[index].classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : "400px";

      // CLOSE OTHER ACCORDIONS
      accordionItems.forEach((item, i) => {
        if (i !== index) {
          item.classList.remove("active");
          item.querySelector(".content").style.maxHeight = null;
        }
      });
    });
  });
});
