// Task: Build a navigation bar
// When you scroll down the website, the navigation will be hidden
// Hovers when user at the top area of website.
// windows.scrollY to check scroll height
// mousemove event: track user's mouse movement
// scroll event: track scroll movement


// Select the header element

const header = document.querySelector(".header")
                
// Event listener: Mouse move                
// When user hovers around the top area, show the header                

document.addEventListener("mouseover", (event)=>{
    if(event.clientY < 100){
        console.log("The mouse is in the cage.")
        header.classList.remove("hidden");
    } else {
        header.classList.add("hidden")
    }
})

// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header

document.addEventListener("scroll", (event)=>{
    event.preventDefault()

    console.log(window.scrollY)

    if (window.scrollY > 20){
       header.classList.add("hidden")
    } else {
        header.classList.remove("hidden")
    }
})

