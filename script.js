// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll('nav a');

//     navLinks.forEach(function (link) {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             window.scrollTo({
//                 top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
