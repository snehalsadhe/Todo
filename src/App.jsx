import AppName from "./components/AppName";
import Todo from "./components/Todo"
import { useState } from "react";
import TodoMap from "./components/TodoMap";

function App() {

 
const [itemList,setItemList]=useState([]);
const [highlight,setHighlight]=useState([]);



const handleAddButtonClick=(itemName)=>{
  setItemList([
    ...itemList,
    {
      itemId:Date.now(),
      item:itemName,
     
    }
  ])
  
}
const handleDeleteButtonClick=(itemName)=>{
  const newItemList=itemList.filter((i)=>i.item!==itemName)
setItemList(newItemList)
  

}

function changeBgColor(items){

  if(highlight.includes(items)){
    setHighlight(highlight.filter(i=>i!=items))
  }else{
  setHighlight([
    ...highlight,items
  ]);
}

}

  return (
    <>  
    <AppName/>
    <Todo onAddButtonClick={handleAddButtonClick}/>
    <TodoMap itemList={itemList} onDeleteClick={handleDeleteButtonClick}/>
     
    </>
  )
}

export default App
