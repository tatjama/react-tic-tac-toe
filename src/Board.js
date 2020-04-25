import React from 'react';
import Square from './Square';


class Board extends React.Component{
    render(){
        return(
            <div className="status">
                <div className = "board-row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className = "board-row">
                    <Square/>                
                    <Square/>                
                    <Square/>
                </div>
                <div className = "board-row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
            </div>
        )
    }
}
export default Board;