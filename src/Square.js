import React from 'react';

function Square(props){
   return(
       <button
       onClick = {props.onClick}
       className = {"square "+props.value}>
           {props.value}
       </button>
   )
}

/*class Square extends React.Component{
    
    
   
    render(){
        return(
            <button 
            onClick = {()=>{this.props.onClick()}} 
            className="square ">
                {this.props.value}
            </button>
        )
    }
}*/

export default Square;