let menulcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks =  document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>  {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.Attribute('id');
    
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.renove('active');
                document.querySelector('header nav a [href*=' + id +']').classList.add('active');
            })
        }
    })
}
menulcon.onclick = () => {
    menulcon.classList.toggle('bx-x');
    navbar.classList('active')
}