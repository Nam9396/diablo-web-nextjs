import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// const { createSlice } = require("@reduxjs/toolkit");

// const initialState = { 
//   userInfo: localStorage.getItem('diabloUser') ? JSON.parse(
//     localStorage.getItem('diabloUser')
//   ) : null
// };

// const authSlice = createSlice({
//   name: 'auth', 
//   initialState, 
//   reducers: { 
//     setCredentails: (state, action) => { 
//       state.userInfo = action.payload;
//       localStorage.setItem('diabloUser', JSON.stringify(action.payload));
//     }, 
//     logoutLocalStorage: (state, action) => {
//       state.userInfo = null;
//       localStorage.removeItem('diabloUser');
//     }, 
//   }
// }); 

// export const { setCredentails, logoutLocalStorage, logoutSessionStorage } = authSlice.actions;

// export const authSliceReducer = authSlice.reducer;

const initialState = { 
  canExecuted: true, 
  localStorageValue: () => {
    try {
      if (localStorage.getItem('diabloUser')) { 
        return JSON.parse(localStorage.getItem('diabloUser'));
      } else {
        return null;
      }
    } catch (err) { 
      console.error(err);
    }
  }
   
}

export const authSlice = createSlice({
  name: 'auth',
  initialState, 
  reducers: { 
    setExecuteStatus: (state, action) => { 
      state.canExecuted = false;
    }
  }, 
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { 
        ...state, 
        ...action.payload.auth
      }
    }
  }
})

export const authSliceReducer = authSlice.reducer;
export const { setExecuteStatus } = authSlice.actions;