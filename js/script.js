// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote   : "Stay hungry, stay foolish.",
        source  : "Steve Jobs",
        citation: "Stanford Commencement Speech",
        year    : "2005"
    },
    {
        quote   : "It always seems impossible until it's done.",
        source  : "Nelson Mandela"
    },
    {
        quote   : "Life is 10% what happens to you and 90% how you react to it.",
        source  : "Charles R. Swindoll"
    },
    {
        quote   : "First they ignore you, then they laugh at you, then they fight you, then you win.",
        source  : "Mahatma Gandhi"
    },
    {
        quote   : "Walking with a friend in the dark is better than walking alone in the light.",
        source  : "Helen Keller"
    },
    {
        quote   : "Great men are not born great, they grow great.",
        source  : "Mario Puzo"
    },
    {
        quote   : "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        source  : "Bill Gates"
    },
    {
        quote   : "When something is important enough, you do it even if the odds are not in your favour.",
        source  : "Elon Musk"
    },
    {
        quote   : "The most dangerous phrase in the language is we've always done.",
        source  : "Grace Hopper"
    },
    {
        quote   : "You only live once, but if you do it right, once is enough.",
        source  : "Mae West"
    }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(inputArray){
    var randomNum = Math.floor(Math.random() * inputArray.length);
    return inputArray[randomNum];
}


// Create the printQuote funtion and name it printQuote
function printQuote(){

    // Assigning the random generated quote to a variable
    var resultQuote = getRandomQuote(quotes);
    var html = "";

    // modifying the inner HTML of the viewed quote
    html += '<p class="quote">' + resultQuote.quote + '</p>';
    html += '<p class="source">'+ resultQuote.source;

    // Checking for the existence of a citation and a year
    if (resultQuote.citation){
        html += '<span class="citation">' + resultQuote.citation + '</span>';
    }
    if (resultQuote.year){
        html += '<span class="citation">' + resultQuote.year + '</span>';
    }
    html += '</p>';

    var pastQuote = document.getElementById("quote-box");
    pastQuote.innerHTML = html;

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
