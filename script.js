const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', function() {
	navList.classList.toggle('toggle')
});
