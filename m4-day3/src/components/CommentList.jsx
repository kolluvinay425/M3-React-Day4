import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import AddComment from "./AddComment";
const CommentList = (props) => {
  // state = {
  //   newComment: {
  //     comment: "",
  //     rate: 1,
  //     elementId: this.props.elementId,
  //   },
  // };
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.elementId,
  });
  const sendComment = async (e) => {
    // let response = await fetch('https://striveschool-api.herokuapp.com/api/agenda/', {
    // method: 'POST',
    // body: JSON.stringify(myObject),
    // headers: new Headers({
    //     'Content-Type': 'application/json'
    // })
    // })
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.elementId,
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
          },
        }
      );

      if (response.ok) {
        alert("comment sent successfully");
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal.Dialog>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>comments</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {props.showComments.map((comment) => (
              <li key={comment.comment}>
                {comment.comment}--Rating:{comment.rate}
              </li>
            ))}
          </Modal.Body>

          <Modal.Footer>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter your comment"
                  value={newComment.comment}
                  onChange={(e) =>
                    setNewComment({
                      ...newComment,
                      comment: e.target.value,
                    })
                  }
                />
                <Form.Control
                  as="select"
                  value={newComment.rate}
                  onChange={(e) =>
                    setNewComment({
                      ...newComment,
                      rate: e.target.value,
                    })
                  }
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>

              <Button onClick={sendComment} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Dialog>
      {newComment && <AddComment />}
    </>
  );
};

export default CommentList;
