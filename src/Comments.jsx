import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data =>
        setComments(data.filter(c => c.postId === articleId))
      );
  }, [articleId]);

  const deleteComment = id => {
    setComments(comments.filter(c => c.id !== id));
  };

  const addComment = comment => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <h2>Commentaires</h2>

      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.body}</p>
          <button onClick={() => deleteComment(comment.id)}>
            Supprimer
          </button>
        </div>
      ))}

      <AddComment onAdd={addComment} />
    </div>
  );
}

export default Comments;
