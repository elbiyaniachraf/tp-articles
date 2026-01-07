import { useState } from "react";

function AddComment({ onAdd }) {
  const [text, setText] = useState("");

  const submit = e => {
    e.preventDefault();
    if (text === "") return;

    onAdd({
      id: Date.now(),
      body: text
    });

    setText("");
  };

  return (
    <form onSubmit={submit}>
      <h3>Ajouter un commentaire</h3>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button>Ajouter</button>
    </form>
  );
}

export default AddComment;
