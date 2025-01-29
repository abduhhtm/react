import React, { useEffect, useState } from "react";
import axios from "axios";
export function CobaAxios() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get(
                "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
            )
            .then((response) => {
                setWeather(response.data.current_weather);
            })
            .catch((err) => {
                console.error("Error fetching weather data:", err);
                setError("Gagal mengambil data cuaca. Coba lagi nanti.");
            });
    }, []); 
    if (!weather && !error) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Cuaca di depok</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <p>Suhu: {weather.temperature}°C</p>
                    <p>Kecepatan Angin: {weather.windspeed} km/jam</p>
                </div>
            )}
        </div>
    );
}
