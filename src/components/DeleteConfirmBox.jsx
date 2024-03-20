const DeleteConfirmBox = ({ setIsDeleteModal, deleteNote, delId }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 ">
            <div className="bg-dark-gray border-t-4 border-t-body-orange rounded-md p-4 w-96 h-64 flex flex-col justify-between items-center">
                {/* Delete confirmation box content */}
                <p className="text-2xl font-semibold">Delete this task?</p>
                <div className="">
                    <button onClick={() => { deleteNote(delId); setIsDeleteModal(false) }} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 mx-4">
                        Yes
                    </button>
                    <button onClick={() => setIsDeleteModal(false)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 mx-4">
                        No
                    </button>
                </div>
            </div>

        </div>
    );
}

export default DeleteConfirmBox;
