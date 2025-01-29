import { use, useEffect } from "react";
import { useState } from "react";
export function Skaye(){
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("Efek dijalankan!");
    });
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#213555",
            fontFamily: "'Arial', sans-serif",
            color: "#333",
        },
        card: {
            backgroundColor: "#fff",
            padding: "20px 40px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
        },
        countText: {
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
        },
        button: {
            padding: "10px 20px",
            backgroundColor: "#3E5879",
            color: "#D8C4B6",
            border: "none", 
            borderRadius: "4px",
            cursor: "pointer",
        },
        buttonHover: {
            backgroundColor: "#F5EFE7",
        },
    };
    return (
        <div style={styles.container}> 
            <div style={styles.card}> 
                <h1 style={styles.countText}>Count: {count}</h1> 
                <button style={styles.button} onClick={() => setCount(count + 1)}> 
                    Tambah
                </button>
            </div>
        </div>
    );
}