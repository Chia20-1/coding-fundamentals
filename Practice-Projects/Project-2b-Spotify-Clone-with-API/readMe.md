Task:

1. Your site must have: 
- a fixed navbar at the top.
- a fixed sidebar at the left.
- a gradient background colour.
- hover effects and animations.

2. Only need to clone the homepage.

Sidebar:
1. Sidebar has a black background colour.
2. Sidebar is positioned fixed from the left top.
3. Sidebar has a logo banner at the top, links in the middle, and a footer at the bottom.

Navbar:
1. Navbar has a black background colour.
    - Navbar is positioned fixed from the top.
    - Navbar contains the left and right sections.
    - Navbar left section contains left and right chevron icons.
    - Navbar right section contains the login, and sign up button.

Content:
1. The content contains sections.
2. Each section contains a title, a subtitle and cards.
3. Each card has an image, a title, and a subtitle.
4. When a card gets hovered, a play button pops out.

// Let's work on API implementation:

- Before we even start coding, we go into the official website to gain documentation.

- Then, we proceed to going through the GUI in getting the API_ENDPOINT and ACCESS TOKEN

- The documentation is your best friend

// Let's code

What's needed?
1. Authorize the user and get a token.
2. Store the token somewhere else.
3. Fetch the user's top tracks using the token.
4. Display the top tracks.
5. Fetch new releases using the token.
6. Display new releases.
7. Fetch featured playlists using the token.
8. Display featured playlists.

We start with writing Pseudocode:
- Essence is Fetch from the API and print it out to the user, in this case the webpage
- The flow is clear: 
    - api authorization 
    - using async function to fetch data 
    - save it as reponse and conver it to json and save the json data
    - display the data

Step 1: Wait for the page to be fully loaded
Step 2: Authorize & get the token
Step 3: Store the token in a variable.
Step 4: Start fetching the user's top items using the token.
Step 5: Display the user's top items.
Step 6: Start fetching the new releases using the token.
Step 7: Display new releases.
Step 8: Start fetching featured playlists using the token.
Step 9: Display featured playlists.

