const searchForm = document.querySelector("#search__form");
const searchButton = document.querySelector("#search__button");
const profileBox = document.querySelector("#profile__wrapper");
const profilePicture = document.querySelector("#profile__picture");
const profileName = document.querySelector("#profile__name");
const profileBio = document.querySelector("#profile__bio");
const profileJoined = document.querySelector("#profile__joined");

const API_URL = "https://api.github.com/users/"

searchButton.addEventListener("click", async (e) => {
    e.preventDefault()
    const searchInput = searchForm.querySelector('input').value;
    getUserData(searchInput);
})

// ✅ Checking my basic is right
async function getUserData(searchInput) {
    try {
        const response = await fetch(`${API_URL}${searchInput}`);
        console.log(response);

        if (response.ok) {
            // Cooking part. Based on my order - API LINK
            const data = await response.json();
            // Can have different format outside JSON. Thus, here's the packaging step in the anology.
            console.log(data)
            printData(data)
        } else {
            window.alert("Invalid Username Search!")
        }
    } catch (error) {
        console.log("There was a problem", error);
    }

}

// getUserData("yapyeeqiang")

function printData(data) {
    profileBox.classList.remove("hide")
    profilePicture.src = data.avatar_url
    profileName.textContent = data.login
    profileBio.textContent = data.bio
    

    const unfilteredDate = data.created_at
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const profileDate = new Date(unfilteredDate).toLocaleDateString("en-US", options)
    // const profileDay = profileDate.getDate()
    // const profileMonth = profileDate.getMonth()
    // const profileYear = profileDate.getFullYear()
    // console.log(profileDate)

    const dateArray = profileDate.split(" ");

    console.log(dateArray)

    const unadjustedDay = dateArray[1]
    const profileMonth = dateArray[0]
    const profileYear = dateArray[2]

    const dayHolder = unadjustedDay.split(",")
    const profileDay = dayHolder[0]

    // console.log("profileDay", profileDay)

    // console.log(unadjustedDay,profileMonth,profileYear)

    // Preparing the date variable
    profileJoined.textContent = `Joined at: ${profileDay} ${profileMonth} ${profileYear}`
}


// // ✅ Learning to use try and catch. ✅ Refining data output.
// async function getUserData() {
//     try {
//         const response = await fetch(`${API_URL}${searchInput}`);
//         console.log(response)


//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log(data)

//         printData(data)
//     } catch (error) {
//         console.log("There was a problem", error);
//     }
// }

// printData(data){
//     profilePicture.src = data.avatar_url
//     profileName.textContent = data.login
//     profileBio.textContent = data.bio
//     profileJoined.textContent = data.created_at
// }


// //  First step: new Date() object method
// let userDate = new Date("2020-04-19T20:43:23Z")
// // let year

// let year = userDate.getFullYear()

// console.log(userDate)
// console.log("year", year)