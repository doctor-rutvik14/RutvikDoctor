document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}
$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#bg-gradient-blue-to-purple').addClass('floatingNav');
    } else {
        $('#bg-gradient-blue-to-purple').removeClass('floatingNav');
    }
});