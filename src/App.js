
import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList';
import "./App.css"
import NavBar from './components/NavBar/NavBar';
import Wrapper from './components/hoc/wrapper';
import ProductsProvider from './components/Provider/ProductsProvider';
import Filter from './components/Filter/Filter';

// class App extends Component{
//     constructor(props){
//         super(props)
//         console.log('App.js constructor')
//     }
//   state = { 
//     products:[
//         {title:"React.js", price:"99 $", id:1 ,quantity:1},
//         {title:"Node.js", price:"89 $", id:2 ,quantity:2},
//         {title:"javascreapt.js", price:"79 $", id:3, quantity:3},
//       ],
//       isShow:true
//  } ;

//  removeHandler=(id)=>{
//   const filterd= this.state.products.filter((p)=>p.id!==id);
//      this.setState({products:filterd});
//   };
//   incrementHandler=(id)=>{
//      const index=this.state.products.findIndex((item)=>item.id===id);
//      const product={...this.state.products[index]};
//      product.quantity++;
//      const products=[...this.state.products];
     
//      products[index]=product;
//      this.setState({products})
//   };
//   changeHandler=(e,id)=>{
//      const index=this.state.products.findIndex((item)=>item.id===id);
//      const product={...this.state.products[index]};
//      product.title=e.target.value;
//      const products=[...this.state.products];
//      products[index]=product;
//      this.setState({products})
//   };
//   decrementHandler=(id) =>{
//     const index=this.state.products.findIndex((item)=>item.id===id);
//     const product={...this.state.products[index]};
//     if(product.quantity===1){
//      const filterdProduct=product.filter((p)=>p.id!==id);
//      this.setState({products:filterdProduct})
//  }
//  else{
 
//      const products=[...this.state.products]
//      product.quantity--;
//      products[index]=product;
//      this.setState({products});
//  };
//   };
// componentDidMount() {
//     console.log("componentDidMount")
// };
// componentDidUpdate(prevProps, prevState) {
//     console.log('App.js  componentDidUpdate ')
//     console.log('App.js',prevState);
// };
//     render() {
//         console.log("App.js render")
//         console.log(this.props);
//         return(
//            <>
//                 {/* <CounterProvider>
            
//                 <CounterOne/>
//                 </CounterProvider> */}
//                  {/* <ClassRef/> */}
//                   {/* <FunctionalREf/>  */}
//                 {/* <ParentComp/> */}
//                 {/* <ClickCounter name="hamideh"/>
//                 <HoverCounter/> */}
//                 {/* // <button onClick={()=>this.setState({isShow: !this.state.isShow})}>
//                 //  {this.state.isShow?'hide':'show'}</button> 
//                 //   {this.state.isShow && <FunctionalTimer/>} */}
//                   {/* <ClassTimer /> */}
//                  {/* <ClassCounter />  */}
//                 {/* <FunctionalCounter /> */}
//                 {/* <NavBar totalItem={this.state.products.filter((p)=>p.quantity>0).length}/>
//                 <ProductList products={this.state.products}
//                 onRemove={this.removeHandler}
//                 onIncrement={this.incrementHandler}
//                 onChange={this.changeHandler}
//                 onDecrement={this.decrementHandler}
//                  />
//                */}
//               </>  
//         );
//     };
// };

const App = () => {
  
  return ( 
    <>
    <ProductsProvider>
             <NavBar />
             <Filter/>
             <ProductList />
           </ProductsProvider>      
</>
   );
}
 
 export default Wrapper(App,"countainer");