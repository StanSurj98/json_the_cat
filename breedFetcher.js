// First allow the CLI to add in parameters
const args = process.argv.slice(2);
// Import request module
const request = require('request');
// Since we're only requesting from the cat api i will make a variable for the url
const catAPI = "https://api.thecatapi.com/v1/breeds/search?q=";

request(catAPI + args[0], (error, response, body) => {
  if (error) return console.log(`${error}`); // Logs error if present
  console.log(`Response: ${response && response.statusCode}\n`); // logs status and new line

  // Gotta parse the body first before our logics
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`The breed name was not found.`);
  } else {
    console.log(data[0]["description"]);
  }
});
