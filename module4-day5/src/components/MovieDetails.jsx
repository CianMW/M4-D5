import { Container, Row, Card, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import CommentList from "./CommentList";

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const idFromURL = match.params.Id;
  console.log(idFromURL);
  useEffect(() => {
    getFetch();
  }, []);

  const getFetch = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=2acb287b&i=" + idFromURL,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let data = await response.json();  
        console.log(data)
        setMovie( data);
      ;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
        { movie === null ? 
          <h1>404 - Could Not Find Movie In Database</h1>
         : <Row><Col md={6} style={{textAlign: "left" }}>
              <h3>{movie.Title}</h3>
              <img 
                src={movie.Poster}
                alt="movie image 0"
                className="img-fluid rounded my-2 justify-content-center"
                style={{ height: "80%", width: "100%" }}
              />
              <p>name</p>
              </Col>
              <Col md={6}>
                <CommentList asin={idFromURL}/>

              </Col>
          
        </Row>}
    </Container>
  );
};
export default MovieDetails;
