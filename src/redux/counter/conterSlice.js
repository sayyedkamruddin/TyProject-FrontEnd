import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "Token":false,
    "Fname":"",
    "Lname":"",
    "Email":"",
    "Phone":"",
    "City":""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    updateBydataTrue: (state,action) => {
    const {Fname, Lname, Email, Phone, City }=action.payload; 
    
    state.Token=true
    state.Fname=Fname
    state.Lname=Lname
    state.Phone=Phone
    state.Email=Email
    state.City=City
      
    },
    updateByDefaultFalse: (state) => {
        state.Token=false
        state.Fname=""
        state.Lname=""
        state.Phone=""
        state.Email=""
        state.City=""
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateBydataTrue,updateByDefaultFalse } = counterSlice.actions

export default counterSlice.reducer