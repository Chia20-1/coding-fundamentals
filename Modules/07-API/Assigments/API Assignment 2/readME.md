Build a search form using GitHub Rest API:
- Input text
- Get User Button
- Div for display: Create an empty one like a template
1. Image : "avatar_url"
2. Name: "login"
3. Bio: "bio"
4. Joined at: created_at [2020-04-19T20:43:23Z] Convert this to 19 April 2020

API: https://docs.github.com/en/rest/users/users#get-a-user
"https://api.github.com/users/"

Javascript Pseudocode:
1. Declare variable
2. fetch data
3. Apply async and await // .try .then .catch
4. Console.log the data format to see how the array look like // Roadblock 1
 - Can be solved by going to the API ENDPOINT link directly to see the array strucutre
5. How to search based on input text?
 - Use template literals
 - Use search.input  
6. Output the data (Done)
7. Print out the data in an adjusted manner // Roadblock: 2


Additional Learning to reinforce this knowledge:
https://www.youtube.com/watch?v=TlP5WIxVirU&t=304s&ab_channel=WebDevSimplified

List down my gap:
1. Not really familiar with .then
.then(response => response.json())
.then(data => {console.log(data)})
.catch(error => {console.error("There was a problem:", error)})

2. What da heck is Promise.resolve(value)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

3. Javascript holes in knowledge: Adjusting date. Revisit and familiarize it

4. const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

5. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

6. I want to add or remove class list based on search