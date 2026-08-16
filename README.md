# **Quote-Generator** 🌈
*A Random Quote Machine built with React.js & Docker*

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/CyberRain94/Quote-Generator?style=social)](https://github.com/CyberRain94/Quote-Generator/stargazers)
[![Docker Pulls](https://img.shields.io/badge/docker-pulls-green)](https://github.com/CyberRain94/Quote-Generator/pkgs/container/quote-generator)

**Live Demo**: [https://quote-generator.cyberrain94.com](https://quote-generator.cyberrain94.com)
**🚀 Deployed as**: [GitHub Packages Docker Container](https://github.com/CyberRain94/Quote-Generator/pkgs/container/quote-generator)

---

## **🎯 Features**
✅ **Random Quote Generation** – Fetches quotes from [Type.fit API](https://type.fit/api/quotes).
✅ **Dynamic Background Colors** – Changes per quote.
✅ **Twitter Integration** – Share quotes in one click.
✅ **Docker Support** – Easy deployment with containerization.
✅ **Minimalist UI** – Clean design with Bootstrap.

---

## **🛠 Setup & Installation**
### **Prerequisites**
- [Node.js](https://nodejs.org/) (v12+)
- [npm/yarn](https://yarnpkg.com/)
- [Docker](https://docs.docker.com/get-docker/) (for container deployment)

### **Local Setup**
1. Clone the repo:
   ```bash
   git clone https://github.com/CyberRain94/Quote-Generator.git
   cd Quote-Generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### **Docker Deployment**
Build and run the Docker container:
```bash
# Build the image
docker build -t quote-generator .

# Run the container
docker run -p 3000:3000 quote-generator
```
Access the app at [http://localhost:3000](http://localhost:3000).

---

## **💻 Technologies Used**
| **Tool**         | **Purpose**                          |
|------------------|--------------------------------------|
| React.js         | Frontend framework                   |
| Create React App | Project scaffolding                 |
| Docker           | Containerization                     |
| Type.fit API     | Quote dataset                        |
| FontAwesome      | Icons for Twitter button            |

---

## **🎨 How It Works**
### **Core Components**
1. **`useState` Hooks**:
   - `quotes`: Stores all fetched quotes (API response).
   - `randomQuote`: Tracks the currently displayed quote.
   - `color`: Manages dynamic background colors.

2. **`useEffect` for Data Fetching**:
   ```javascript
   useEffect(() => {
     async function getQuotes() {
       const response = await fetch(`https://type.fit/api/quotes`);
       const arrData = await response.json();
       setQuotes(arrData);
       setRandomQuote(arrData[Math.floor(Math.random() * arrData.length)]);
     }
     getQuotes();
   }, []); // Runs once
   ```

3. **Twitter Share Button**:
   - Pre-fills a tweet URL with the quote and author using `encodeURIComponent`.

4. **Random Color Generation**:
   - Picks a hex color from a predefined array on each quote change.

---

## **📁 Project Structure**
```
Quote-Generator/
├── public/          # Static assets (index.html)
├── src/
│   ├── components/   # Reusable components (e.g., QuoteDisplay.js)
│   ├── utils/        # Helper functions (fetchQuote.js)
│   ├── App.js        # Main logic
│   └── App.css       # Global styling
├── Dockerfile       # Container configuration
├── package.json     # Dependencies
└── README.md        # Project documentation
```

---

## **🔧 Customization**
### **1. Adding Your Own Quote API**
Replace the API endpoint in `useEffect`:
```javascript
useEffect(() => {
  async function getQuotes() {
    const response = await fetch(`YOUR_API_ENDPOINT_HERE`);
    const arrData = await response.json();
    setQuotes(arrData);
    setRandomQuote(arrData[0]); // Default to first quote
  }
  getQuotes();
}, []);
```

### **2. Custom Colors**
Edit the `colors` array in `getNewQuote`:
```javascript
const colors = ["#FF5733", "#33FF57", "#3357FF"]; // Add your colors
```

---

## **🚀 Deployment**
### **Deploy to GitHub Pages (Static Site)**
1. Build the app:
   ```bash
   npm run build
   ```
2. Push the `build/` folder to a GitHub repository with GitHub Pages enabled.

### **Deploy to Docker Hub**
```bash
# Tag and push the image
docker tag quote-generator ghcr.io/cyberrain94/quote-generator:v1.0
docker push ghcr.io/cyberrain94/quote-generator:v1.0
```

---

## **🤝 Contributing**
Contributions are welcome! Open an issue or submit a pull request.

### **Guidelines**
1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m "Add X feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a PR.

---

## **📜 License**
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## **🙌 Acknowledgments**
- [Type.fit API](https://type.fit/) – Free quotes dataset.
- [FontAwesome](https://fontawesome.com/) – Icons for social sharing.
- [Create React App](https://create-react-app.dev/) – Boilerplate setup.

---

## **💡 Ideas for Future Enhancements**
- Implement **local storage** to save favorite quotes.
- Support **user-uploaded quotes** via a form.
- Add a **quote history** feature.

---
**Want to contribute? Star the repo or open a PR!**
