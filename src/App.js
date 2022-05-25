import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addevent from './Component/Addevent';
import Searchevent from './Component/Searchevent';

function App() {
  return (
    <div>
      <Addevent/>
      <Searchevent/>
    </div>
  );
}

export default App;
