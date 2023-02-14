const navbar = document.querySelector(".navbar");
const navbaroffset = navbar.offsetTop
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97,89,85,87,80,70,50];

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navbaroffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 5) {
            navbarLinks.forEach(navbarlink => {
                navbarlink.classList.remove('change')
            })
            navbarLinks[i].classList.add('change');
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
            document.querySelectorAll('.progress-percent').forEach((el, i) => {
                el.style.width = `${progressBarPercents[i]}%`;
                el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
            });
        }
});