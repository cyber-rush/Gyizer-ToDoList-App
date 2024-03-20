const Note = ({ title, content, onDelete, id }) => {
    const handleClick = () => onDelete(id);

    // Truncate the title to the first 10 characters
    const truncatedTitle = title.length > 10 ? title.substring(0, 10) + '...' : title;

    // Truncate the content to the first 25 characters
    const truncatedContent = content.length > 25 ? content.substring(0, 25) + '...' : content;

    return (
        <div className="border-main-orange border-solid border-2 rounded-md mx-6 flex px-4 py-4">
            <div className="flex-grow">
                <h1 className="text-xl font-bold">{truncatedTitle}</h1>
                <p className="text-lg font-medium">{truncatedContent}</p>
            </div>
            <button onClick={handleClick} className="ml-auto mr-4">DELETE</button>
        </div>
    );
}

export default Note;
