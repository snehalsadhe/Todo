
import { useState,useRef, useContext } from "react";
import { ItemsContext } from "../contextStore/todoItemsContext";
export default function Todo(){
  
  const {addButton}=useContext(ItemsContext)

 const itemName=useRef();

function addItem(event){
  event.preventDefault();
  addButton(itemName.current.value);
  itemName.current.value=''

}

return(
<>

<form onSubmit={addItem}>
<div style={{ marginTop:'100px' ,maxWidth: '500px', margin: 'auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom:'20px' }}>
<input type="text"
       placeholder="Enter here"
       ref={itemName}
       style={{
        flex: 1,
        maxWidth: '300px',
        padding: '10px',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        marginRight: '10px'
    }}
       className="form-control form-control-sm"
       
/>

<button
        className="btn btn-warning"
       
        >Add
</button>
</div>


</div>
</form>
</>
);

}