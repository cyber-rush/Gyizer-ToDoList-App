import { useEffect, useState } from "react";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";
import DeleteConfirmBox from "./components/DeleteConfirmBox";

const App = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check if the screen size is small (sm or md)
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 768); // Considered as small screen if width is less than 768px (md breakpoint)
    };

    // Event listener to check screen size on resize
    window.addEventListener('resize', checkScreenSize);

    // Initial check of screen size
    checkScreenSize();

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
    <>
      <div className={`${isDeleteModal && 'filter blur-sm'}`}>
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
          isSmallScreen={isSmallScreen}
        />

        {notes.length === 0 ? (
          <>
            <div className={`${!isSmallScreen ? 'bg-body-gray border-main-orange border-solid border-2 rounded-md mx-16 h-96 my-16 text-center flex flex-col justify-center items-center px-32' : 'flex flex-col items-center'}`}>
              <hr className="w-16  border-main-orange"></hr>
              <h1 className=" text-xl font-medium my-2">No tasks</h1>
              <hr className="w-16  border-main-orange"></hr>
            </div>

          </>
        ) : (
          <div className={` ${isSmallScreen ? 'grid grid-cols-1 gap-2' : 'grid grid-cols-3 gap-2 bg-body-gray border-main-orange border-solid border-2 rounded-md mx-16 min-h-96 my-16 justify-center items-center px-16 py-16'} `}>
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

      </div>
      {
        isDeleteModal && (
          <DeleteConfirmBox
            setIsDeleteModal={setIsDeleteModal}
            deleteNote={deleteNote}
            delId={delId}
          />
        )
      }
    </>

  );
};

export default App;
