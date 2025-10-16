window.addEventListener('scroll', function() {
  const navbar = document.getElementById('main-navbar');
  if (window.scrollY > 50) { // Adjust '50' to your desired scroll threshold
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});