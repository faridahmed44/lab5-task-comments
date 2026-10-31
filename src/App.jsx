import { useState } from 'react'
import CommentInput from './CommentsInput.jsx'
import Comments from './Comments.jsx'
import './App.css'

function App() {

  const [comments, setComments] = useState([
    { name: "Sara", text: "Great post!" },
    { name: "Mohanad", text: "Thanks for sharing this." },
    { name: "Ali", text: "I found this very helpful." },
  ]);

  return (
    <div>
      <CommentInput comments={comments} setComments={setComments} />
      <Comments comments={comments} />
    </div>
  )
}

export default App