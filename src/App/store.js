import {configureStore} from '@reduxjs/toolkit';
import userDetailsSlice from '../features/userDetailsSlice';
 const store = configureStore({     //create a store to store reducers and global variables
    reducer:{
        userDetails:userDetailsSlice
    }
})

export default store