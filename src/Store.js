//import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
import addItemSlice from "./ItemAddSlice"
export default configureStore({reducer:{
  user:userReducer,
  feeds:addItemSlice.reducer
}});