const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const href = link.getAttribute('href');

		// Scroll back to top
		if (href === '#') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
		// Scroll to other links
		if (href !== '#' && href.startsWith('#')) {
			const sectionElement = document.querySelector(href);
			sectionElement.scrollIntoView({ behavior: 'smooth' });
		}

		// Close mobile navigation
		if (link.classList.contains('nav-main__link')) {
			header.classList.toggle('nav-open');
		}
	});
});
