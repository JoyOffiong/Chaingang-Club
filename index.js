const menuButton=document.querySelector('.nav-toggle');
const navigationMenu=document.querySelector('.mobile-links');
const closeButton=document.querySelector('.nav-toggle2');
const mainWrap = document.querySelector('.main-wrap')


menuButton.addEventListener('click', () => {
  
        menuButton.style.display='none'
        closeButton.style.display = 'block'
        navigationMenu.style.transform = 'translateX(0%)'
        mainWrap.style.overflow= 'hidden'
})
 
    closeButton.addEventListener('click', () => {
            closeButton.style.display='none'   
            menuButton.style.display = 'block' 
            navigationMenu.style.transform = 'translateX(100%)'

            
    })