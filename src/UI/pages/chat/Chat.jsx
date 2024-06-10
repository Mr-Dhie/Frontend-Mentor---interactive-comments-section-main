import { useCommentreducer } from "../../../Backend/context_and_reducer";
import { Newcomment } from "../../../Backend/addNewComment";
import Comment from '../../components/Comment'
import ChatBubble from '../../components/ChatBubble'
import './chat.css'


export default function Chat() {
    const consume = useCommentreducer();

    return (
        <section className="center">

            <div className="margin">
                <ul>
                    {consume[0].map((data) =>
                        <li key={data.id}>
                            <ChatBubble data={data} parentID={data.id} />
                        </li>
                    )}
                </ul>


                <Newcomment>
                    <Comment />
                </Newcomment>

            </div>

        </section>
    )
}