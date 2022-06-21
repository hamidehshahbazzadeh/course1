
import { useProducts } from "../Provider/ProductsProvider";
import styles from "./navBar.module.css";
const NavBar = () => {
   const products=useProducts()
 const  totalItem=products.filter((p)=>p.quantity>0).length;
    return ( 
        <header className={styles.navBar}>
           <h2> frontHooks.ir shopping</h2>
           <span>{totalItem}</span>
        </header>
     );
}
 
export default NavBar;