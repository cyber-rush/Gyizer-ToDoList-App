import addButton from "./../assets/addButton.png";

const CreateArea = ({ onAdd, note, setNote, isEdit, setIsEdit, notes, setNotes, updateNoteIndex }) => {


    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    };


    const submitNote = (event) => {
        onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    };

    const updateNote = (event) => {
        event.preventDefault();
        // Assuming you have the index of the note being updated
        const updatedNotes = [...notes];
        updatedNotes[updateNoteIndex] = note; // Update the note in the array
        setNotes(updatedNotes); // Update the notes state with the updated array
        setNote({
            title: "",
            content: ""
        });

        setIsEdit(false)
    };

    return (
        <div className="my-32 max-w-lg mx-auto">
            <form className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                    <input
                        className="bg-body-gray border-body-orange border-solid border-2 rounded-md w-full px-4 py-2"
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                    <textarea
                        className="bg-body-gray border-body-orange border-solid border-2 rounded-md w-full px-4 py-2"
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Input..."
                        rows="1"
                    />
                </div>
                <div className="grid col-span-1 gap-4">
                    <button
                        className=" text-white px-4 py-2 rounded-md w-full"
                        onClick={isEdit ? updateNote : submitNote}
                    >
                        {isEdit ? 'UPDATE' : <img src={addButton} alt="Add" />}


                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateArea;
