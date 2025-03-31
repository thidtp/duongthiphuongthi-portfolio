import Header from './components/Header';
import HomePage from './pages/HomePage'
import './App.css'
import Protect from './Protect/Protect';

function App() {
  return (
    <div>
      <Protect />
      <Header />
      <HomePage />
    </div>
  );
}

export default App
