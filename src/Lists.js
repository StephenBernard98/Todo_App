import React, { useEffect, useState } from "react";
import "./List.css";
import db from "./firebase";

const Lists = () => {
  const [todo, setTodo] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todo").onSnapshot((snapshot) => {
      setTodo(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const getInput = (e) => {
    setInput(e.target.value);
  };
  const add = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="&#9998; Write Todo..."
          value={input}
          onChange={getInput}
        />
        <button onClick={add} disabled={!input}>
          Add Todo
        </button>
      </form>
      <ul>
        {todo.map((list, index) => {
          return (
            <div className="listItem">
              <li> {index + "." + " " + list}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Lists;
