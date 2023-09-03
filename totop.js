
/*To top button*/
const toTopButton = document.getElementById("to-top-btn");
window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.scrollY > 600) { 
        toTopButton.classList.add("show"); // show button
    }
    else {
        toTopButton.classList.remove("show"); // hide button
    }
}

toTopButton.addEventListener("click", function(){
    window.scrollTo(0,0); // scroll back to the top
})
// End of scroll to top button