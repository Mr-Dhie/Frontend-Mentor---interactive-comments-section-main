import { createContext, useRef, useState } from "react";
import { useCommentreducer } from "./context_and_reducer"



export const InputContext = createContext(null)


export  function Newcomment({children}){
    const[input ,setInput] = useState("")
    const consume = useCommentreducer();

    const inputRef = useRef(null)

    function addNewcomment(e){
        e.preventDefault()
        const dispatch = consume[1];
        const generatedID = consume[3]
        const setGeneratedID= consume[4];

        setGeneratedID((id)=>id+1);

        dispatch({
            type:"ADD_NEW_COMMENT",
            id: generatedID,
            content: input,
            createdAt: "a moment ago",
            score: 0,
            image_png: consume[2].image.png,
            image_webp: consume[2].image.webp,
            username: consume[2].username,
            replies: []
        })

        setTimeout(() => {
            inputRef.current.scrollIntoView({ behavior: 'smooth' })
            },1)
        

        setInput("")
    }

    return(
        <InputContext.Provider value = {[input,setInput,addNewcomment,inputRef]}>
            {children}
        </InputContext.Provider>
    )
}