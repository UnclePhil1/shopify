const dropdownToggle = document.getElementById('dropdownButton');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownMenuphoneToggle = document.getElementById('dropdownTogglemobile');
const dropdownMenuMobile = document.querySelector('.dropdownMenuMobile');
const toggleNotice = document.getElementById('toggleNotice');
const dropDownNotice = document.querySelector('.noticeBox-dropDown');

toggleNotice.addEventListener('click', () => {
  if (dropDownNotice.style.display === '' || dropDownNotice.style.display === 'none') {
    dropDownNotice.style.display = 'block';
    dropdownMenu.style.display = 'none';
    dropdownMenuMobile.style.display = 'none';
     // Close dropdownMenu if open
  } else {
    dropDownNotice.style.display = 'none';
  }
});

dropdownToggle.addEventListener('click', () => {
  if (dropdownMenu.style.display === '' || dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
    dropDownNotice.style.display = 'none'; // Close dropDownNotice if open
  } else {
    dropdownMenu.style.display = 'none';
  }
});

dropdownMenuphoneToggle.addEventListener('click', () => {
  if (dropdownMenuMobile.style.display === '' || dropdownMenuMobile.style.display === 'none') {
    dropdownMenuMobile.style.display = 'block';
    dropDownNotice.style.display = 'none'; // Close dropDownNotice if open
  } else {
    dropdownMenuMobile.style.display = 'none';
  }
});

window.addEventListener('click', (event) => {
  if (
    !event.target.closest('.dropDown') &&
    !event.target.closest('.dropdown-menu') &&
    !event.target.closest('.dropdownMenuMobile') &&
    !event.target.closest('.noticeBox-dropDown') &&
    !event.target.closest('.profileBtn') &&
    !event.target.closest('.notifyButton')
  ) {
    dropdownMenu.style.display = 'none';
    dropDownNotice.style.display = 'none';
    dropdownMenuMobile.style.display = 'none';
  }
});
