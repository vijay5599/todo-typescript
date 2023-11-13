import "./App.css";
import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
  return (
    <main>
      <h1>My todo list using Typescript</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
}

export default App;
