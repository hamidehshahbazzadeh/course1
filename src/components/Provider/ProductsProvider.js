import React, {useReducer, useContext } from "react";
import { productsData } from "../../db/products";
import  _ from "lodash";

const ProductContext=React.createContext();
const ProductContextDispstcher=React.createContext();
// const initialState=[
//     {title:"React.js", price:"99 $", id:1 ,quantity:1},
//     {title:"Node.js", price:"89 $", id:2 ,quantity:2},
//     {title:"javascreapt.js", price:"79 $", id:3, quantity:3}]

const Reducer=(state,action)=>{
    switch (action.type){
        case "increment":{
            const index=state.findIndex((item)=>item.id===action.id);
            const product={...state[index]};
            product.quantity++;
            const updateProducts=[...state];
            updateProducts[index]=product;
            return updateProducts;
        };
         case "decrement":{
          const index=state.findIndex((item)=>item.id===action.id);
         const product={...state[index]};
         if(product.quantity===1){
          const filterdProducts=state.filter((p)=>p.id!==action.id);
           return filterdProducts
      }
      else{
      
          const updateProducts=[...state]
          product.quantity--;
         updateProducts[index]=product;
           return updateProducts;
      }
    };
        // case "edite":{
        //   const index=state.findIndex((item)=>item.id===action.id);
        //   const product={...state[index]};
        //   product.title=action.e.target.value;
        //   const updateProducts=[...state];
        //   updateProducts[index]=product;
        //      return updateProducts;
        // }
        case "remove":{
            const filterdProducts= state.filter((p)=>p.id!==action.id);
               return filterdProducts;
        } 
        case "filter":{
            console.log(action.selectedOption.value)
           if(action.selectedOption.value===""){
               return productsData;
           }else{
            const filterdProduct=productsData.filter((p)=>p.availableSizes.indexOf(action.selectedOption.value)>=0)
            return filterdProduct;
           }
        }
        case "sort":{
            const value=action.selectedOption.value;
            const products=[...state]
         if(value ==="lowest"){
            return _.orderBy(products,["price"],["asc"])
         }else{
            return _.orderBy(products,["price"],["desc"])
         }
        }
        case "search":{
            const value=action.event.target.value;
            if(value===""){
                return state;
            }else{
                const filterdProducts=state.filter((p)=>
                p.title.toLowerCase().includes(value.toLowerCase())
                );
                return filterdProducts;
            }
        }
};
}
const ProductsProvider = ({children}) => {
   const[products,dispatch]=useReducer(Reducer,productsData)
    return ( 
       <ProductContext.Provider value={products}>
           <ProductContextDispstcher.Provider value={dispatch}>
               {children}
           </ProductContextDispstcher.Provider>
       </ProductContext.Provider>
     );
}
 
export default ProductsProvider;

export const useProducts=()=>useContext(ProductContext);
export const useProductsAction=()=>useContext(ProductContextDispstcher);
