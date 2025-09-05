// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Initialize Feather icons
feather.replace();

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
}); 

// Ensure even number of cards (or 1) for marked grids
(function enforceEvenCards() {
	const grids = document.querySelectorAll('[data-even-cards="true"]');
	grids.forEach(grid => {
		const cards = Array.from(grid.children).filter(node => node.nodeType === 1);
		if (cards.length > 1 && cards.length % 2 !== 0) {
			cards[cards.length - 1].classList.add('hidden');
		}
	});
})(); 