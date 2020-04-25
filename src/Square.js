import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : null}
    }
    
   renderSquare = ()=>{
        alert(this.props.value)
        this.setState({value:'X'})
        //console.log(this.state.value)
        
    }
    render(){
        return(
            <button 
            onClick = {this.renderSquare} 
            className="square ">
                {this.state.value}
            </button>
        )
    }
}

export default Square;