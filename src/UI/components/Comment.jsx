import { useCommentreducer } from "../../Backend/context_and_reducer";
import { InputContext } from "../../Backend/addNewComment";
import { useContext } from "react";


export default function Comment() {
    const consume = useCommentreducer();
    const image = consume[2].image.png;
    const alt = consume[2].username;

    const useInput = useContext(InputContext);
    const input = useInput[0];
    const setInput = useInput[1];
    const inputHandler = useInput[2]
    const inputRef = useInput[3]


    return (
        <>
            <hr style={{ border: "transparent" }} ref={inputRef} /> {/*nin... nin */}
            <div className="bubble__container profile" style={{ flexDirection: "column" }}>

                <form onSubmit={inputHandler} style={{ display: "flex", flex: "1" }}>
                    <img src={image} alt={alt} className="desktopview" />
                    <textarea name="newcomment" placeholder="Add a comment..." value={input} onChange={((e) => setInput(e.target.value))} ></textarea>
                    <button type="submit" className="desktopview" style={{ justifyContent: "center", alignItems: "center" }}>send</button>
                </form>


                <form className="mobileview" onSubmit={inputHandler} style={{ marginTop: "1rem", justifyContent: "space-between" }}>
                    <img src={image} alt={alt} />
                    <button type="submit" style={{ justifyContent: "center", alignItems: "center" }}>send</button>
                </form>
            </div>
        </>
    )
}