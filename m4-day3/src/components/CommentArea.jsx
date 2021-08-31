import { useState, useEffect } from "react";
import CommentList from "./CommentList";

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [],
  // };
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
          },
        }
      );
      let data = await response.json();
      if (response.ok) {
        setComments(data);
      }

      console.log(response);
    };
    fetchComments();
  }, []);

  return (
    <>
      <CommentList elementId={asin} showComments={comments} />
    </>
  );
};

export default CommentArea;
