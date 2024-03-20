import addButton from "./../assets/addButton.png";

const CreateArea = (
    { onAdd, note, setNote,
        isEdit, setIsEdit, notes,
        setNotes, updateNoteIndex, isSmallScreen }
) => {

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
        <div className={`${!isSmallScreen ? 'max-w-lg mx-auto' : 'mx-6'} my-32`}>
            <form className="flex">
                <div className="flex flex-col gap-4 w-full"> {/* Added w-full class */}
                    <input
                        className="col-span-2 bg-body-gray border-body-orange border-solid border-2 rounded-md w-full px-4 py-2" // Added w-full class
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                    <textarea
                        className="col-span-2 bg-body-gray border-body-orange border-solid border-2 rounded-md w-full px-4 py-2" // Added w-full class
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Input..."
                        rows="1"
                    />
                </div>

                <button
                    className="row-span-2 text-white px-4 py-2 rounded-md "
                    onClick={isEdit ? updateNote : submitNote}
                >
                    {isEdit ? 'UPDATE' : <img src={addButton} alt="Add" />}
                </button>
            </form>
        </div>

    );
};

export default CreateArea;
