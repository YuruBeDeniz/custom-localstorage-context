import { useLocalStorage } from "./useLocalStorage";

const App: React.FC = () => {
  const [state, setState] = useLocalStorage('testls', 1000);
  //we set the key name as testls and 1000 as initial value
  //(but we can safely remove the initialValue after controlling the localstorage value)
  
  console.log("re-render") //to check if it's not stuck in an infinite loop

  return (
    <div className="App">
      <p>Value: 1000</p>
      <button onClick={() => setState(Math.floor(Math.random() * 10000))}>Change state!</button>
    </div>
  );
}

export default App;


