import { useCommentreducer } from "./context_and_reducer";
import { createContext } from "react"


export const EditContext = createContext(null);

export function EditReply({ children }) {
    const consume = useCommentreducer();

    function modifyReply(input,parentID,commentID){
        const dispatch = consume[1];
        
        dispatch({
            type:"MODIFY_REPLY",
            parentID:parentID,
            commentID:commentID,
            content:input
        })
    }

    return (
        <EditContext.Provider value={[modifyReply]}>
            {children}
        </EditContext.Provider>
    )
}