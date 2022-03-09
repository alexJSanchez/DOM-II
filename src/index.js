import './less/index.less'

// Your code goes here!

//mouseover
document.querySelector(".logo-heading").addEventListener("mouseover", Event => {
    Event.target.style.color = "red"
});
//keydown
document.querySelector("body").addEventListener("keydown", Event => {
    if (Event.target.style.backgroundColor === "pink"){
        Event.target.style.backgroundColor = "white";
    }else{
    Event.target.style.backgroundColor = "pink";}
});

//wheel 
document.querySelector(".intro p").addEventListener("wheel", Event => {
    Event.target.style.fontSize = "10px";
});

//load
window.addEventListener("load", Event => {
   console.log("lets start coding!")
})

//focus
document.querySelector("body").addEventListener("scroll", Event => {
    document.querySelector("img-content").focus();
})

//resize
window.addEventListener('resize', Event => {
 console.log('please leave the size alone')
})

//scroll
window.addEventListener('scroll', Event => {
    console.log('scrolling on page')
})


