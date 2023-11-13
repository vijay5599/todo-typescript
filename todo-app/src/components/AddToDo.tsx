import { FormEvent, useState } from "react";
import { useTodos } from "../store/todo";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();
  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddToDo;
