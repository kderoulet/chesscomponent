import React from 'react'
import BoardSquare from './BoardSquare'


const BoardRow = (props) => {    
    return(
        <tr>
            {props.rankState.map((squareVal, index) =>
                <BoardSquare
                    rank={props.rank}
                    squareVal={squareVal}
                    key={index}
                    index={index}
                    handleMovement={props.handleMovement}
                    tileSize={props.tileSize}
                    tile1color={props.tile1color}
                    tile2color={props.tile2color}
                    pieceSize={props.pieceSize}
                    highlight={props.highlight}
                    pieceColor={props.pieceColor}
                />
            )}
        </tr>
    )
}

export default BoardRow