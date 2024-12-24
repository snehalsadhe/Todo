import { useContext } from "react"
import styles from "./TodoMap.module.css"
import { ItemsContext } from "../contextStore/todoItemsContext";
export default function TodoMap(){

  const {itemList,deleteButton}=useContext(ItemsContext);
  return(

    <>

    <div>
    <ul>
  {
    itemList.map(i=> <li key={i.itemId}
                         className={styles.listt}
                     > 
                      <span className={styles.sp}> {i.item} </span>

                      
                       <button type="button"
                               className="btn btn-danger"
                               
                               onClick={()=>deleteButton(i.item)} 
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