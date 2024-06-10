import { useContext } from "react"
import { DeleteContext } from "../../../Backend/deleteComment"
import './modal.css'


export default function Modal({ showModal, setShowModal, parentID, commentID }) {
    const Delete = useContext(DeleteContext)

    function deleteHandler() {
        Delete(parentID, commentID)
        setShowModal(!showModal)
    }

    return (

        <dialog id="modal">
            <div className="modal-container">
                <h1>Delete comment</h1>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className="modal-buttons">
                    <button onClick={(() => setShowModal(!showModal))} style={{ backgroundColor: "hsl(211, 10%, 45%)" }}>No,Cancel</button>
                    <button onClick={(deleteHandler)} style={{ backgroundColor: "hsl(358, 79%, 66%)" }}>Yes,Delete</button>
                </div>
            </div>

        </dialog>

    )
}