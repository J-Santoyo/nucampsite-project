import Header from './components/Header';
import './App.css';
// import CampsiteCard from './features/campsites/CampsiteCard.js';
// import { CAMPSITES } from './app/shared/CAMPSITES';
import CampsitesList from './features/campsites/CampsitesList.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo' />
          </NavbarBrand>
        </Container>
      </Navbar> */}
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
