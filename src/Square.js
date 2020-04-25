import React from 'react';

class Square extends React.Component{
    renderSquare = ()=>{
        alert('this squere clicked ' + this.props.name)
    }
    render(){
        return(
            <button onClick = {this.renderSquare} className="square ">
                {/**This goes */}
            </button>
        )
    }
}

export default Square;