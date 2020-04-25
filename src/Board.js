import React from 'react';
import Square from './Square';


class Board extends React.Component{
    render(){
        return(
            <div className="status">
                <div className = "board-row">
                    <Square name = "1"/>
                    <Square name = "2"/>
                    <Square name = " 3"/>
                </div>
                <div className = "board-row">
                    <Square name = "4"/>                
                    <Square name = "5"/>                
                    <Square name = "6"/>
                </div>
                <div className = "board-row">
                    <Square name = "7"/>
                    <Square name ="8"/>
                    <Square name = "9"/>
                </div>
            </div>
        )
    }
}
export default Board;