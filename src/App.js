import './App.css';
import About from './components/about/About';
import Apps from './components/apps/Apps';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Apps />
      <Footer />
    </div>
  );
}

export default App;
