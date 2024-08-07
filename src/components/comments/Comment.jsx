import CommentDisplay from "./CommentDisplay";
import AddComment from "./AddComment";

// This component serves as the main container for combining 2 sub-components
const Comment = () => {
    return (
        <div className='comments'>
            {/*Component for adding comments :  */}
            <AddComment/>
            {/* Component for displaying comment :  */}
            <CommentDisplay/>
        </div>
    );
};

export default Comment;