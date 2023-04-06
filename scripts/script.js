document.addEventListener("DOMContentLoaded", function() {
    const menuSmall = document.getElementById('headerMenu')
  
    const addMenuHandler =() =>{
        menuSmall.addEventListener('click', addActiveClass)
    } 
  
   function addActiveClass() {
    const menuSmall = document.querySelector('.header__menu_small')
    const nav = document.querySelector('.header__nav')
    const header = document.querySelector('.header')
    
    menuSmall.classList.toggle('active')
    nav.classList.toggle('active')
   }
  
    addMenuHandler()
  });