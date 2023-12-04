import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState={
    isLoggedIN:false,
    userDetails:[],

}

export const userDetailsSlice=createSlice({
    name:'userDetails',
    reducers:{
        login:(state,action)=>{
            state.isLoggedIN=true;
            
        },
        logout:(state,action)=>{
            state.isLoggedIN=false;
            state.userDetails=''

        }
    }
})
export default userDetailsSlice.reducer;
export {login,logout};