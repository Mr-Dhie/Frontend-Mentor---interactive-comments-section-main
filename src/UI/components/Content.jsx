import { EditReply } from "../../Backend/editComment";
import Edit from './Edit'

export default function Content({data,parentID,modifyComment,setModifyComment}) {
    let contentMention;
    if(data.content !== "") contentMention = data.content.split(" ")[0];

    return (
        <>
            {modifyComment ?
                <EditReply>
                    <Edit
                        parentID={parentID}
                        commentID={data.id}
                        content={data.content}
                        modifyComment={modifyComment}
                        setModifyComment={setModifyComment}
                    />
                </EditReply>
                :
                <p>
                    {contentMention && contentMention[0] === '@'
                        && contentMention.substring(1, contentMention.length - 1) === data.replyingTo ?
                        <>
                            <span className="mention">{contentMention}</span>
                            {data.content.substring(contentMention.length)}
                        </>
                        :
                        data.content
                    }
                </p>
            }
        </>
    )
}