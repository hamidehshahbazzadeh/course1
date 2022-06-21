import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';
class ParentComp extends Component {
 
    state = { 
        name:'hamideh'
     }
     componentDidMount() {
         setInterval(()=>{
         this.setState({name:'hamideh'})

         },1000);
     };
    render() { 
        console.log('parent comp---');
        return ( <div>
            parent component --hamideh
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
            <MemoComp name={this.state.name}/>
        </div> );
    }
}
export default ParentComp;