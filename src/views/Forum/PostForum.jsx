import React from 'react'
import './PostsForum.css'
import CommentForum from './CommentForum'

const PostForum = () => {
  return (
    <div>
         <div className='containerpost'>
            <div className="card">
                <div className="upLine">
                    <h1>Tem alguém na fila do resun?</h1>
                    <p>15 minutos atrás</p>
                </div>
            
            <div className="underline"><hr></hr></div>

            <div className="downLine">
                    <p>Alguém na fila pelo amor de god. Quero comer!</p>
                    
            </div>
            
            <div className="complaint">
                        <p>Dionísio</p> 
                        <img width="25" height="25" src="https://img.icons8.com/sf-ultralight/25/error.png" alt="error"/>
            </div>

            <div className="favorite">
                    <button><img width="20" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like"/></button>
                    <p className="number">1</p>
            </div>
        </div>

        <div className="inputField">
            <input type="text" name="answer" className="answer" placeholder="Responder comentário"></input>
            <input type="submit" value="Responder" className="submit"></input>
        </div>
    </div>
    <div className='commentsforum'>
<CommentForum></CommentForum>
    </div>
    </div>
  )
}

export default PostForum