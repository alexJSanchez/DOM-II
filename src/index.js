import './less/index.less'

// Your code goes here!

//mouseover
document.querySelector(".logo-heading").addEventListener("mouseover", Event => {
    Event.target.style.color = "pink"
});
//keydown

document.querySelector("body").addEventListener("keydown", Event => {
    if (Event.target.style.backgroundColor === "black"){
        Event.target.style.backgroundColor = "white";
    }else{
    Event.target.style.backgroundColor = "black";}
});