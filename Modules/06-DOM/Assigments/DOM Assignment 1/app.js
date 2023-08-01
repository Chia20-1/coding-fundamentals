// Task is build a notification pop-up
// Show the notifcation when press add
// When it's already added, don't run but let user know you have bought  the item
// Press X  to close the notification
// target class add_button and cta_button
// change the state of notification
// Adding class and remove class
// Notification class is to hide it away
// Show class to make it appear

const addBtn = document.querySelector(".add__button")
const notification = document.querySelector(".notification")
const closeBtn = document.querySelector(".icon__close")

addBtn.addEventListener("click", ()=>{
    if(!notification.classList.contains("show")){
        console.log("It ran.")
        notification.classList.add("show");
    } else {
        return alert("You have already bought the item.");
    }
})

closeBtn.addEventListener("click", ()=>{
    if(!notification.classList.contains("hidden")){
        return;
    }

    notification.classList.remove("show");
    notification.classList.add("hidden");
})