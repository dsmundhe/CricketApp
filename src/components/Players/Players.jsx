import React, { useState, useEffect } from 'react';
import './Players.css';

function Players() {
    const [apidata, setapidata] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // State for loading indication

    // Fetch data automatically on component mount
    useEffect(() => {
        async function getDataApi() {
            const apiKey = "cb468041-d800-4aae-956e-b7258c985041";
            const apiUrl = `https://api.cricapi.com/v1/players?apikey=${apiKey}&offset=0`;

            try {
                const response = await fetch(apiUrl);

                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Check if data.data exists and is an array
                if (Array.isArray(data.data)) {
                    setapidata(data.data);
                } else {
                    console.error('Invalid data format', data);
                }
            } catch (error) {
                console.error("Error fetching the API data:", error);
            } finally {
                setLoading(false); // Set loading to false once the data is fetched or an error occurs
            }
        }
        async function getDataApi(retries = 3) {
            const apiKey = "cb468041-d800-4aae-956e-b7258c985041";
            const apiUrl = `https://api.cricapi.com/v1/players?apikey=${apiKey}&offset=0`;

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    if (retries > 0) {
                        console.warn(`Retrying... attempts left: ${retries}`);
                        return await getDataApi(retries - 1);
                    }
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (Array.isArray(data.data)) {
                    setapidata(data.data);
                } else {
                    console.error('Invalid data format', data);
                }
            } catch (error) {
                console.error("Error fetching the API data:", error);
            } finally {
                setLoading(false);
            }
        }

        getDataApi();
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className='playerContainer'>
            <h2>Player List</h2>
            {
                loading ? (
                    <h3>Loading.......</h3>
                ) : apidata.length === 0 ? (
                    <h3>No players found.</h3>
                ) : (
                    <div className="players">
                        {apidata.map((player) => (
                            <div key={player.id} className="player-card">
                                <h3>{player.name}</h3>
                                <p>Country: {player.country}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default Players;
