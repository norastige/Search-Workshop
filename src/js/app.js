const countries = [
  {
    name: "Norway",
    continent: "Europe",
    capital: "Oslo",
    population: 5400000,
    isLandlocked: false,
    flag: "🇳🇴",
  },
  {
    name: "Nepal",
    continent: "Asia",
    capital: "Kathmandu",
    population: 30030000,
    isLandlocked: true,
    flag: "🇳🇵",
  },
  {
    name: "Niger",
    continent: "Africa",
    capital: "Niamey",
    population: 25100000,
    isLandlocked: true,
    flag: "🇳🇪",
  },
  {
    name: "Netherlands",
    continent: "Europe",
    capital: "Amsterdam",
    population: 17400000,
    isLandlocked: false,
    flag: "🇳🇱",
  },
  {
    name: "South Korea",
    continent: "Asia",
    capital: "Seoul",
    population: 51780000,
    isLandlocked: false,
    flag: "🇰🇷",
  },
  {
    name: "South Africa",
    continent: "Africa",
    capital: "Pretoria",
    population: 60040000,
    isLandlocked: false,
    flag: "🇿🇦",
  },
  {
    name: "Sweden",
    continent: "Europe",
    capital: "Stockholm",
    population: 10400000,
    isLandlocked: false,
    flag: "🇸🇪",
  },
  {
    name: "Spain",
    continent: "Europe",
    capital: "Madrid",
    population: 47350000,
    isLandlocked: false,
    flag: "🇪🇸",
  },
  {
    name: "India",
    continent: "Asia",
    capital: "New Delhi",
    population: 1393000000,
    isLandlocked: false,
    flag: "🇮🇳",
  },
  {
    name: "Indonesia",
    continent: "Asia",
    capital: "Jakarta",
    population: 273500000,
    isLandlocked: false,
    flag: "🇮🇩",
  },
  {
    name: "Iceland",
    continent: "Europe",
    capital: "Reykjavik",
    population: 366000,
    isLandlocked: false,
    flag: "🇮🇸",
  },
  {
    name: "Iran",
    continent: "Asia",
    capital: "Tehran",
    population: 84900000,
    isLandlocked: false,
    flag: "🇮🇷",
  },
  {
    name: "Russia",
    continent: "Europe/Asia",
    capital: "Moscow",
    population: 145900000,
    isLandlocked: false,
    flag: "🇷🇺",
  },
  {
    name: "Romania",
    continent: "Europe",
    capital: "Bucharest",
    population: 19000000,
    isLandlocked: false,
    flag: "🇷🇴",
  },
  {
    name: "Portugal",
    continent: "Europe",
    capital: "Lisbon",
    population: 10200000,
    isLandlocked: false,
    flag: "🇵🇹",
  },
];

// Create a card for each country
const countriesContainer = document.querySelector(".countries");

// Select input field
const searchInput = document.querySelector(".search__input");

// Add DOM content loaded
document.addEventListener("DOMContentLoaded", () => renderCountries(countries)); // Event listener som gjør at informasjonen rendres

// --------------------------------------------------------------

// Render countries with function
function renderCountries(countriesArray) {
  countriesContainer.textContent = "";
  countriesArray.forEach((country) => {
    // Create countries based on input (country) it gets from an array

    const card = document.createElement("div"); // Create the elements we need
    card.classList.add("card"); // Add div class som heter card, finnes også i css

    const flagContainer = document.createElement("span"); // Create a span for the flag
    flagContainer.classList.add("flag-container"); // Add div class som heter flagContainer

    const descriptionContainer = document.createElement("span"); // Create a span for the card description
    descriptionContainer.classList.add("description-container"); // Create a class for the card description

    const countryName = document.createElement("p"); // Create p for country name
    const countryContinent = document.createElement("p"); // Create p for country continent
    const countryCapital = document.createElement("p"); // Create p for country capital
    const countryPopulation = document.createElement("p"); // Create p for country population
    const countryLandlocked = document.createElement("p"); // Create p for country landlocked

    // Append elements together
    countriesContainer.append(card); // Append the countries container to the card
    card.append(flagContainer, descriptionContainer); // Append the flag container and the description container to the card element
    descriptionContainer.append(
      // Appending description paragraphs to the container
      countryName,
      countryContinent,
      countryCapital,
      countryPopulation,
      countryLandlocked
    );

    // Inserting content in the containers
    flagContainer.textContent = country.flag; // Henter content fra country array. Bruker dot notation for å nå flag property inne i array objektet.
    countryName.textContent = `Name: ${country.name}`; // Fill out the descriptions.
    countryContinent.textContent = `Continent: ${country.continent}`;
    countryCapital.textContent = `Capitalt: ${country.capital}`;
    countryPopulation.textContent = `Population: ${country.population}`;
    countryLandlocked.textContent = `Landlock: ${
      country.isLandlocked ? "Yes" : "No" // Viser yes or no i stedet for true eller false
    }`;
  });
}

// Make search functionality
searchInput.addEventListener("input", (e) => {
  let filteredCountries = [...countries]; // Kopi av opprinnelig array som vi bruker til å filtrere
  filteredCountries = filteredCountries.filter((country) => {
    return country.name.toLowerCase().startsWith(e.target.value.toLowerCase()); // Innholdet skal endres avhengig av hva bruker skriver inn
  });

  console.log(filteredCountries);

  renderCountries(filteredCountries);
});
