
import { useState } from "react";
import { useProductsAction } from "../Provider/ProductsProvider";
import Select from "react-select";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from '../../common/Search/Search';
const options =[
    {value:"" ,label:"All"},
    {value:"XS" ,label:"Xs"},
    {value:"S" ,label:"S"},
    {value:"M" ,label:"M"},
    {value:"L" ,label:"L"},
    {value:"XL" ,label:"XL"},
    {value:"XXL" ,label:"XXL"}
];
const sortOptions=[
    {value:"higheat",label:"highest"},
    {value:"lowest",label:"lowest"}
]
const Filter = () => {
    const dispatch=useProductsAction();
    const[filter,setFilter]=useState("");
    const[sort,setSort]=useState("");
    const filterHandler=(selectedOption)=>{
         console.log(selectedOption)
        dispatch({type:"filter",selectedOption});
        dispatch({type:"sort",selectedOption:sort});
        setFilter(selectedOption);
    }
    const sortHandler=(selectedOption)=>{
        console.log(selectedOption)
       dispatch({type:"sort",selectedOption});
       setSort(selectedOption);
   }
    return (  
       <section>
            <SearchBar filter={filter}/>
          <div className={styles.filter}>
          <p>filtered prouducts based on:</p> 
            <SelectComponent 
            title="filter by size"
            value={filter} 
            onChange={filterHandler}
             options={options}  
           />
            <SelectComponent
              title="Sort by price"
              value={sort} 
              onChange={sortHandler}
               options={sortOptions}
            />  
        </div>
        </section>
    );
}
 
export default Filter;