const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(apiUrl, (error, response, body) => {
  if (error) {
    console.log('Request error:', error); // Handle request errors
  } else if (response.statusCode !== 200) {
    console.log('Status code:', response.statusCode); // Handle non-200 status codes
  } else {
    // Parse the JSON response body into an object
    const data = JSON.parse(body);
    console.log(data); // Print the parsed data object
    console.log(typeof data); // Check the type of the parsed data

    // Check if data array is empty (breed not found)
    if (data.length === 0) {
      console.log('Breed not found');
    } else {
      // Access the description of the first entry in the data array
      const firstBreedDescription = data[0].description;
      console.log('Description:', firstBreedDescription); // Print the description
    }
  }
});
};

module.exports = { fetchBreedDescription };
