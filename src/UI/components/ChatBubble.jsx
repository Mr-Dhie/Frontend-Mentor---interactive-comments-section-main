import { useContext, useState } from "react";
import { useCommentreducer } from "../../Backend/context_and_reducer"
import { reply_btn, minus_btn, plus_btn, delete_btn, edit_btn } from "../../assets/buttons"
import { ModalContext } from "../../Backend/context_and_reducer";
import { NewReply } from "../../Backend/addNewReply";
import { DeleteComment } from "../../Backend/deleteComment";
import ScoreButton from "./ScoreButton";
import HeaderProfile from "./HeaderProfile";
import HeaderButtons from "./HeaderButtons";
import Content from "./Content";
import Reply from "./Reply";
import Modal from "./modal/Modal";

export default function ChatBubble({ data, parentID }) {

    const consume = useCommentreducer();
    const [clickedReply, setClickedReply] = useState(false);
    const [modifyComment, setModifyComment] = useState(false);

    const useModal = useContext(ModalContext)
    const showModal = useModal[0];
    const setShowModal = useModal[1];
    const modalID = useModal[2];
    const setModalID = useModal[3];
    const commentID = useModal[4];
    const setCommentID = useModal[5];


    // const [showModal,setShowModal] = useState(false);

    const modal = document.getElementById("modal");
    (modal && (
        (showModal) ? modal.showModal() : modal.close()
    ));


    function deleteHandler() {
        setModalID(parentID)
        setShowModal(!showModal)
        setCommentID(data.id)
    }


    return (
        <>
            <div className="bubble__container margin-bottom">
                <div className="bubble__container-score desktopview">
                    <ScoreButton
                        plus_btn={plus_btn}
                        minus_btn={minus_btn}
                        score={data.score}
                    />
                </div>
                <div style={{ flex: "1" }}>
                    <div className="bubble__container-header">
                        <div className="bubble__container-header_profile">
                            <HeaderProfile data={data} consume={consume} />
                        </div>
                        <div className="bubble__container-header_buttons desktopview">
                            <HeaderButtons
                                data={data}
                                consume={consume}
                                delete_btn={delete_btn}
                                edit_btn={edit_btn}
                                reply_btn={reply_btn}
                                deleteHandler={deleteHandler}
                                setModifyComment={setModifyComment}
                                modifyComment={modifyComment}
                                setClickedReply={setClickedReply}
                                clickedReply={clickedReply}
                            />
                        </div>
                    </div>
                    <div className="bubble__container-content profile">
                        <Content
                            data={data}
                            parentID={parentID}
                            modifyComment={modifyComment}
                            setModifyComment={setModifyComment}
                        />
                    </div>

                    <div className="mobileview" style={{marginTop: ".8rem" , justifyContent: "space-between"}}>
                        <div className="mobileview-score">
                            <ScoreButton
                                plus_btn={plus_btn}
                                minus_btn={minus_btn}
                                score={data.score}
                            />
                        </div>
                        <div className="bubble__container-header_buttons">
                            <HeaderButtons
                                data={data}
                                consume={consume}
                                delete_btn={delete_btn}
                                edit_btn={edit_btn}
                                reply_btn={reply_btn}
                                deleteHandler={deleteHandler}
                                setModifyComment={setModifyComment}
                                modifyComment={modifyComment}
                                setClickedReply={setClickedReply}
                                clickedReply={clickedReply}
                            />
                        </div>

                    </div>

                </div>
            </div>

            {clickedReply &&
                <NewReply>
                    <Reply
                        replyingID={parentID}
                        replyingTo={data.user.username}
                        clickedReply={clickedReply}
                        setClickedReply={setClickedReply}
                    />
                </NewReply>
            }

            <div className="bubble__container-reply">
                <ul>
                    {data.replies && data.replies.map((data) =>
                        <li key={data.id}>
                            <ChatBubble data={data} parentID={parentID} />
                        </li>
                    )}
                </ul>
            </div>

            <DeleteComment> {/*parentId is always 1 when passing directly through modal */}
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    parentID={modalID}
                    commentID={commentID}
                />
            </DeleteComment>
        </>
    )
}
