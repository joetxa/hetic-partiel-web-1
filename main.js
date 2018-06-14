// MENU POUR MOBILE
var MenuBtn = document.querySelector('#mobile-menu');
var MenuState = false;

MenuBtn.addEventListener('click', ToggleMenu);

function ToggleMenu(){
    if(MenuState === false){
        document.querySelector('#mainav').style.display = "block";
        MenuState = true;
    } else {
        document.querySelector('#mainav').style.display = "";
        MenuState = false;
    }
}
