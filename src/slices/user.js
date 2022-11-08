import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    name:'',
    password:'',
    accessToken:'',
    refreshToken:'',
};
const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers:{
        setuser(state,action){
            state.name = action.payload.name;
            state.password = action.payload.password;
        },
     },
     extraReducers: builder=>{},
});
export default userSlice;