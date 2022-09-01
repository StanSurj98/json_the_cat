
// Import request module
const request = require('request');
// Since we're only requesting from the cat api i will make a variable for the url
const catAPI = "https://api.thecatapi.com/v1/breeds/search?q=";



const fetchBreedDescription = (breed, cb) => {
  request(catAPI + breed, (error, response, body) => {
    if (error) {
      return cb(error); // cb with error if present
    } else if (error === null) {
      console.log(`Response: ${response && response.statusCode}\n`); // logs status and new line
      
      // If there is no error and we get here => parse the data first
      const data = JSON.parse(body);
      if (data.length === 0) {
        return cb(null, 'The breed you\'re looking for doesn\' exist.'); // if data empty...
      } else {
        return cb(null, data[0]["description"]) // do cb with the description
      }
      // *** REMEMBER ***
      // In index.js our callback(ARG ONE, ARG TWO), so we have to fill it here if we're returned error as null
      // WE CANNOT just say cb(body) or else it will count body as the "error" parameter but obviously we're just logging it, so we just get a log of the body
      // MUST look like this=> return cb(null, body); 
    }
  });
};

module.exports = {
  fetchBreedDescription, // remember, this func is an object => must import as object
};