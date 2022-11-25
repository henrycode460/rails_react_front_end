import { configureStore } from '@reduxjs/toolkit';


import messageReducer from './Message'




const store = configureStore({
  reducer: {
    message: messageReducer
    }
    
});

export default store;