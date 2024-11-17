// DOM elements
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

// API Key and URL
const apiKey = '5yKl5EI71OgnNIE7DG2Mk1ooOnR7GRnxfGqUjIeT'; // Replace with your API key
const apiUrl = "https://api.api-ninjas.com/v1/quotes";

// Function to fetch a new quote
async function fetchQuote() {
  // Show loading state
  quoteText.textContent = "Fetching a new quote...";
  quoteAuthor.textContent = "";

  try {
    // Fetch the quote from the API
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    // Handle API response
    const data = await response.json();
    const quote = data[0]; // Get the first quote from the response
    quoteText.textContent = quote.quote;
    quoteAuthor.textContent = `- ${quote.author}`;
  } catch (error) {
    // Handle errors
    console.error("Error fetching the quote:", error);
    quoteText.textContent = "Sorry, we couldn't fetch a quote at the moment.";
    quoteAuthor.textContent = "";
  }
}

// Add event listener to button
newQuoteBtn.addEventListener("click", fetchQuote);

// Fetch the first quote on page load
fetchQuote();

