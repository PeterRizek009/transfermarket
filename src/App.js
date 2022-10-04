import './App.css';
import Main from './components/main/main.jsx';
import Searchsaved from './components/searches/searchsaved';
import About from './components/about/about';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main/>
      <Routes>
      <Route path="/main" element={<Main />} />
       <Route path="/about" element={<About />} />
       <Route path="/searchSaved" element={<Searchsaved />} />
      </Routes>
      
    </div>
  );
}

export default App;
