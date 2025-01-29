function WelcomeMessage({ IsloggedIn }) {
    return(
    <div>
      <h1>{IsloggedIn ? "Welome Back User" : "Please Log In to Continue"}</h1>
    </div>
  );
  }
  export default WelcomeMessage;