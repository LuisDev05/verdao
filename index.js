let menulcon = document.querySelector('form');
let navbar = document.querySelector('.footer');
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
                links.classList.renove('action');
                document.querySelector('header nav a [href*=' + id +']').classList.add('action');
            })
        }
    })
}
menulcon.onclick = () => {
    menulcon.classList.toggle('bx-x');
    navbar.classList('active')
}