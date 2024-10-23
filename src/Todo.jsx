import { useState } from "react";
let k=0;
export default function Todo(){
const [item,setItem]= useState('');
const [itemList,setItemList]=useState([]);

function addItem(){
  setItemList([
    ...itemList,
    {
      itemId:Date.now(),
      item:item
    }
  ])
  setItem('');
}

return(
<>

<div style={{ marginTop:'100px' ,maxWidth: '500px', margin: 'auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom:'20px' }}>
<input type="text"
       placeholder="Enter here"
       style={{
        flex: 1,
        maxWidth: '300px',
        padding: '10px',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        marginRight: '10px'
    }}
       className="form-control form-control-sm"
       value={item}
       onChange={e=>setItem(e.target.value)}
/>

<button type="button" 
        className="btn btn-warning"
        onClick={addItem}
        >Add
</button>
</div>
<ul>
  {
    itemList.map(i=> <li key={i.itemId}
                         style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #dee2e6' }}
                     > 
                      <span style={{ flex: 1, textAlign: 'left' }}> {i.item} </span>

                       <button type="button"
                               className="btn btn-danger"
                               style={{marginLeft: '20px'
                               }}
                               onClick={()=>setItemList(itemList.filter(p=>p.itemId!=i.itemId))} 
                        >Delete</button>
                     
                     </li> 
                )
  }
</ul>

</div>
</>
);

}