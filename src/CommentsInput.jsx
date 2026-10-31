import { useState } from "react";

function CommentInput(props) {

  const comments = props.comments;
  const setComments = props.setComments;
  
  
  const [text, setText] = useState("");
  const [count,setCount]=useState(3);
 
  function saveText(event) {
    setText(event.target.value);
  }
  
  function addComment() {
     if (text.trim() === "") {//handle el empty message case
    return;
  }
    setComments([...comments, { name: "You", text: text }]);
    console.log("comment is sent");

    setCount(count+1);

    setText("");
  }
   
  return (
    <div>
      <h2>Comments ({count})</h2>
      <input className="commentInput" type="text" placeholder="Write a comment..." size="30" onChange={saveText} value={text} />
      <button className="postButton" onClick={addComment}>Post</button>
      
    </div>
  )
}

export default CommentInput