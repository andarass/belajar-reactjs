import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const tambahTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <p>📝 Todo List</p>

      {/* Input tambah todo */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tulis kegiatan..."
      />
      <button onClick={tambahTodo}>Tambah</button>

      {/* Daftar todo */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
