// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙 Dark Mode';
toggleBtn.id = 'darkModeToggle';
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.zIndex = '1000';
document.body.appendChild(toggleBtn);

toggleBtn.onclick = () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
};

// Scroll-to-top button
const topBtn = document.createElement('button');
topBtn.textContent = '↑ Top';
topBtn.id = 'scrollTopBtn';
topBtn.style.position = 'fixed';
topBtn.style.bottom = '30px';
topBtn.style.right = '30px';
topBtn.style.display = 'none';
topBtn.style.zIndex = '1000';
document.body.appendChild(topBtn);

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
// ...existing code...

// Animate project cards on scroll into view
const projectCards = document.querySelectorAll('.project');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);
projectCards.forEach(card => observer.observe(card));