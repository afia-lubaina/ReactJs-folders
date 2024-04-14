import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [catFacts, setCatFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(null);

  useEffect(() => {
    const fetchCatFacts = async () => {
      try {
        const response = await Axios.get("https://catfact.ninja/facts");
        setCatFacts(response.data.data);
      } catch (error) {
        console.error("Error fetching cat facts:", error);
      }
    };

    fetchCatFacts();
  }, []);

  const handleClick = () => {
    // Select a random index
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setCurrentFactIndex(randomIndex);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Cat Fact</button>
      {currentFactIndex !== null && (
        <p>{catFacts[currentFactIndex].fact}</p>
      )}
    </div>
  );
}

export default App;