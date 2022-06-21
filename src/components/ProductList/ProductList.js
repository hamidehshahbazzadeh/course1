
import Product from '../Product';
import { useProducts, useProductsAction } from '../Provider/ProductsProvider';


 const ProductList = () => {
     const products=useProducts();
    const dispatch=useProductsAction();

    const renderProduct=()=>{           
     if(products.length===0)
         return <div>this is no product in cart</div>
         return (
            <div>
                 {products.map((product,index) => {
                    return(
                        <Product
                        product={product}
                         key={index}
                         onRemove={()=>dispatch({type:"remove",id:product.id})}
                         onIncrement={()=>dispatch({type:"increment",id:product.id})}
                        //  onChange={(e)=>dispatch({type:"edit",id:product.id,event:e})}
                         onDecrement={()=>dispatch({type:"decrement",id:product.id})}
                         
                         />
                        
                    );
                })}
            </div>
        );
     };
      return <div>
          {!products.length  && <div>go to shopping</div> }                       
          {renderProduct()}</div>
     ;
 }
  

export default ProductList;