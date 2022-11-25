import React from 'react';





const MessageList = ({ message}) => {

 


  

   
  return (
    <>
    
    
      <div className='mainContainer '> 
      
      
       <div >
        <h3 >{message.message}</h3>
        
      
      </div>
    </div>
   
    </>
  );
};

export default MessageList;