import './App.css';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Following from './components/pages/Following';
import Answer from './components/pages/Answer';
import { Routes, Route } from 'react-router-dom'
import MessageContainer from './components/otherComponents/MessageContainer';
import Spaces from './components/pages/Spaces';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/following' element={<Following />} />
        <Route path='/answer' element={<Answer />} />
        <Route path='/spaces' element={<Spaces />} />
      </Routes>
      <MessageContainer />
    </div>
  );
}

export default App;
