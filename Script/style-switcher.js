/**
 * /* =============================== toggler style switcher ===========================
 *
 * @format
 */

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
	document.querySelector('.style-switcher').classList.toggle('open');
});

// hide style switcher on scroll
window.addEventListener('scroll', () => {
	if (document.querySelector('.style-switcher').classList.contains('open')) {
		document.querySelector('.style-switcher').classList.remove('open');
	}
});
/* =============================== theme colors =========================== */
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
	alternateStyles.forEach((style) => {
		if (color === style.getAttribute('title')) {
			style.removeAttribute('disabled');
		} else {
			style.setAttribute('disabled', 'true');
		}
	});
}
/* =============================== theme light and dark mode =========================== */
const dayNight = document.querySelector('.day-night'),
	darkModeImg = document.querySelector('.home-img');
    // lightModeImg = document.querySelector('.light-mode-img');
dayNight.addEventListener('click', () => {
    darkModeImg.querySelector('.img-1').classList.toggle('block-img');
    darkModeImg.querySelector('.img-2').classList.toggle('block-img');
	dayNight.querySelector('i').classList.toggle('fa-sun');
	dayNight.querySelector('i').classList.toggle('fa-moon');
	document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
	if (document.body.classList.contains('dark')) {
		dayNight.querySelector('i').classList.add('fa-sun');
        darkModeImg.querySelector('.img-1').classList.add('block-img');
        
        
	} else {
		dayNight.querySelector('i').classList.add('fa-moon');
        darkModeImg.querySelector('.img-2').classList.add('block-img');
	}
});
