import { useCommentreducer } from "./context_and_reducer";
import { createContext, useState } from "react";

export const ReplyContext = createContext(null)

export function NewReply({ children }) {
    const [input, setInput] = useState()
    const consume = useCommentreducer();

    function addNewReply(replyingID,replyingTo) {

        const dispatch = consume[1];
        const generatedID = consume[3];
        const setGeneratedID= consume[4];

        setGeneratedID((id)=>id+1);

        dispatch({
            type:"ADD_NEW_REPLY",
            id: generatedID,
            replyingID: replyingID,
            content: (input !== undefined) ? input : `@${replyingTo}, `,
            createdAt: "a moment ago",
            score: 0,
            replyingTo: replyingTo,
            image_png: consume[2].image.png,
            image_webp: consume[2].image.webp,
            username: consume[2].username,
        })
    }


    return (
        <ReplyContext.Provider value={[input, setInput, addNewReply]}>
            {children}
        </ReplyContext.Provider>
    )

}