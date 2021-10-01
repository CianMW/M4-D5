
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/HomeNavbar';
import HomeSubNav from './components/HomeSubNav'
import HomeFooter from './components/HomeFooter'

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <HomeSubNav />
      <HomeFooter /> 

    </div>
  );
}

export default App;
