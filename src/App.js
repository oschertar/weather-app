
import './App.css';
import Main from './pages/Main';
import MainDesktop from './pages/MainDesktop';


const isMobile = window.innerWidth <= 500;
function App() {
  return (
    <div className="App">
      {isMobile ? <Main /> : <MainDesktop />}
    </div>
  );
}

export default App;