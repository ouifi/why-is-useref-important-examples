
import { FileRefExample } from './components/FileRef';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FileRefExample/>
        {/* <FileRefExample/> */}
      </header>
    </div>
  );
}

export default App;
