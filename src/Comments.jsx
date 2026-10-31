import Comment from './Comment';

function Comments(props) {

  const comments = props.comments;

  const commentComponents = comments.map(comment => {
    return <Comment name={comment.name} text={comment.text} />;
  });

  return (
    <>
      {commentComponents}
    </>
  )
}

export default Comments