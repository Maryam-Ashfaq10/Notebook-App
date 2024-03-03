import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <div>
      <NoteState>

      <Navbar />
      <About/>

      </NoteState>

   
    </div>
  );
}

export default App;
