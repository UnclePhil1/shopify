const dropdownToggle = document.getElementById("dropdownButton");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuphoneToggle = document.getElementById("dropdownTogglemobile");
const dropdownMenuMobile = document.querySelector(".dropdownMenuMobile");
const toggleNotice = document.getElementById("toggleNotice");
const dropDownNotice = document.querySelector(".noticeBox-dropDown");

toggleNotice.addEventListener("click", () => {
  if (
    dropDownNotice.style.display === "" ||
    dropDownNotice.style.display === "none"
  ) {
    dropDownNotice.style.display = "block";
    dropdownMenu.style.display = "none";
    dropdownMenuMobile.style.display = "none";
    // Close dropdownMenu if open
  } else {
    dropDownNotice.style.display = "none";
  }
});

dropdownToggle.addEventListener("click", () => {
  if (
    dropdownMenu.style.display === "" ||
    dropdownMenu.style.display === "none"
  ) {
    dropdownMenu.style.display = "block";
    dropDownNotice.style.display = "none"; // Close dropDownNotice if open
  } else {
    dropdownMenu.style.display = "none";
  }
});

dropdownMenuphoneToggle.addEventListener("click", () => {
  if (
    dropdownMenuMobile.style.display === "" ||
    dropdownMenuMobile.style.display === "none"
  ) {
    dropdownMenuMobile.style.display = "block";
    dropDownNotice.style.display = "none"; // Close dropDownNotice if open
  } else {
    dropdownMenuMobile.style.display = "none";
  }
});

window.addEventListener("click", (event) => {
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

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
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

const containers = document.querySelectorAll(".imageContainer");

for (const container of containers) {
  const productImage = container.querySelector(".productImage");
  const spinnerImage = container.querySelector(".spinnerImage");
  const checkmarkImage = container.querySelector(".checkmarkImage");
  const accordionContent = container.parentElement.querySelector(".content");
  let isChecked = false; // Track the checked state of the image
  // let accordionIsOpen = accordionContent.style.maxHeight === "400px"; // Track the accordion's open state

  container.addEventListener("click", () => {
    if (!isChecked) {
      // If the image is not checked
      // Open the accordion and check the image
      productImage.style.opacity = 0;
      spinnerImage.style.opacity = 1;
      spinnerImage.style.display = "block";

      setTimeout(() => {
        spinnerImage.style.display = "none";
        checkmarkImage.style.opacity = 1;
        checkmarkImage.style.display = "block";
        isChecked = true; // Update the checked state
        accordionIsOpen = false; // Update the accordion's open state
      }, 1000);
    } else if (!accordionIsOpen) {
      // If the image is already checked and the accordion is closed
      // Uncheck the image without opening the accordion
      checkmarkImage.style.opacity = 0;
      checkmarkImage.style.display = "none";
      productImage.style.opacity = 1;
      isChecked = false; // Update the checked state
    } else {
      // If the image is already checked and the accordion is open
      // Uncheck the image and keep the accordion open
      checkmarkImage.style.opacity = 0;
      checkmarkImage.style.display = "none";
      productImage.style.opacity = 1;
      isChecked = false; // Update the checked state
    }
  });
}

const totalImageContainers =
  document.querySelectorAll(".imageContainer").length;
let checkedImageContainers = 0;
const progressBar = document.querySelector(".progress-bar");

function updateProgressBar() {
  const progressPercentage =
    (checkedImageContainers / totalImageContainers) * 100;
  progressBar.style.width = `${progressPercentage}%`;

  if (progressPercentage > 0) {
    progressBar.classList.add("active");
  } else {
    progressBar.classList.remove("active");
  }
}

document.querySelectorAll(".imageContainer").forEach((container) => {
  container.addEventListener("click", () => {
    if (container.classList.contains("checked")) {
      checkedImageContainers--;
      container.classList.remove("checked");
    } else {
      checkedImageContainers++;
      container.classList.add("checked");
    }

    updateProgressBar();
  });
});

const allSkeleton = document.querySelectorAll('.skeleton')

window.addEventListener('load', function () {
  allSkeleton.forEach(item => {
    item.classList.remove('skeleton')
  })
})