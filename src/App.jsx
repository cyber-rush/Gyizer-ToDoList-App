import { useState } from "react";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <div className="hidden md:block lg:block">
        <Header />
      </div>
      <CreateArea onAdd={addNote} />

      {notes.length === 0 ? (
        <div className="bg-body-gray border-main-orange border-solid border-2 rounded-md mx-16 h-96 my-16 text-center flex justify-center items-center px-32">
          <h1 className="font-medium">No tasks</h1>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 bg-body-gray border-main-orange border-solid border-2 rounded-md mx-16 min-h-96 my-16 justify-center items-center px-16 py-16 ">
          {
            notes.map((noteItem, index) => (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            ))
          }
        </div>

      )}
    </div>
  );
};

export default App;
