// We initialize variables "open-button" , "close button", the "panel"
// The starting state is Panel is open. Make it close by default.
// Create Element Register
// Need a button of register to open
// Set event listerner to .close-button to close it
// Add animation slide-in and slide out to open and close

const regBtn = document.createElement("button");
const regNode = document.createTextNode("Register");
const wrapper = document.querySelector(".wrapper");
const regPanel = document.querySelector(".slide-over-container")
const body = document.body
const background = document.querySelector(".bg-backdrop")

regBtn.appendChild(regNode)
body.appendChild(regBtn)

const closeBtn = document.querySelector(".close-button")

// regPanel.classList.add("slide-in")
regPanel.classList.add("slide-out")
background.classList.add("slide-out")

regBtn.addEventListener("click", (event) => {
    console.log("Reg btn is clicked.")
    event.preventDefault()
    regPanel.classList.toggle("slide-in")
    background.classList.toggle("slide-in")
    regPanel.classList.toggle("slide-out")
    background.classList.toggle("slide-out")
})

closeBtn.addEventListener("click", (event) => {
    console.log("Reg btn is clicked.")
    event.preventDefault()
    regPanel.classList.toggle("slide-in")
    background.classList.toggle("slide-in")
    regPanel.classList.toggle("slide-out")
    background.classList.toggle("slide-out")
})