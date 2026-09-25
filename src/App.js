import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [color, setColor] = useState("#5dade2");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://dummyjson.com/quotes?limit=0");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data.quotes) || data.quotes.length === 0) {
          throw new Error("No quotes were returned.");
        }

        setQuotes(data.quotes);

        const randomIndex = Math.floor(Math.random() * data.quotes.length);

        setRandomQuote(data.quotes[randomIndex]);
      } catch (err) {
        console.error("Failed to fetch quotes:", err);

        setError(
          err instanceof Error ? err.message : "Failed to fetch quotes.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    getQuotes();
  }, []);

  const getNewQuote = () => {
    if (quotes.length === 0) {
      return;
    }

    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    const randomColorIndex = Math.floor(Math.random() * colors.length);

    setRandomQuote(quotes[randomQuoteIndex]);
    setColor(colors[randomColorIndex]);
  };

  const tweetText = randomQuote
    ? `"${randomQuote.quote}" — ${randomQuote.author}`
    : "";

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
      }}
    >
      <div id="App" className="container pt-5 jumbotron">
        <div id="quote-box" className="text-center card">
          <div className="card-body">
            <h1>Random Quote Machine</h1>

            {isLoading && <p>Loading quotes...</p>}

            {error && <p className="text-danger">Error: {error}</p>}

            {!isLoading && !error && randomQuote && (
              <>
                <p className="card-text" id="text">
                  <i className="fa fa-quote-left">{randomQuote.quote}</i>
                </p>

                <p id="author">— {randomQuote.author}</p>

                <button
                  id="new-quote"
                  onClick={getNewQuote}
                  className="btn btn-success ml-3"
                >
                  New Quote
                </button>

                <a
                  href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
                    tweetText,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  id="tweet-quote"
                  className="btn btn-warning ml-2"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      <footer className="text-center">
        Coded by:{" "}
        <a
          href="https://github.com/CyberRain94"
          target="_blank"
          rel="noreferrer"
        >
          CyberRain94
        </a>
      </footer>
    </div>
  );
}

export default App;
