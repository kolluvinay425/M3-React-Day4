import { Component } from "react";

import CommentList from "./CommentList";
class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
        },
      }
    );
    let data = await response.json();
    if (response.ok) {
      this.setState({
        comments: data,
      });
    }

    console.log(response);
  };
  render() {
    return (
      <>
        <CommentList
          elementId={this.props.asin}
          showComments={this.state.comments}
        />
      </>
    );
  }
}

export default CommentArea;
