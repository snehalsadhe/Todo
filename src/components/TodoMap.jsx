export default function TodoMap({itemList,onDeleteClick}){

  
  return(

    <>

    <div>
    <ul>
  {
    itemList.map(i=> <li key={i.itemId}
                         style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #dee2e6'
                          //,backgroundColor:highlight.includes(i.item)?'#Fff44f':'white' 
                          }}
                     > 
                      <span style={{ flex: 1, textAlign: 'left' }}> {i.item} </span>

                      
                       <button type="button"
                               className="btn btn-danger"
                               style={{marginLeft: '20px'}}
                               onClick={()=>onDeleteClick(i.item)} 
                        >  Delete  </button>

                        {/* <button type="button" 
                                className="btn btn-outline-secondary" 
                                style={{marginLeft: '20px' }}
                                onClick={()=>changeBgColor(i.item)}>
                                
                        highlight</button> */}
                     
                     </li> 

                     
                )
  }
</ul>
    </div>
    </>
  )

}