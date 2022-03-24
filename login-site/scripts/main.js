//DOMContentloaded -> interactive
//to prevent any jQuery code from running before the document is finished loading
$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu */
    $toggleCollapse.on("click", function () {
        $nav.toggleClass("collapse");
    })
});