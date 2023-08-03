// When you click Alt + K on keybaord, the command palette will open.
// I have tested the if (event.altKey && event.key === "k") {} is working
// The display hidden and none isn't quite working for me

const palette = document.querySelector(".palette")
const fadeIn = document.querySelector(".fade-in")
const fadeOut = document.querySelector(".fade-out")

// palette.classList.add("fade-in")
// palette.classList.remove("fade-out")


document.addEventListener("keydown", (event) => {
    if (event.altKey && event.key === "k") {
        // console.log("Button is clicked.")
        palette.classList.toggle("fade-in")
        palette.classList.toggle("fade-out")
    }
})

