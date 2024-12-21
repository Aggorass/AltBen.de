// Header & Footer dynamisch laden
window.addEventListener('DOMContentLoaded', () => {
    // Header
    fetch('includes/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });
  
    // Footer
    fetch('includes/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
  });
  