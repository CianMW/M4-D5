import { Container, Row, Col } from "bootstrap";
import { Component } from "react";

class Gallery2 extends Component {
  state = {
    results: [],
  };
  getFetch = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=2acb287b&s=harry%20potter",
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
  componentDidMount = () => {
    this.getFetch();
  };
  render() {
    return (
      <>
        {this.state.results.length > 0
          ? this.state.results.map((show) => (
                <div className="col ">
                  <img
                    src={show.Poster}
                    alt="movie image 0"
                    className="img-fluid rounded my-2"
                   style={{height: "80%", width: "80%"}}
                  />
                </div>
            ))
          : 0}
      </>
    );
  }
}

export default Gallery2;
