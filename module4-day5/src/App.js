
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/HomeNavbar';
import HomeSubNav from './components/HomeSubNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <HomeNavbar />
      <MovieDetails />
     <Route path="/moviedetails/:id" exact component={MovieDetails} />
     <Route path="/home" exact component={HomeSubNav} />
    </Router>
    </div>
  );
}

export default App;
