import styles from "./product.module.css"
import { BiTrash } from "react-icons/bi";

const Product=({product,onChange,onDecrement,onIncrement,onRemove}) =>{
    console.log("product.js render")
    return(
      
        <div className={styles.Product} >
           <p>product name:{product.title} cours</p>
           <p>Product price:{product.price}</p>
           <span className={styles.quantity}>{product.quantity}</span>
           {/* <input type="text" className={styles.input} onChange={onChange}
            value={product.title}></input> */}
           <button onClick={onDecrement}
            className={`${styles.button}
            ${product.quantity===1 && styles.remove}`}>
                {product.quantity>1?"-":<BiTrash/>} </button>
           <button onClick={onIncrement}
            className={`${styles.button} 
           ${styles.incriment}`}>+</button>
           <button onClick={onRemove} 
           className={styles.button}>delete</button>
           </div>
        
    )
    
}
 
export default Product;