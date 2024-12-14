import React, { useState, useEffect } from 'react';

const SeasonsList = ({ onSelectSeason }) => {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5555/seasons')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch seasons');
        }
        return response.json();
      })
      .then(data => {
        setSeasons(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading seasons...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Stranger Things Seasons</h1>
      <ul>
        {seasons.map(season => (
          <li key={season.id} onClick={() => onSelectSeason(season.id)}>
            Season {season.number} ({season.episodeOrder} episodes)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonsList;
