import { Container, Row, Col, Dropdown } from "react-bootstrap"
import Gallery1 from "./Gallery1"
import Gallery3 from "./Gallery3"
import Gallery2 from "./Gallery2"
import icon1 from '../assets/icons/text-file-6-48.png'
import  {Component} from "react"
import GallerySearch from "./GallerySearch"


class HomeSubNav extends Component {

    state = {
        search : ''
    }
    render() {
    return (
        <div>
  <div id="subNav">
    <div className="row sub-nav">
      <div className="col-2">
        <h3>TV Show</h3>
      </div>
      <div className="col-6">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle drpdwn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Genres
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
      </div>
      <div className="col-4">
        <div className=" text-right">
          <a href="#">
            <img src={icon1} height={30} alt="icon" />
          </a>
          <a href="#">
           <input type="text" placeholder="Search" value={this.state.search} onChange={event => this.setState({search: event.target.value})}></input> 
          </a>
        </div>
      </div>
    </div>
  </div>
   { this.state.search.length > 4 ?  
   <div className="container-fluid text-left mt-4 pl-lg-5">
   <h3 className="section-title text-white">Searching for : {this.state.search}</h3>
   <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 mb-4" style={{width:"100",flexWrap: "nowrap", overflowX: "hidden", whiteSpace: "pre-wrap",  }}>
   <GallerySearch search={this.state.search.toLowerCase()}/> 
 </Row> 
 </div> :
  <div className="container-fluid text-left mt-4 pl-lg-5">
    <h3 className="section-title text-white">Harry Potter</h3>
    <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 mb-4" style={{width:"100",flexWrap: "nowrap", overflowX: "hidden", whiteSpace: "pre-wrap",  }}>
    <Gallery2/>
  </Row> 
  </div> }


  <div className="container-fluid text-left mt-4 pl-lg-5">
    <h3 className="section-title text-white">Batman</h3>
    <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 mb-4" style={{width:"100",flexWrap: "nowrap", overflowX: "hidden", whiteSpace: "pre-wrap",  }}>
    <Gallery1/>
  </Row>
  </div>
  <div className="container-fluid text-left mt-4 pl-lg-5">
    <h3 className="section-title text-white">Star Wars</h3>
    <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 mb-4" style={{width:"100",flexWrap: "nowrap", overflowX: "hidden", whiteSpace: "pre-wrap",  }}>
    <Gallery3/>
  </Row>   
  </div>
</div>

    )}
}
    export default HomeSubNav