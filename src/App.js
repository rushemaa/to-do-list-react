import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <ul id="to-do-list">
        <span className="ul"></span>
        <li className="btn-clear">
          <button type="button">Clear all completed</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
