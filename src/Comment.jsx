function Comment(props) {
  const name = props.name;
  const text = props.text;

  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className="commentContainer">
      <div className="icon">{firstLetter}</div>
      <div className="comment">
        <b>{name}</b>
        <div className="comment">{text}</div>
      </div>
    </div>
  )
}

export default Comment