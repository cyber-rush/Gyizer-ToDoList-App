import React from "react";
import { useState } from "react";

const CreateArea = ({ onAdd }) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

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

    return (
        <div className="my-32 max-w-lg mx-auto">
            <form className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                    <input
                        className="bg-body-gray border-main-orange border-solid border-2 rounded-md w-full"
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                    <textarea
                        className="bg-body-gray border-main-orange border-solid border-2 rounded-md w-full"
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Input..."
                        rows="1"
                    />
                </div>
                <div className="grid  col-span-1 gap-4">
                    <button
                        className="bg-main-orange text-white px-4 py-2 rounded-md w-full"
                        onClick={submitNote}
                    >
                        Add
                    </button>
                </div>

            </form>

        </div>
    );
};

export default CreateArea;
