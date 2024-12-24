import AppName from "./components/AppName";
import Todo from "./components/Todo"
import { useState, useReducer } from "react";
import TodoMap from "./components/TodoMap";
import { ItemsContext } from "./contextStore/todoItemsContext";

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

function App() {
//const [itemList,setItemList]=useState([]);
const [itemList,dispatcherItem]=useReducer(itemReducer,[]);

const addButton=(itemName)=>{

  const newItemAction={
    type:"NEW_ITEM",
    payload:{
      itemName
    }
  }

  dispatcherItem(newItemAction)



  // setItemList((currentValue)=>[
  //   ...currentValue, //react refer itemList here as its part of react to inject the things for you here setItemList is used.
  //   {
  //     itemId:Date.now(),
  //     item:itemName
  //   }
  // ])


  
}
const deleteButton=(itemName)=>{
 const deleteItemAction={
  type:"DELETE_ITEM",
  payload:{
     item:itemName
  }
 }

 dispatcherItem(deleteItemAction)

//   const newItemList=itemList.filter((i)=>i.item!==itemName)
// setItemList(newItemList)
}


  return (
    <>  
    <ItemsContext.Provider value={{itemList,addButton,deleteButton}}>
    <AppName/>
    <Todo />
    <TodoMap/>
    </ItemsContext.Provider>
    </>

  )
}

export default App
