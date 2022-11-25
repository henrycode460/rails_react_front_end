import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Message from './components/Message'




function App() {
  
    return (
  
      <>
       

        <div >

          <Routes>
            <Route path="/" exact element={<Message />} />
           
            
          </Routes>

        </div>

      </>
   
    );
 
}

export default App;