import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [colors, setColor] = useState(" #5dade2 ");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getQuotes = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/quotes");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No quotes were returned.");
        }

        setQuotes(data);

        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randomIndex]);
      } catch (err) {
        console.error("Failed to fetch quotes:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getQuotes();
  }, []);
  const getNewQuote = () => {
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
    let randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex]);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randColorIndex]);
  };
  return (
    <div style={{ backgroundColor: colors, minHeight: "100vh" }}>
      <div id="App" className="container pt-5 jumbotron">
        <div id="quote-box" className="text-center card">
          <div className="card-body">
            Random Quote Machine
            <p className="card-text" id="text">
              <i className="fa fa-quote-left">{randomQuote.text}</i>
            </p>
            <p id="author">{randomQuote.author}</p>
            <button
              id="new-quote"
              onClick={getNewQuote}
              className="btn btn-success ml-3"
            >
              New Quote
            </button>
            <a
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                encodeURIComponent(
                  '"' + randomQuote.text + '"' + randomQuote.author,
                )
              }
              target="_blank"
              id="tweet-quote"
              className="btn btn-warning"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center">
        coded by:
        <a href={"https://github.com/CyberRain94"} target="_blank">
          CyberRain94
        </a>
      </footer>
    </div>
  );
}
export default App;
