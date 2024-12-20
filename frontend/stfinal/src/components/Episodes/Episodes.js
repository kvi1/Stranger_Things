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
          throw new Error('Failed');
        }
        return response.json();
      })
      .then(data => {
        setSeasons(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading){
    return <p>Loading seasons...</p>;
  }

  if(error){
    return <p>Error. Can't fetch</p>
  }

  return (
    <div>
      <Header />
      <div className="ep">
        <h1>Season Details</h1>
        <table style={{ width: '75%'}}>
          <thead>
            <tr style={{ backgroundColor: 'red', textAlign: 'center' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Season</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Episodes</th>
            </tr>
          </thead>
          <tbody>
            {seasons.map(season => (
              <tr key={season.id}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>Season {season.number}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{season.episodeOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: '20px', color: 'red' }} className="video">
        <h2>Watch the Stranger Things Trailer</h2>
        <div style={{ position: 'relative', paddingTop: '50%'}}>
          <iframe
            src="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1&mute=1"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '75%',
              border: 'none',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SeasonsList;
