const toggleButton = document.getElementsByClassName('nav-wrap')[0];
const navbar = document.getElementsByClassName('nav-bar')[0];

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
})
