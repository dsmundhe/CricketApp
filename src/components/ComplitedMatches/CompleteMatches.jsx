import React, { useState, useEffect } from 'react';
import './CompleteMatch.css';

function CompleteMatches() {
    const [apidata, setapidata] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // Loading state for better UI feedback
    const [error, setError] = useState(null); // Error state to handle API errors

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

                // Check if data is in the expected format
                if (data && data.data && Array.isArray(data.data)) {
                    setapidata(data.data); // Update the state with the fetched data
                } else {
                    throw new Error('Unexpected API response format');
                }
            } catch (error) {
                console.error("Error fetching the API data:", error);
                setError(error.message); // Set error state
            } finally {
                setLoading(false); // Set loading to false once fetching is done
            }
        }

        getDataApi();
    }, []); // Empty dependency array to run only once on mount

    if (loading) {
        return <h3>Loading.......</h3>;
    }

    if (error) {
        return <h3>Error fetching data: {error}</h3>;
    }

    return (
        <div className="completeMatch">
            {apidata.length === 0 ? (
                <h3>No match data available</h3>
            ) : (
                <div className="matches-list">
                    {apidata.map((match) => (
                        <div key={match.id} className="match-card">
                            <h3>{match.name}</h3>
                            <p>Match Type: {match.matchType?.toUpperCase()}</p>
                            <p>Venue: {match.venue}</p>
                            <p>Teams: {match.teams?.join(' vs ')}</p>
                            <p>Date: {new Date(match.dateTimeGMT).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CompleteMatches;
