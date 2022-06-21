import React, { Component } from 'react';

const MemoComp = (props) => {
    return ( 
        <div>MemoComp- {this.props.name}</div>
     );
}
 
export default React.memo( MemoComp);