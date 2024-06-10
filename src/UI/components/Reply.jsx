import { useCommentreducer } from "../../Backend/context_and_reducer"
import { ReplyContext } from "../../Backend/addNewReply";
import { useContext } from "react";

export default function Reply({ replyingID, replyingTo, clickedReply, setClickedReply }) {
    const consume = useCommentreducer();
    const image = consume[2].image.png;
    const alt = consume[2].username;

    const useReply = useContext(ReplyContext);
    const input = useReply[0]
    const setInput = useReply[1]
    const replyHandler = useReply[2]


    function submit() {
        replyHandler(replyingID, replyingTo)
        setClickedReply(!clickedReply)
    }

    return (
        <div className="bubble__container margin-bottom profile" style={{ marginTop: "-.5rem", flexDirection: "column" }}>
            <div style={{display: "flex"}}>
                <img src={image} alt={alt} className="desktopview" />
                <textarea name="newReply" id="" defaultValue={`@${replyingTo}, `} value={input} onChange={((e) => setInput(e.target.value))}></textarea>
                <button type="submit" onClick={() => submit()} className="desktopview" style={{ justifyContent: "center", alignItems: "center" }}>reply</button>
            </div>
            <div className="mobileview profile" style={{justifyContent: "space-between", marginTop: "1rem"}}>
                <img src={image} alt={alt} />
                <button type="submit" onClick={() => submit()} style={{ justifyContent: "center", alignItems: "center" }}>reply</button>
            </div>
        </div>
    )
}