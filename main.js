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

// Scroll to Top

var timeOut;
  function scrollToTop(){
    if(document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
      window.scrollBy(0,-50);
      timeOut=setTimeout('scrollToTop()', 10);
    }
    else clearTimeout(timeOut)
  }
