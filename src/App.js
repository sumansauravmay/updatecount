
import './App.css';
import Allroute from './components/Allroute';
import Navbar from './components/Navbar';
import Update from './components/Update';
import Value from './components/Value';

function App() {
  return (
    <div className="App">
      {/* <Update/>
      <Value/> */}
      <Navbar/>
      <Allroute/>
    </div>
  );
}

export default App;
