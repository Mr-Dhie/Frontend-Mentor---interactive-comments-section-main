import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./reducer";
import data from '../data'



const CommentContext = createContext(null)
export const useCommentreducer = (() => useContext(CommentContext))
export const ModalContext = createContext(null)


export default function ContextAndReducer({ children }) {
    const curr_user = data.currentUser
    const [comments, dispatch] = useReducer(reducer, data.comments)
    const [generatedID, setGeneratedID] = useState(5)


    const [showModal, setShowModal] = useState(false)
    const [modalID, setModalID] = useState()
    const [commentID, setCommentID] = useState()

    return (
        <CommentContext.Provider value={[comments, dispatch, curr_user, generatedID, setGeneratedID]}>
            <ModalContext.Provider value={[showModal, setShowModal, modalID, setModalID, commentID, setCommentID]}>
                {children}
            </ModalContext.Provider>
        </CommentContext.Provider>
    )
}