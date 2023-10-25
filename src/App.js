
import './App.css';
import './styles/Navbar.css'
import Navbar from './components/Navbar';
import InicioPage from './pages/Inicio';

function App() {
  return (
    <div className="main">
      <Navbar />
      <InicioPage />
    </div>
  );
}

export default App;
