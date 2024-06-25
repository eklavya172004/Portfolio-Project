var aboutContents = document.getElementsByClassName("about-contents");
var aboutNav = document.getElementsByClassName("about-nav1");

function opentab(name){
    for(about of aboutNav){
        about.classList.remove("hover-1");
    }
    
    for(content of aboutContents){
        content.classList.remove("active-tabs");
    }
    event.currentTarget.classList.add("hover-1");
    document.getElementById(name).classList.add("active-tabs");
}
// SHOWING IMAGES
const menu = document.getElementById("sidemenu");

function show(){
    menu.style.right = "0";
}

function closemenu(){
    menu.style.right = "-175px";
}

// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwtbVS4HD6HgI5GlnP-qVT9G6GzpN7baoMQldzzccL47hOKxu04MFBSXXrbJAe0nWgZGg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank you! Your response has been recorded"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})