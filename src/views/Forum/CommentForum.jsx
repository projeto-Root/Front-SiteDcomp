import React from 'react'

const CommentForum = () => {
  return (
    <div>
         <div className="chat">
            <div className="first"> 
                <div className="user">
                    <p>Ícaro - 5 minutos atrás</p>
                </div>
                
                <div className="coment">
                    <p>O almoço no resun hoje é cuscuz seco com rato :[</p>
                </div>

                <button className='like'><img width="20" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like"/></button>
                <button><img className='respond' width="20" height="24" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/></button>
                <hr></hr>
            </div>
            
            <div className="second"> 
                <div className="user">
                    <p>LoboPidao254 - 2 minutos atrás</p>
                </div>
                
                <div className="coment">
                    <p>Meu preferido , mim de papai.</p>
                </div>

                <button className='like'><img width="20" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like"/></button>
                <button><img width="20" height="24" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/></button>
                <hr></hr>
            </div>
            
            <div className="third"> 
                <div className="user">
                    <p>Dionísio - 2 minutos atrás</p>
                </div>
                
                <div className="coment">
                    <p>Sai fora Lobo</p>
                </div>

                <button className='like'><img width="20" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like"/></button>
                <button><img width="20" height="24" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/></button>
            </div>

        </div>
    </div>
  )
}

export default CommentForum