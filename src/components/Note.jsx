import { useState } from "react";
import editButton from "./../assets/editButton.png";
import deleteButton from "./../assets/deleteButton.png";
import infoButton from "./../assets/infoButton.png";

const Note = ({ title, content, onExpand, isExpanded, onDelete, onUpdate, id }) => {

    const [isEdit, setIsEdit] = useState(false)

    // Truncate the title to the first 10 characters
    const truncatedTitle = title.length > 10 ? title.substring(0, 10) + '...' : title;

    // Truncate the content to the first 15 characters
    const truncatedContent = content.length > 15 ? content.substring(0, 15) + '...' : content;

    const handleUpdate = () => {
        setIsEdit(true)
    }

    return (
        <div onClick={() => { onExpand(id) }} className="cursor-pointer bg-body-gray border-main-orange border-solid border-2 rounded-md mx-6 flex px-4 py-4">
            <div className="flex-grow" >
                <h1 className="text-xl font-bold">{truncatedTitle}</h1>
                <p className="text-lg font-medium">{truncatedContent}</p>
            </div>
            {isExpanded ? (
                <>
                    <button onClick={() => { onUpdate(id); handleUpdate() }} className={`ml-auto mr-4 p-3 ${isEdit && 'bg-main-orange'} border-main-orange border-solid border-4 rounded-md`}>
                        <img src={editButton} alt="Edit Button" />
                    </button>
                    <button onClick={() => onDelete(id)} className="ml-auto mr-4 p-3 border-main-orange border-solid border-4 rounded-md">
                        <img src={deleteButton} alt="Delete Button" />
                    </button>
                </>
            )
                : (
                    <>
                        <button className="ml-auto p-4 mr-4 border-main-orange border-solid border-2 rounded-md">
                            <img src={infoButton} alt="Info Button" />
                        </button>
                    </>
                )}
        </div >
    );
};

export default Note;
