const quotes = [
    {
      text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      author:" Helen Keller"
    },
    {
      text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
      author: "Steve Jobs"
    },
    {
      text: "If you can dream it, you can do it.",
      author: "Walt Disney"
    },
    {
      text: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    }
  ];
  
  const quoteButton = document.getElementById('btn');
  const quoteText = document.getElementById('quote');
  const quoteAuthor = document.getElementById('author');
  
  quoteButton.addEventListener('click', generateRandomQuote);
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
  }
  

