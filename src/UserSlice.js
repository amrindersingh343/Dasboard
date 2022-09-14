import { createSlice } from "@reduxjs/toolkit";
 
export const  userSlice=createSlice({
  name:"user",
  initialState:{
    user:false
  },
  reducers:{
    login(state,action){
      state.user=action.payload;
      console.log(state.user);
    },
    logout(state,action){
      state.user=false;
    }
  }

  
})
export const {login,logout}=userSlice.actions;
export const selectuser=(state)=>state.user.user;
export default userSlice.reducer;