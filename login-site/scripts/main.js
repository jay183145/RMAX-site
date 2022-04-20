//DOMContentloaded -> interactive
//to prevent any jQuery code from running before the document is finished loading
$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu */
    $toggleCollapse.on("click", function () {
        //This method toggles between adding/removing classes from the selected elements
        $nav.toggleClass("collapse");
    })
});

//click to scroll top

$('.move-up span').click(function(){
  $('html,body').animate({
      scrollTop:0
  },1000);  
})
