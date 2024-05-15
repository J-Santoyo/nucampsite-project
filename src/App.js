import Header from './components/Header';
import './App.css';
// import CampsiteCard from './features/campsites/CampsiteCard.js';
// import { CAMPSITES } from './app/shared/CAMPSITES';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
