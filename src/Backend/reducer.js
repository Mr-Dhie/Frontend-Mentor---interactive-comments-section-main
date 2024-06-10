export function reducer(comment, action) {

    switch (action.type) {
        case "ADD_NEW_COMMENT": {

            const newComment = {
                "id": action.id,
                "content": action.content,
                "createdAt": action.createdAt,
                "score": action.score,
                "user": {
                    "image": {
                        "png": action.image_png,
                        "webp": action.image_webp,
                    },
                    "username": action.username
                },
                "replies": action.replies
            }
            comment.push(newComment)
            return [...comment]

        }



        case "ADD_NEW_REPLY": {
            let curr_comment;
            
            for (let idx in comment) {
                if (comment[idx].id === action.replyingID) {
                    curr_comment = comment[idx];
                }
            }


            const newReply = {
                "id": action.id,
                "content": action.content,
                "createdAt": action.createdAt,
                "score": action.score,
                "replyingTo": action.replyingTo,
                "user": {
                    "image": {
                        "png": action.image_png,
                        "webp": action.image_webp,
                    },
                    "username": action.username
                }
            }

            curr_comment.replies.push(newReply)

            return [...comment]
        }



        case "MODIFY_REPLY": {
            let curr_comment;

            if (action.parentID === action.commentID) {
                for (let idx in comment) {
                    if (comment[idx].id === action.parentID) {

                        curr_comment = comment[idx];
                    }
                }
            } else {
                for (let idx in comment) {

                    if (comment[idx].id === action.parentID) {
                        let replies = comment[idx].replies;

                        for (let idx2 in replies) {
                            if (replies[idx2].id === action.commentID) {

                                curr_comment = replies[idx2];
                                break
                            }
                        }
                    }
                }
            }

            curr_comment.content = action.content;

            return [...comment]
        }


        case "DELETE": {
            let curr_comment;

            if (action.parentID === action.commentID) {
                curr_comment = comment.filter((comment) => comment.id !== action.parentID);

            } else {
                for (let idx in comment) {
                    if (comment[idx].id === action.parentID) {
                        const replies = comment[idx].replies;
                        const filteredReplies = replies.filter((comment) => comment.id !== action.commentID);

                        comment[idx].replies = filteredReplies;
                        curr_comment = comment

                        break;
                    }
                }

            }

            comment = curr_comment;

            return [...comment]
        }



        default: return [...comment]
    }
}
