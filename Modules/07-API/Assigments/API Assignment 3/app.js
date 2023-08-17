// Name our variables

const button = document.querySelector("#fetch__button")
const display = document.querySelector("#data__wrapper")
const nameText = document.querySelector("#name__text")
const ageText = document.querySelector("#age__text")
const hobbiesList = document.querySelector("#hobbies__list")

const ENDPOINT = "https://gist.githubusercontent.com/Chia20-1/ffedecc5d5a9bf24b9f3657b9416f839/raw/900e7a723ab9b76e47c1c37dbb6d4646620bd425/me.json"

// Let's fetch the data first

async function fetchData() {
    try {
        const response = await fetch(ENDPOINT)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log("Error has occured", error)
    }
}

// fetchData()

function displayData(data) {
    nameText.textContent = data.name
    ageText.textContent = data.age
    data.hobbies.forEach((hobby) => {
        const item = document.createElement("li")
        const text = document.createTextNode(hobby)
        item.appendChild(text)
        hobbiesList.appendChild(item)
    })
}

button.addEventListener("click", async () => {
    if (display.classList.contains("hide")) {
        const data = await fetchData()
        console.log("button log", data)
        displayData(data)
        display.classList.toggle("hide")
    } else {
        return
    }
})
