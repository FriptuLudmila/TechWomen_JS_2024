//references to various elements on the page
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote');
const twitterButton = document.getElementById('twitter-button');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
    loader.style.display = 'block';
    quoteContainer.style.display = 'none';
}

function removeLoadingSpinner() {
    if (loader.style.display === 'block') {
        quoteContainer.style.display = 'flex';
        loader.style.display = 'none';
    }
}

async function getQuote() {
    showLoadingSpinner();
    const apiUrl = 'https://api.quotable.io/random';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        quoteText.innerText = `"${data.content}"`; // Updates the quote text
        quoteAuthor.innerText = `- ${data.author || 'Unknown'}`; // Updates the author, defaulting to 'Unknown' if author is missing
        removeLoadingSpinner();
    } catch (error) {
        console.error('Failed to fetch the quote', error);
        getQuote(); // Try fetching another quote if there's an error
    }
}


newQuoteButton.addEventListener('click', getQuote);

function tweetQuote() {
    const quote = quoteText.innerText;
    const author = quoteAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} ${author}`;
    window.open(twitterUrl, '_blank');
}

twitterButton.addEventListener('click', tweetQuote);

// On load
getQuote();
