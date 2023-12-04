import {createSlice, nanoid } from '@reduxjs/toolkit';   //k k kasari banauna parxa thaha xaina

const initialState={
    isLoggedIN:false,
    userDetails:[],

}

export const userDetailsSlice=createSlice({
    name:'userDetails',
    initialState,
    reducers:{
        login:(state,action)=>{
            console.log("Data at slice",action.payload);
            state.isLoggedIN=true;
            state.userDetails=action.payload;
            
        },
        logout:(state,action)=>{
            state.isLoggedIN=false;
            state.userDetails='';

        }
    }
})
export const {login,logout} =userDetailsSlice.actions
export default userDetailsSlice.reducer;