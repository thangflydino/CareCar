import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
      data :{}
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload
            console.log('action.payload',action.payload)
        },
        logoutUser: (state, action) =>{
          state.data = {}
        }
    }
})

const { reducer, actions } = userSlice
export const {
    setUser,logoutUser
} = actions
export default reducer