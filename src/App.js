import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_ENVIRONMENT_PROD);
  console.log(process.env.REACT_APP_ENVIRONMENT_LOCAL);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App Demo is running in{" "}
          {process.env.NODE_ENV !== "production"
            ? process.env.REACT_APP_ENVIRONMENT_LOCAL
            : process.env.REACT_APP_ENVIRONMENT_PROD}{" "}
          with github actions self hosted
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
