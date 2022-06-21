import React ,{ useState } from "react";
import { useProductsAction } from "../../components/Provider/ProductsProvider";
import styles from "./search.module.css";
const SearchBar = ({filter}) => {
    const dispatch=useProductsAction();
    const [value,setValue]=useState("");
    const changeHandler=(e)=>{
        dispatch({type:"filter",selectedOption:filter});
        dispatch({type:"search",event:e});
        setValue(e.target.value)
    }
    return ( 
        <div className={styles.formcontrol}>
            <div>search for</div>
            <input type="text"
             placeholder="search for..." 
             onChange={changeHandler}
             value={value}
             />
        </div>
     );
}
 
export default SearchBar;