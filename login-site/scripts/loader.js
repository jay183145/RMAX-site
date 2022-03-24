// let loaderWrapper = document.querySelector('.loader');

// window.addEventListener("load", function(){
//     //change css style to make loader disappear
//     //spinnerWrapper.style.display = "none";
//     //delete the element directly
//     loaderWrapper.parentElement.removeChild(loaderWrapper);
// });

$(window).on('load',function(){
    $('.loader').fadeOut(1000);
    $('.content').fadeIn(100);
});