const monMenu= document.querySelector(".mon-menu")
const navlinks = document.querySelector(".nav-bare")
monMenu.addEventListener('click',()=>{navlinks.classList.toggle('mobile-menu')})


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-bare ul li a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-bare').classList.remove('mobile-menu');
        });
    });
});

function sousMenu(element) {
    var menuContainer = element.querySelector('.menu-containere');
    var allMenuContainers = document.querySelectorAll('.menu-containere');
    allMenuContainers.forEach(function(container) {
        if (container !== menuContainer) {
            container.classList.remove('active');
        }
    });
    menuContainer.classList.toggle('active');
}

