import { createContext } from "react";
import {useReducer} from "react"


export const ItemsContext=createContext({itemList:[],
  addButton:()=>{},
  deleteButton:()=>{}});

  const itemReducer=(currentItem,action)=>{

    let newTodoItems=currentItem
     if(action.type=="NEW_ITEM"){
   
       newTodoItems=[
         ...currentItem,
         {
           itemId:Date.now(),
           item:action.payload.itemName
         }
       ]
     }
     else if(action.type=="DELETE_ITEM"){
       newTodoItems=currentItem.filter((i)=>i.item!==action.payload.item)
     }
     return newTodoItems
   
   }
  const ItemsContextProvider=({children})=>{

    const [itemList,dispatcherItem]=useReducer(itemReducer,[]);

const addButton=(itemName)=>{

  const newItemAction={
    type:"NEW_ITEM",
    payload:{
      itemName
    }
  }
  dispatcherItem(newItemAction)
}
const deleteButton=(itemName)=>{
 const deleteItemAction={
  type:"DELETE_ITEM",
  payload:{
     item:itemName
  }
 }

 dispatcherItem(deleteItemAction)
}

return(
<ItemsContext.Provider value={{itemList,addButton,deleteButton}}>{children}</ItemsContext.Provider>
);
  }

  export default ItemsContextProvider;
  