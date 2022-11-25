import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getMessages } from '../Redux/Message';
import MessageList from './MessageList';



function Message () {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);    
  
  
  console.log(messages)
 
  useEffect(() => {
    dispatch(getMessages())
  }, [dispatch]);

  

  return (
 <div>
  
    <div className='wrapper'>
      
     
        {
         messages?.map(message =>(
          <MessageList key={message.id} message={message}/>
          ))

        }
 </div>
     </div>
     
  );
}

export default Message;