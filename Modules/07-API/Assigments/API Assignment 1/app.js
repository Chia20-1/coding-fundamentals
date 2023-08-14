// Build a Random Quote Generator by clicking a button
// Finished HTML and CSS
// Declare variables
// Get data from API
// Apply async and await
// Save fetch() into response. Make it into JSON. After communicating with API, translate it to understandbale manner which is JSON.
// Save the response.json into data
// See from console.log(data) on the data I need to derive; then specify it
// after getting he content, print it into HTML.
// Click event listener to execute the funciton.


const quoteText = document.querySelector("#quote-text")
const quoteAuthor = document.querySelector("#quote-author")
const quoteButton = document.querySelector("#quote-button")

const API_URL = "https://api.quotable.io/random"

async function getQuoteAndAuthor() {
    const response = await fetch(API_URL)
    const data = await response.json()

    console.log("This is quote!", data.content)
    console.log("This is author!", data.author)

    quoteText.textContent = data.content
    quoteAuthor.textContent = data.author
}

quoteButton.addEventListener("click", getQuoteAndAuthor);