// Get elements by their IDs and classes
const dropdownToggle = document.getElementById("dropdownButton");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuphoneToggle = document.getElementById("dropdownTogglemobile");
const dropdownMenuMobile = document.querySelector(".dropdownMenuMobile");
const toggleNotice = document.getElementById("toggleNotice");
const dropDownNotice = document.querySelector(".noticeBox-dropDown");

// EVENT LISTENER FOR toggleNotice BUTTON
toggleNotice.addEventListener("click", () => {
  // Toggle visibility of dropDownNotice and close other dropdowns
  if (
    dropDownNotice.style.display === "" ||
    dropDownNotice.style.display === "none"
  ) {
    dropDownNotice.style.display = "block";
    console.log(dropDownNotice);
    dropdownMenu.style.display = "none";
    dropdownMenuMobile.style.display = "none";
  } else {
    // Close dropDownNotice
    dropDownNotice.style.display = "none";
  }
});

// EVENT LISTENER FOR dropdownToggle BUTTON
dropdownToggle.addEventListener("click", () => {
  // Toggle visibility of dropdownMenu and close dropDownNotice if open
  if (
    dropdownMenu.style.display === "" ||
    dropdownMenu.style.display === "none"
  ) {
    dropdownMenu.style.display = "block";
    dropDownNotice.style.display = "none";
  } else {
    // Close dropdownMenu
    dropdownMenu.style.display = "none";
  }
});

// EVENT LISTENER FOR dropdownMenuphoneToggle BUTTON
dropdownMenuphoneToggle.addEventListener("click", () => {
  // Toggle visibility of dropdownMenuMobile and close dropDownNotice if open
  if (
    dropdownMenuMobile.style.display === "" ||
    dropdownMenuMobile.style.display === "none"
  ) {
    dropdownMenuMobile.style.display = "block";
    dropDownNotice.style.display = "none";
  } else {
    // Close dropdownMenuMobile
    dropdownMenuMobile.style.display = "none";
  }
});

// EVENT LISTENER TO CLOSE DROPDOWNS WHEN CLICKED OUTSIDE
window.addEventListener("click", (event) => {
  // Close all dropdowns if clicked outside
  if (
    !event.target.closest(".dropDown") &&
    !event.target.closest(".dropdown-menu") &&
    !event.target.closest(".dropdownMenuMobile") &&
    !event.target.closest(".noticeBox-dropDown") &&
    !event.target.closest(".profileBtn") &&
    !event.target.closest(".notifyButton")
  ) {
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
      // Toggle 'active' class and display of accordion content
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});

// PROCESS EACH IMAGE CONTAINER
const containers = document.querySelectorAll(".imageContainer");
const counter = document.getElementById("counter");
let checkedCount = 0;

containers.forEach((container) => {
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

  // Add/remove 'active' class based on progress
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

    // Update progress bar
    updateProgressBar();
  });
});

// Remove 'skeleton' class from all elements with class 'skeleton' on window load
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
      // Toggle 'active' class and display of accordion content
      accordionItems[index].classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : "400px";

      // Close other accordions
      accordionItems.forEach((item, i) => {
        if (i !== index) {
          item.classList.remove("active");
          item.querySelector(".content").style.maxHeight = null;
        }
      });
    });
  });
});

// Handle search
function handleSearch() {
  window.location.reload();
}

// Event listener for accordion key down
function handleAccordionKeyDown(event) {
  // Check if the pressed key is the "Enter" key (key code 13)
  if (event.key === "Enter") {
    // Trigger the accordion to open (you can add your logic here)
    toggleAccordion();
  }
}

// Toggle accordion
function toggleAccordion() {
  // Add your logic to open or close the accordion
  // For example, you can toggle a class on the accordion content
  const accordionContent = document.querySelector(".accordion-content");
  accordionContent.classList.toggle("open");
}

// Event listener for label key down
function handleLabelKeyDown(event) {
  // Check if the pressed key is the "Enter" key (key code 13)
  if (event.key === "Enter") {
    // Find the associated accordion content by extracting the number from the label's "for" attribute
    const labelFor = event.target.getAttribute("for");
    const accordionKeyContent = document.getElementById(
      `accordionContent${labelFor}`
    );

    // Trigger the accordion to open (you can add your logic here)
    toggleAccordion(accordionKeyContent);
  }
}

// Toggle accordion based on associated content
function toggleAccordion(accordionKeyContent) {
  // Add your logic to open or close the accordion
  // For example, you can toggle a class on the accordion content
  accordionKeyContent.classList.toggle("open");
  accordionContent.style.maxHeight = "400px";
}

// Hide monthly plan container
document.getElementById("handleHideSvg").addEventListener("click", function () {
  // Get the monthlyPlanContainer element
  var monthlyPlanContainer = document.querySelector(".monthlyPlanContainer");

  // Toggle the visibility of the container (you can use your CSS class or modify styles directly)
  if (monthlyPlanContainer.style.display !== "none") {
    monthlyPlanContainer.style.display = "none";
  } else {
    monthlyPlanContainer.style.display = "block";
  }
});

// Event listener for search input key down
document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === "Enter") {
      // Reload the page
      location.reload();
    }
  });
