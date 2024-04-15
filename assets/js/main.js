// Sticky Header

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var header_wrapper = document.getElementById("myHeader-wrapper");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > 93) {
        header.classList.add("sticky-header");
        header_wrapper.style.height = "93px";
        
    } else {
        header.classList.remove("sticky-header");
        header_wrapper.style.height = "auto";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    myFunction();
});