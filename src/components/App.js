// create your App component here
import React, { useState, useEffect } from "react";
const baseURL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />}
    </div>
  );
}

export default App;