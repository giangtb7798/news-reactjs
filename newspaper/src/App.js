import './App.css';
import HeaderT from './components/Header';
import Routes from './Router';
import Footer from './components/Header/Footer';
import SignIn from './components/SignIn';
function App() {
  return (
    <div className="App">
    <HeaderT />
    <Routes />
    <Footer />
    </div>
  );
}

export default App;
