// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote   : "Stay hungry, stay foolish.",
        source  : "Steve Jobs",
        citation: "Stanford Commencement Speech",
        year    : "2005",
        category: "Business"
    },
    {
        quote   : "It always seems impossible until it's done.",
        source  : "Nelson Mandela",
        category: "Motivation"
    },
    {
        quote   : "Life is 10% what happens to you and 90% how you react to it.",
        source  : "Charles R. Swindoll",
        category: "Life Style"
    },
    {
        quote   : "First they ignore you, then they laugh at you, then they fight you, then you win.",
        source  : "Mahatma Gandhi",
        category: "Motivation"
    },
    {
        quote   : "Walking with a friend in the dark is better than walking alone in the light.",
        source  : "Helen Keller",
        category: "Life Style"
    },
    {
        quote   : "Great men are not born great, they grow great.",
        source  : "Mario Puzo",
        category: "Motivation"
    },
    {
        quote   : "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        source  : "Bill Gates",
        category: "Business"
    },
    {
        quote   : "When something is important enough, you do it even if the odds are not in your favour.",
        source  : "Elon Musk",
        category: "Motivation"
    },
    {
        quote   : "The most dangerous phrase in the language is we've always done.",
        source  : "Grace Hopper",
        category: "Life Style"
    },
    {
        quote   : "You only live once, but if you do it right, once is enough.",
        source  : "Mae West",
        category: "Motivation"
    }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(inputArray){
    var randomNum = Math.floor(Math.random() * inputArray.length);
    return inputArray[randomNum];
}

// A function that creates a random color to change the background of the web page
// and the button background
function randomColor(){
    var red, green, blue;
    var color = '';
    color += 'rgb(';
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    color += red + ', ' + green + ', ' + blue + ')';
    return color;
}

// Create the printQuote funtion and name it printQuote
function printQuote(){

    // Assigning the random generated quote to a variable
    var resultQuote = getRandomQuote(quotes);
    var html = "";

    // Adding category
    html += '<h3 class="category"> Category:  ' + resultQuote.category + '</h3>';

    // modifying the inner HTML of the viewed quote
    html += '<p class="quote">' + resultQuote.quote + '</p>';
    html += '<p class="source">'+ resultQuote.source;

    // Checking for the existence of a citation and a year
    if (resultQuote.citation){
        html += '<span class="citation">' + resultQuote.citation + '</span>';
    }
    if (resultQuote.year){
        html += '<span class="year">' + resultQuote.year + '</span>';
    }
    html += '</p>';

    var pastQuote = document.getElementById("quote-box");
    pastQuote.innerHTML = html;

    // Changing the background color of the body and the button
    var changeButton = document.getElementById('loadQuote');
    var bg = document.querySelector('body');
    var color = randomColor();
    bg.style.backgroundColor = color;
    changeButton.style.backgroundColor = color;
}


// Print a new quote with a different background color every 6 seconds
setInterval(printQuote, 6000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

