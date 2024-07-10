/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/***
 * `quotes` array
***/


let quotes = [

  {quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    source: "Thomas A. Edison",
    tags: "motivation",
    citation: "unknown",
    year: "unknown"

  },

  {
    quote: "It’s possible to transcend anything that doesn’t kill you",
      source: "David Goggins",
      tags: "motivation",
      citation: "Can't Hurt Me",
      year: "2018"

  },

  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    tags: "motivation",
    citation: "Twitter",
    year: "2016"
            },

    {
    quote: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
      source: "Wayne Dyer",
      tags: "motivation",
      citation: "unknown",
      year: "unknown"

  },

    {
    quote: "It’s possible to transcend anything that doesn’t kill you",
      source: "David Goggins",
      tags: "motivation",
      citation: "Can't Hurt Me",
      year: "2018"

  },

    {
    quote: "You are one decision away from a completely different life.",
      source: "Mel Robbins",
      tags: "motivation",
      citation: "The 5 Second Rule",
      year: "2017"

  },

    {
    quote: "The nation will find it very hard to look up to the leaders who are keeping their ears to the ground.",
      source: "Sir Winston Churchill",
      tags: "politics",
      citation: "unknown",
      year: "unknown"
  },

      {
    quote: "Opportunities don't happen. You create them.",
      source: "Chris Grosser",
      tags: "business",
      citation: "unknown",
      year: "unknown"
  },
]


/***
 * `getRandomQuote` function
***/


function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
        }


/***
 * `printQuote` function
***/


function printQuote() {
    let randomQuote = getRandomQuote();
    let quoteBox = document.getElementById("quote-box");
    let html = `

        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        <span class="tags">${randomQuote.tags}</span>
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span></p>
    `;
    quoteBox.innerHTML = html;
}
printQuote();

/***
 * click event listener for the print quote button
 * generate random background color after clicking the quote button
***/

document.getElementById("load-quote").addEventListener("click", function() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    printQuote();
});

/***
 * generate an automatically updates at regular intervals
***/

function autoUpdate() {
    setInterval(function() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        printQuote();
    }, 5000);
}
autoUpdate();
