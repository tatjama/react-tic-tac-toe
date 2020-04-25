import React from 'react';
import Square from './Square';


class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

   /* handleClick = (i)=>{
        this.setState({squares:this.state.squares[i]})
    }*/
    handleClick=(i)=>{
        console.log(this.state.squares)
        const squares = this.state.squares;
        squares[i] = 'X';
        this.setState({squares:squares})
        
        
    }
    

    renderSquare = (i)=>{
       // this.setState({squares:Array[i].fill('X')});
        return(
            <Square 
            value={this.state.squares[i]}
            onClick = {()=>{this.handleClick(i)}}
             />
        )
    }
    render(){
        const status = "Next player: X";
        console.log(this.state.squares)
        return(
            <div>
                <div className="status">{status}</div>
                <div className = "board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
               
            </div>
        )
    }
}
export default Board;