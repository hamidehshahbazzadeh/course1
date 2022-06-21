import React, { Component } from 'react';
class RegComp extends Component {
   
   
    render() {
        console.log('Reg comp--') ;
        return ( 
          <div>RegCom-- {this.props.name}</div>
         );
    }
}
 
export default RegComp;