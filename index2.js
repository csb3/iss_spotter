const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
  
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const time = new Date(pass.risetime * 1000).toLocaleString('en-US', {timeZone: 'America/Denver'});
    console.log(`Next pass at ${time} (Mountain Standard Time) for ${pass.duration} seconds!`);
  }
};