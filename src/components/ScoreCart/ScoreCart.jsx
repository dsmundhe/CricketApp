import React, { useState, useEffect } from 'react';
import './ScoreCart.css';

function ScoreCart() {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const apiKey = "cb468041-d800-4aae-956e-b7258c985041";
      const matchId = "0b12f428-98ab-4009-831d-493d325bc555"; // Match ID from your data
      const apiUrl = `https://api.cricapi.com/v1/match_scorecard?apikey=${apiKey}&id=${matchId}&offset=0`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMatchData(data.data);
        console.log(matchData)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
 
 
  return (
    <div className="scoreCart-container">
      {matchData ? (
        <>
          <h2>{matchData.name}</h2>
          <p><strong>Venue:</strong> {matchData.venue}</p>
          <p><strong>Status:</strong> {matchData.status}</p>
          <p><strong>Toss Winner:</strong> {matchData.tossWinner} ({matchData.tossChoice})</p>

          <div className="scoreCart-teams">
            {matchData.teams.map((team, index) => (
              <div key={index} className="team">
                <h3>{team}</h3>
                <p>{matchData.score[index]?.inning}: {matchData.score[index]?.r}/{matchData.score[index]?.w} ({matchData.score[index]?.o} overs)</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading match data...</p>
      )}
    </div>
  );
}

export default ScoreCart;
