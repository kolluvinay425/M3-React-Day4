import { Modal, Button, Form } from "react-bootstrap";
import { Component } from "react";
import AddComment from "./AddComment";
class CommentList extends Component {
  state = {
    newComment: {
      comment: "",
      rate: 1,
      elementId: this.props.elementId,
    },
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.elementId,
        {
          method: "POST",
          body: JSON.stringify(this.state.newComment),
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
  render() {
    return (
      <>
        <Modal.Dialog>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>comments</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {this.props.showComments?.map((comment) => (
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
                    value={this.state.newComment.comment}
                    onChange={(e) =>
                      this.setState({
                        newComment: {
                          ...this.state.newComment,
                          comment: e.target.value,
                        },
                      })
                    }
                  />
                  <Form.Control
                    as="select"
                    value={this.state.newComment.rate}
                    onChange={(e) =>
                      this.setState({
                        newComment: {
                          ...this.state.newComment,
                          rate: e.target.value,
                        },
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

                <Button
                  onClick={this.sendComment}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Dialog>
        {this.state.newComment && <AddComment />}
      </>
    );
  }
}

export default CommentList;
