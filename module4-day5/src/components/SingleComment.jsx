import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (id) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQ5ODRiYjUzZDAwMTViMTllZDAiLCJpYXQiOjE2MzMzNTEzMzYsImV4cCI6MTYzNDU2MDkzNn0.foBYQppbMwHt27xv85g0bJnIlqqfTxEZYvCMtHGy918"  ,
        }
      }
    );
    if (response.ok) {
      alert("comment deleted!");
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {console.log(comment)}
    {comment.comment}
    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      Del
    </Button>
  </ListGroup.Item>
);

export default SingleComment;