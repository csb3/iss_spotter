const { nextISSTimesForMyLocation } = require('./iss');
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const time = new Date(pass.risetime * 1000).toLocaleString('en-US', {timeZone: 'America/Denver'});
    console.log(`Next pass at ${time} (Mountain Standard Time) for ${pass.duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
