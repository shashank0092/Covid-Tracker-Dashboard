import {configureStore} from '@reduxjs/toolkit'
import { counterSlice } from './Features/Data/DataSlice'

export const store=configureStore({
  reducer:{
    counter:counterSlice
  }
  ,
})
  

