$(document).ready(function() {  
    var $elements = $('.animation');

    var isMobileDeviceScreen = window.matchMedia("only screen and (max-width: 768px)").matches;
    if (isMobileDeviceScreen.matches) {
        $elements.removeClass('animation');
    }

    const   observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('viewed');
            }else {
                entry.target.classList.remove('viewed');
            }
        });
    });

    const elementTarget = document.querySelectorAll('.animation');
    elementTarget.forEach((el)=> observer.observe(el));
});
