import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios'


export const getMessages = createAsyncThunk('messages/getMessages', async () => {
  const res = await axios.get('http://localhost:3000/api/v1/messages')
  return res.data;

})

  const initialState = {
    loading: false,
    messages: [],
    error: ''
  }

  const messageSlice = createSlice({
    name: 'messages',
    initialState,
     extraReducers: builder => {
      builder.addCase(getMessages.pending, state =>{
        state.loading = true
      })
      builder.addCase(getMessages.fulfilled, (state, action) =>{
        state.loading = false
        state.messages = action.payload
        state.error = ''
      })
      builder.addCase(getMessages.rejected, (state, action) =>{
        state.loading = false
        state.messages = []
        state.error = action.error.message
      })
    } 
  });

  export default messageSlice.reducer