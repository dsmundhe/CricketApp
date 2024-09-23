import React, { useState, useEffect } from 'react';
import './CompleteMatch.css';

function CompleteMatches() {
    const [apidata, setapidata] = useState([]); // Initialize with an empty array

    // Fetch data automatically on component mount
    useEffect(() => {
        async function getDataApi() {
            const apiKey = "cb468041-d800-4aae-956e-b7258c985041";
            const apiUrl = `https://api.cricapi.com/v1/matches?apikey=${apiKey}&offset=0`;

            try {
                const response = await fetch(apiUrl);

                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();
                // Update the state with the fetched data
                setapidata(data.data);
                console.log(data.data);

            } catch (error) {
                console.error("Error fetching the API data:", error);
            }
        }

        getDataApi();
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className="completeMatch">
            {
                apidata.length === 0 ? (
                    <h3>Loading.......</h3>
                ) : (
                    <div className="matches-list">
                        {apidata.map((match) => (
                            <div key={match.id} className="match-card">
                                <h3>{match.name}</h3>
                                 <p>Match Type: {match.matchType.toUpperCase()}</p>
                                <p>Venue: {match.venue}</p>
                                <p>Teams: {match.teams.join(' vs ')}</p>
                                <p>Date: {new Date(match.dateTimeGMT).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default CompleteMatches;
