// שנה או הסר את הקוד לפי הצורך
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menu-toggle');
menuToggle && menuToggle.addEventListener('click', () => {
const nav = document.querySelector('.main-nav');
if(!nav) return;
nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
nav.style.flexDirection = 'column';
});