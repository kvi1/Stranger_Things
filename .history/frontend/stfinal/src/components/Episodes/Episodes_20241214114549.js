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
      <Header />
      <div className="ep">
        <h1>Stranger Things Seasons</h1>

        {/* Table for Seasons */}
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Season</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Episodes</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {seasons.map(season => (
              <tr key={season.id}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>Season {season.number}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{season.episodeOrder}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <button
                    onClick={() => onSelectSeason(season.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    View Episodes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Embedded YouTube Trailer */}
      <div style={{ marginBottom: '20px', color: 'red' }} className="video">
        <h2>Watch the Stranger Things Trailer</h2>
        <div style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            src="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1&mute=1"
            title="Stranger Things Trailer"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SeasonsList;