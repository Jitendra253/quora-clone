import './App.css';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Following from './components/pages/Following';
import Answer from './components/pages/Answer';
import { Routes, Route } from 'react-router-dom'
import MessageContainer from './components/otherComponents/MessageContainer';
import Spaces from './components/pages/Spaces';
import Notifications from './components/pages/Notifications';
function Not() {
  return (
    <h1>notificatin ot fou</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/following' element={<Following />} />
        <Route path='/answer' element={<Answer />} />
        <Route path='/spaces' element={<Spaces />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/notfound' element={<Not />} />
      </Routes>
      <MessageContainer />
    </div>
  );
}

export default App;
