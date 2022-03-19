const mobileNavigationButton = document.querySelector(
	'.mobile-navigation-button',
);
const header = document.querySelector('.header');
const yearElement = document.querySelector('.year');

//mobileNavigationButton.classList.toggle('open')
mobileNavigationButton.addEventListener('click', () => {
	header.classList.toggle('nav-open');
});

yearElement.textContent = new Date().getFullYear();
yearElement.style.fontWeight = '600';

/* // Sticky Navigation
const sectionHeroElement = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		//console.log('ent :>> ', ent);
		if (!ent.isIntersecting) {
			document.body.classList.add('sticky');
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		//rootMargin: '-80px',
	},
);
observer.observe(sectionHeroElement);
 */