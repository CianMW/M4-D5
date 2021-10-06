import { Container, Row, Col } from "bootstrap";
import { Component } from "react";
import {Button, Spinner} from "react-bootstrap"
class Gallery3 extends Component {
  state = {
    results: [],
  };
  getFetch = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=2acb287b&s=star%20wars",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ results:data.Search });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  Number = () => {
    return (Math.floor(Math.random()*100))
  }
  componentDidMount = () => {
    this.getFetch();
  };
  render() {
    return (
      <>
        {this.state.results.length > 0
          ? this.state.results.map((show) => (
                <div key={show.imdbID + Number()} className="col ">
                  <img
                    src={show.Poster}
                    alt="movie image 0"
                    className="img-fluid rounded my-2"
                   style={{height: "80%", width: "80%"}}
                  />
                </div>
            ))
          : <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>}
      </>
    );
  }
}

export default Gallery3;
