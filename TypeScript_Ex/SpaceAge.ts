/* Given an age in seconds, calculate how old someone would be on:

Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.
 */


// Define the orbital periods of each planet in Earth years
const orbitalPeriods: { [key: string]: number } = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1.0,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
  };
  
  // Define the number of seconds in one Earth year
  const secondsInEarthYear = 31557600;
  
  // Function to calculate age on a given planet
  export function age(planet: string, seconds: number): number {
    // Check if the planet is valid
    if (!orbitalPeriods.hasOwnProperty(planet)) {
      throw new Error('Invalid planet');
    }
  
    // Convert seconds to Earth years
    const earthYears = seconds / secondsInEarthYear;
  
    // Calculate the age on the specified planet
    const planetYears = earthYears / orbitalPeriods[planet];
  
    // Return the age rounded to two decimal places
    return parseFloat(planetYears.toFixed(2));
  }
  
  // Examples of calling the function:
  console.log(age('earth', 1000000000)); // 31.69
  console.log(age('mercury', 2134835688)); // 280.88
  console.log(age('venus', 189839836)); // 9.78
  console.log(age('mars', 2329871239)); // 39.25
  console.log(age('jupiter', 901876382)); // 2.41
  console.log(age('saturn', 3000000000)); // 3.23
  console.log(age('uranus', 3210123456)); // 1.21
  console.log(age('neptune', 8210123456)); // 0.51
  