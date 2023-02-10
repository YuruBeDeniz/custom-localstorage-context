
const App: React.FC = () => {
  return (
    <div className="App">
      <p>Value: 1000</p>
      <button onClick={() => console.log("click")}>Change state!</button>
    </div>
  );
}

export default App;
