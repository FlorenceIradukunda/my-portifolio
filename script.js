document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '62px';
    nav.style.right = '1rem';
    nav.style.background = 'rgba(2, 6, 23, 0.95)';
    nav.style.padding = '1rem';
    nav.style.border = '1px solid rgba(255,255,255,0.08)';
    nav.style.borderRadius = '0.8rem';
  });
}
