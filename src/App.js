import './App.css';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Following from './components/pages/Following';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/following' element={<Following />} />
      </Routes>
    </div>
  );
}

export default App;
