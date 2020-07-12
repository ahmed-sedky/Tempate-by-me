var myDiv1 =document.getElementById('skills'),
    myDiv2 =document.getElementById('laptop'),
    myDiv3 =document.getElementById('About'),
    myDiv4 =document.getElementById('button');
    myDiv5 =document.getElementById('resume');
    window.onscroll = function () {
    "use strict";
        if (document.documentElement.scrollTop >= myDiv1.offsetTop -700 ) { //offsetTop returns the top position in pixels
            myDiv1.classList.add('flash');
        }
        if (document.documentElement.scrollTop >= myDiv2.offsetTop -100 ) { 
            myDiv2.classList.add('fadeInLeft');
        }
        if (document.documentElement.scrollTop >= myDiv3.offsetTop -100 ) { 
            myDiv3.classList.add('fadeInRight');
        } 
        if (document.documentElement.scrollTop >= myDiv4.offsetTop -550 ) { 
            myDiv4.classList.add('rubberBand');
        }
        if (document.documentElement.scrollTop >= myDiv5.offsetTop -550 ) { 
            myDiv5.classList.add('bounce');
        }
        
};
var myLoader = document.querySelector('.loader-wrapper');
//console.log(myLoader.parentElement);
window.addEventListener('load',function(){
    'use strict';
    myLoader.classList.add('loader-wrapper-finish');
});

