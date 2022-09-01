const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('#fetchBreedDescription', () => {
  it('returns string description of a valid breed via callback', (done) => {
    fetchBreedDescription('siberian', (err, desc) => {
      // we expect no errors here
      assert.equal(err, null);

      // let's grab our expected description
      const expectDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare the actual returned descriptions
      assert.equal(expectDesc, desc.trim());

      done();
    })
  })
});