import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {
      asin: this.props.asin,
      comment: [],
      isLoading: true,
      isError: false,
  }

  getComments = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          asin,
        {
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQ5ODRiYjUzZDAwMTViMTllZDAiLCJpYXQiOjE2MzMzNTEzMzYsImV4cCI6MTYzNDU2MDkzNn0.foBYQppbMwHt27xv85g0bJnIlqqfTxEZYvCMtHGy918"  ,
          },
        }
      );
      let comments = await response.json();
      console.log("THE COMMENTS ARE NEXT")
      console.log( comments );
     await this.setState({ comment: comments, isLoading: false, isError: false });
      console.log("THIS IS A LOG OF THE STATE DIRECTLY AFTER SETSTATE")
      await console.log(this.state.comment)
    } catch (err) {
      console.log("error! with fetching comments");
      this.setState({...this.state, comment: null, isLoading: false, isError: true })
    }
  };
  
  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true
      });
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTUwNmRlY2RhMzE2MzAwMTVkNTEyM2YiLCJpYXQiOjE2MzI2NjA5NzIsImV4cCI6MTYzMzg3MDU3Mn0.vzSXzuRnbhUs7NjBPeeIiCBg6REuTwnoXE-R7Y-zU9Y"
            }
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false
          });
        } else {
          console.log("error");
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    }
  };

  render() {
    return (
       <>
       {this.state.comment.length > 1 ? console.log(this.state.comment) : console.log("the comments are empty")}
       {console.log("REEEEEEE "+ this.state.comment)}
      { this.state.comment.length < 1 && this.state.isLoading !== false ? <Row><p>No comments yet</p></Row> : this.state.comment.map((comment) => (<SingleComment comment={comment} key={comment._id} />)) }
      </>
    )
  }
}


export default CommentList;