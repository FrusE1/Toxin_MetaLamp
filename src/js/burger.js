(function () {
	const burderItem = document.querySelector('.burger');
	const menu = document.querySelector('.menu__nav');
	const closeMenuItem = document.querySelector('.menu__nav-close');
	// const menuLinks = document.querySelectorAll('.menu__link');
	burderItem.addEventListener('click', () => {
		menu.classList.add('menu__nav_active');
	});
	closeMenuItem.addEventListener('click', () => {
		menu.classList.remove('menu__nav_active');
	});
	// if (window.innerWidth <= 610) {
	// 	for (let i = 0; i < menuLinks.length; i += 1) {
	// 		menuLinks[i].addEventListener('click', () => {
	// 			menu.classList.remove('menu__nav_active');
	// 		});
	// 	};
	// }
}());