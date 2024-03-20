import { useState } from "react";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";
import DeleteConfirmBox from "./components/DeleteConfirmBox";

const App = () => {

  const [notes, setNotes] = useState([]);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expandedId, setExpandedId] = useState(null);
  const [isEdit, setIsEdit] = useState(false)
  const [updateNoteIndex, setUpdateNoteIndex] = useState(null)
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const [delId, setDelId] = useState(null)

  const handleExpand = (id) => {
    if (expandedId === id) {
      // If the clicked note item is already expanded, collapse it
      setExpandedId(null);
    } else {
      // Collapse the previously expanded note item
      setExpandedId(id);
    }
  };

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const updateNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.map((noteItem, index) => {
        if (index === id) {
          setNote({
            title: noteItem.title,
            content: noteItem.content
          });
        }
        return noteItem;
      });
    });

    setIsEdit(true)
    setUpdateNoteIndex(id); // Set the index of the note to be updated
  };


  const deleteModal = (id) => {
    setIsDeleteModal(true)
    setDelId(id)
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className={`${isDeleteModal && 'opacity-30'}`}>
      <div className="hidden md:block lg:block">
        <Header />
      </div>
      <CreateArea
        onAdd={addNote}
        note={note}
        setNote={setNote}
        notes={notes}
        setNotes={setNotes}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        updateNoteIndex={updateNoteIndex}
      />

      {notes.length === 0 ? (
        <div className="bg-body-gray border-main-orange border-solid border-2 rounded-md mx-16 h-96 my-16 text-center flex justify-center items-center px-32">
          <h1 className="font-medium">No tasks</h1>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 bg-body-gray border-main-orange border-solid border-2 rounded-md mx-16 min-h-96 my-16 justify-center items-center px-16 py-16 ">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onExpand={() => handleExpand(index)}
              isExpanded={expandedId === index}
              onDelete={deleteModal}
              onUpdate={updateNote}
            />
          ))}
        </div>
      )}
      {
        isDeleteModal && (
          <DeleteConfirmBox
            setIsDeleteModal={setIsDeleteModal}
            deleteNote={deleteNote}
            delId={delId}
          />
        )
      }
    </div>
  );
};

export default App;
