import React, { useState, useEffect } from 'react';
import Header from '../Header'; 
import './styles.css';

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
        <Header/>
        <div className = "ep">
      <h1>Stranger Things Seasons</h1>
      <ul>
        {seasons.map(season => (
          <li key={season.id} onClick={() => onSelectSeason(season.id)}>
            Season {season.number} ({season.episodeOrder} episodes)
          </li>
        ))}
      </ul>
      </div>
      <div style={{ marginBottom: '20px', color: 'red' }} className = "video">
          <h2>Watch the Stranger Things Trailer</h2>
          <div style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              src="https://www.youtube.com/embed/b9EkMc79ZSU"
              title="Stranger Things Trailer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '75%',
                border: NamedNodeMap,
              }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
    </div>
  );
};

export default SeasonsList;
