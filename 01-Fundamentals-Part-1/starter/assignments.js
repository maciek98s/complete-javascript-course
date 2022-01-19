const country = "Ireland";
const continent = "Europe";
let population = 5000000;
const isIseland = true;
const language = "English";
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(
  "My country is " + country,
  " ,Its Located in " + continent,
  " and it has a population of " + population + " people"
);

console.log(typeof isIseland, population, country, language);

console.log("Half of the population is " + population / 2);

population++;
console.log(population);

console.log(
  "Does the country have more than 6 milion people " + (population > 6000000)
);

console.log(
  "Does the country have less than 33 million people " + (population < 33000000)
);

console.log(description);
