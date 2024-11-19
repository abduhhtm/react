

         // Gambar 1
function Greeting({ name, message }) {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>{message}</p>
            
        </div>
    );
}





// Gambar 2
function UserProfile({ username, age, location }) {
    return (
        <div>
            <h2>Username: {username}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>

        </div>
    );
}

function App() {
    const userInfo = {
        username: "johndoe",
        age: 25,
        location: "New York"
    };

    return (
        <div>
            <h1>User Profile</h1>
            <UserProfile {...userInfo} />


            <h1>Main Application</h1>
            <Greeting name="Alice" message="Welcome to React!" />

        </div>
    );
}

export default App;