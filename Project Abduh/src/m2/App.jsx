

function App() {
  const title = "Coba JSX{}";
  const pargarph = 'Hello World'
  const judul ={
    pargarph: {
      backgroundColor: "green",
      color: "white"
    }
  }
  return (
    <>
    <img src="cobaReact.png" alt="cobaReact" />
      <h1 style={{color: "red"}}>{title}</h1>
      <p className="testing" style={judul.pargarph}>{pargarph}</p>
    </>
  )
}

export default App
