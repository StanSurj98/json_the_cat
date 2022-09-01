// Importing the function as an object using this style of importing
const { fetchBreedDescription } = require('./breedFetcher');
// Moved the CLI params here
const args = process.argv.slice(2);
const breedName = args[0];

//                    breed  , callback(error, body)
fetchBreedDescription(breedName, (error, description) => {
  // if there was an error, we would run the cb here with error as its args
  if (error) console.log(`${error}`);

  if (description) console.log(`Description: ${description}`);
});