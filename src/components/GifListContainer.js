import React, { useEffect, useState } from 'react';
import GifList from './GifList'; // Import GifList component
import GifSearch from './GifSearch'; // Import GifSearch component
import './App.css';



function GifListContainer() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

  useEffect(() => {
    // Function to fetch data based on the search term
    const fetchGifs = () => {
      fetch(`https://api.giphy.com/v1/stickers/search?api_key=KFMr7H75aH5nUQ8WU8QkSdFEa9ZqnH9T&q=juice&limit=25&offset=5&rating=g&lang=en&bundle=messaging_non_clips${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.slice(0, 3)); // Store the first 3 GIFs in the component state
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    fetchGifs(); // Fetch initial data
  }, [searchTerm]); // Include searchTerm as a dependency

  // Function to handle the search form submission
  const handleSearchSubmit = (searchTerm) => {
    setSearchTerm(searchTerm); // Update the search term state
  };

  return (
    <div className="centered-gif">
      <GifSearch onSubmit={handleSearchSubmit} /> {/* Render GifSearch and pass the submit handler */}
      <GifList data={data} /> {/* Render GifList and pass the data as a prop */}
    </div>
  );
}

export default GifListContainer;