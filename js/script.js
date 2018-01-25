
// create a function named getRandomQuote which selects a random quote then return selected quote
function getRandomQuote() {
	randomQuote = Math.floor(Math.random() * quotes.length);
	return quotes[randomQuote];
}

// quotes automatically change after 30 seconds
window.setInterval(printQuote, 30000);

//  applies random background color when the printQuote function passes
function getRandomColor() {
    let red = Math.floor(Math.random() * 230 );
    let green = Math.floor(Math.random() * 230 );
    let blue = Math.floor(Math.random() * 230 );
    let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.body.style.background = rgbColor;
}

/* create a function named printQuote which:
/  calls the getRandomQuotes function and stores the selected quote object in a variable;
/  constructs a string containing different properties of the quote object;
/  print random quote to page
/ change background color onClick
*/
function printQuote() {
	let quote = getRandomQuote();
	let htmlPrint = '<p class="quote">' + quote.quote + '</p>';
        htmlPrint += '<p class="source">' + quote.source;
        
        // if/else statement to determine if 'citation' or 'year' or both are present in object
        if ( quote.citation !== undefined && quote.year !== undefined) {
            htmlPrint += '<span class="citation">' + quote.citation + '</span>';
            htmlPrint += '<span class="year">' + quote.year + '</span>';
        } else if (quote.citation !== undefined){
            htmlPrint += '<span class="citation">' + quote.citation + '</span>';
        } else if (quote.year !== undefined) {
            htmlPrint += '<span class="year">' + quote.year + '</span>';
        }
	htmlPrint += '</p>';
	htmlPrint += '<p class="tags">Tags: ' + quote.tags.join(', ') + '</p>';

    document.getElementById('quote-box').innerHTML = htmlPrint;

	return getRandomColor();
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
