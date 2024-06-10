import { type } from "@testing-library/user-event/dist/type";
import { useCommentreducer } from "./context_and_reducer";
import { createContext } from "react";


export const DeleteContext = createContext(null)

export function DeleteComment({ children }) {
    const consume = useCommentreducer();


    function deleteCommentHandler(parentID,commentID) {
        const dispatch = consume[1]

        dispatch({
            type:"DELETE",
            parentID:parentID,
            commentID:commentID
        })

    }


    return (
        <DeleteContext.Provider value={deleteCommentHandler}>
            {children}
        </DeleteContext.Provider>
    )

}