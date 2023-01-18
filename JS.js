window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        document.getElementById('go-to-top-button').style.display = "unset";
    } else {
        document.getElementById('go-to-top-button').style.display = "none";
    }
    console.log(window.scrollY);
});

function scrollToTop() {
    window.scrollTo(0, 0);
}