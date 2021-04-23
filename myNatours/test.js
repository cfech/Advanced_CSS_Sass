let popup = document.getElementById("popup")
let navigation_toggle = document.getElementById('navi-toggle')
let navigation_link = document.querySelectorAll(".navigation__link")
console.log("navigation_link", navigation_link)

//add event to the popup parent to close if click on the background
const closePopup = (e) => {
    console.log("closed")
    let id = e.target.getAttribute('id');
    console.log("close -> id", id)
    let pathname = window.location.pathname
    console.log("close -> pathname", pathname)
    if(id === "popup"){
        window.location.replace(pathname +"#section-tours");
    }
    
}
popup.addEventListener("click", closePopup)




//add event listener to each nav element to close the navigation
const closeNavigation =() => {
    navigation_toggle.checked = false
}

navigation_link.forEach(function(element) {
    element.addEventListener("click",closeNavigation );
});

