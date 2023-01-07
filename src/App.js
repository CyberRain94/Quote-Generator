import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [colors, setColor] = useState(" #5dade2 ");
  useEffect(() => {
    async function getQuotes() {
      const response = await fetch(`https://type.fit/api/quotes`);
      let arrData = await response.json();
      setQuotes(arrData);
      let randIndex = Math.floor(Math.random() * arrData.length);
      setRandomQuote(arrData[randIndex]);
    }
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
                  '"' + randomQuote.text + '"' + randomQuote.author
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
        Written and coded by:
        <a href={"https://codepen.io/cyberrain94"} target="_blank">
          CyberRain94
        </a>
      </footer>
    </div>
  );
}
export default App;
