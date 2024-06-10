export default function HeaderButtons({
    delete_btn,edit_btn,reply_btn,
    data,consume, deleteHandler,
    setModifyComment, modifyComment,
    setClickedReply,clickedReply}) {

    return (
        <>
            {(data.user.username === consume[2].username) ?
                <>
                    <button onClick={deleteHandler} style={{ color: "hsl(358, 79%, 66%)" }}>
                        <img src={delete_btn} alt="delete button" />
                        Delete
                    </button>
                    <button onClick={(() => setModifyComment(!modifyComment))} >
                        <img src={edit_btn} alt="edit button" />
                        Edit
                    </button>
                </>
                :
                <>
                    <button onClick={(() => setClickedReply(!clickedReply))}>
                        <img src={reply_btn} alt="reply button" />
                        Reply
                    </button>
                </>
            }
        </>
    )
}