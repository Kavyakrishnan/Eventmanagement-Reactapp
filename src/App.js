import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addevent from './Component/Addevent';
import Searchevent from './Component/Searchevent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Component/View';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/"exact element={<Addevent/>}/>
       <Route path="/search"exact element={<Searchevent/>}/>
       <Route path="/view"exact element={<View/>}/>

       </Routes></BrowserRouter>
    </div>
  );
}

export default App;
