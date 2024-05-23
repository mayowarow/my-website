


/*===============toggle icon navbar===========*/

let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('navbar');



menuIcon.onclick = () => {
    menuIcon.classList.toggle ('fa-xmark')
    navbar.classList.toggle ('active');

};




/*======================scroll sction active link ===============*/

let sections = document.querySelectorAll('section');
let NavLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach( sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
          NavLinks.forEach(links =>{
            links.classList.renove('active');
            document.querySelector('header nav a[href+-' + id +']').classList.add('active');
          });
        };
    }); 


    let header = document.querySelector('header');

    header.classList.toggle("sticky", wndow.scrollY > 100);


    /* ==============remove toggle and navbar when click navbar link (scroll)=-=========*/

    menuIcon.classList.remove ('fa-xmark')
    navbar.classList.remove ('active');
};



