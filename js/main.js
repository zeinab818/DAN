document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav.navbar');
    const links = nav.querySelectorAll('.nav-link');
    const brand = nav.querySelector('.navbar-brand');
    const togglerIcon = nav.querySelector('.navbar-toggler .fa-bars');
    const header = document.querySelector('#home'); 
    const headerHeight = header.offsetHeight;

    function updateNavbar() {
        const scrolledPastHeader = window.scrollY > headerHeight;
        if (scrolledPastHeader) {

            nav.style.backgroundColor = '#ffffff';
            nav.style.transition = 'background-color 0.3s ease';

            links.forEach(a => a.style.color = '#000000');
            brand.style.color = '#000000';
            nav.classList.add("scrolled");

            if (togglerIcon) togglerIcon.style.color = '#000000';
            }
            else {
                nav.style.backgroundColor = 'transparent';
                links.forEach(a => a.style.color = '#ffffff');
                brand.style.color = '#ffffff';
                nav.classList.remove("scrolled");
                if (togglerIcon) togglerIcon.style.color = '#ffffff';
                }
                
        }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar();
});