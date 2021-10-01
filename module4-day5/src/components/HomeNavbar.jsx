import logo from '../assets/netflix_logo.png'
import kids from '../assets/kids_icon.png'
import avatar from '../assets/avatar.png'
import homecss from '../css/HomeNavbar.css'
import bell from '../assets/bell.png'
import {ArrowRight} from 'react-bootstrap-icons'

const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
  <a className="navbar-brand" href="#">
    <img src={logo} height={50} />
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link txt" href="#">
          Home <span className="sr-only" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link txt" href="#">
          TV Shows
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link txt" href="#">
          Movies
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link txt" href="#">
          Recently Added
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link txt" href="#">
          My List
        </a>
      </li>
    </ul>
    <form className="form-inline my-2 mr-5 my-lg-0">
      <a href="#">
        <ArrowRight/>
      </a>
      <a>
        <img src={kids} height={40} />
      </a>
      <a href="#">
        <img src={bell} height={20} />
      </a>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src={avatar} height={40} />
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    </form>
  </div>
</nav>

  );
};
export default HomeNavbar
