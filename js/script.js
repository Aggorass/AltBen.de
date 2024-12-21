document.addEventListener('DOMContentLoaded', () => {
  fetch('includes/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      const menuToggle = document.querySelector('.menu-toggle');
      const navUl = document.querySelector('nav ul');

      menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
      });
    });

  fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});
