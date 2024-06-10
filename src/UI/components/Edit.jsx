import { EditContext } from "../../Backend/editComment";
import { useContext, useState } from "react";

export default function Edit({content,parentID,commentID,modifyComment,setModifyComment}) {
    const[input,setInput] = useState(content)

    const useEdit = useContext(EditContext);
    const modifyReply = useEdit[0];
   
    function updateHandler(){
        modifyReply(input,parentID,commentID)
        setModifyComment(!modifyComment)
    }

    return (
        <>
            <textarea name="edit" id="" value={input} onChange={((e)=> setInput(e.target.value))} ></textarea>{/* add-autofocus */}
            <button type="submit" onClick={updateHandler}>update</button>
        </>
    )
}