function classToggle() {
    const navs = document.querySelectorAll('.menu')
    
    navs.forEach(nav => nav.classList.toggle('show'));
  }
  
  document.querySelector('.toggle-items')
    .addEventListener('click', classToggle);