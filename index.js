document.addEventListener("DOMContentLoaded", function () {
    var count = 0;
  
    const respNav = () => {
      count = (count + 1) % 2;
      var navMenu = document.querySelector(`.navMain`);
      if (count == 1) {
        navMenu.style.transform = 'translateY(0)';
        navMenu.style.visibility = "visible";
        document.querySelector('.navBarIconBurger').style.visibility = 'hidden';
        document.querySelector('.navBarIconCross').style.visibility = 'visible';
      } else {
        navMenu.style.transform = 'translateY(-50vh)';
        navMenu.style.visibility = "hidden";
        document.querySelector('.navBarIconBurger').style.visibility = 'visible';
        document.querySelector('.navBarIconCross').style.visibility = 'hidden';
      }
    }
  
    const ShowTopVideo = () => {
      const topVideo = document.querySelector(".topVideo");
      topVideo.style.visibility = "visible";
    }
  
    const HideTopVideo = () => {
      const topVideo = document.querySelector(".topVideo");
      topVideo.style.visibility = "hidden";
    }
  
    const componentSlide = () => {
      var sectionId = window.location.hash.substring(1);
      if (sectionId) {
        var targetSection = document.getElementById(sectionId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'auto'
          });
        }
      }
    }
  
    setTimeout(() => {
      componentSlide();
    }, 150);
  
    document.querySelector('.navBurgerIcon').addEventListener('click', respNav);
    document.querySelector('.navBarIconCross').addEventListener('click', respNav);
    document.querySelector('.watchButton').addEventListener('click', ShowTopVideo);
  
  });
  