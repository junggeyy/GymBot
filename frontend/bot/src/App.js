import './App.css';
import LandingPage from "./components/LandingPage.jsx"; 
import Footer from "./components/Footer.jsx"
import SideBar from './components/SideBar.jsx';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main">
        <LandingPage />
      </div>  
      {/* <Footer /> */}
    </div>
  );
}

export default App;
