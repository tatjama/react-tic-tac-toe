import React from 'react';

class Square extends React.Component{
    
    
   
    render(){
        return(
            <button 
            onClick = {()=>{this.props.onClick()}} 
            className="square ">
                {this.props.value}
            </button>
        )
    }
}

export default Square;