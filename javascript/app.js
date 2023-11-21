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


const container = document.querySelector(".imageContainer");
const productImage = container.querySelector(".productImage");
const spinnerImage = container.querySelector(".spinnerImage");
const checkmarkImage = container.querySelector(".checkmarkImage");
let isChecked = false;

container.addEventListener("click", () => {
  isChecked = !isChecked; // Toggle the isChecked flag

  if (isChecked) {
    productImage.style.opacity = 0;
    spinnerImage.style.opacity = 1;
    spinnerImage.style.display = "block";

    setTimeout(() => {
      spinnerImage.style.display = "none";
      checkmarkImage.style.opacity = 1;
      checkmarkImage.style.display = "block";
    }, 1000);
  } else {
    checkmarkImage.style.opacity = 0;
    checkmarkImage.style.display = "none";
    productImage.style.opacity = 1;
  }
});
