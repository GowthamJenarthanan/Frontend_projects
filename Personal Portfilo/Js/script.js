let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

//dar mode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('fa-moon')){
    darkmode.classList.replace('fa-moon' , 'fa-sun');
    document.body.classList.add('active');
}
else {
    darkmode.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.remove('active');
}
}


window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
}

