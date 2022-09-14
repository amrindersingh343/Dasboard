import { createSlice } from "@reduxjs/toolkit";
import items from "./DataStore/DivItem";
 const addItemSlice=createSlice({
  name:"addItem",
  initialState:{
    item:items
  },
  reducers:{
    addItems(state){
      console.log("addItem reucer")
    //  state.item : {...state.item,items};
    state.item.push(items);
    }
  }
});
//export const addItem=addItemSlice.actions;
export const {selectAction} = addItemSlice.actions;
//export const itemsAdded=(state)=>state.addItem.item;
export default addItemSlice;