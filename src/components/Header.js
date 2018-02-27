import React from 'react'
import PromotionTile from './PromotionTile'

const Header = (props) => {
    let content1
    let content2
    let btnDisplay = "none"
    if (props.gameOver) {
        if (props.winner === 1) {
            content1 = "White Wins"
            btnDisplay = "block"
        }
        else if (props.winner === 2) {
            content1 = "Black Wins"
            btnDisplay = "block"
        }
        else {
            content1 = "Draw"
            btnDisplay = "block"
        }
    }
    else if (props.turnCounter === 1) {
        content1 = "White's Turn"
        if (props.whiteInCheck) {
            content2 = "Check"
        }
    }
    else if (props.turnCounter === 0) {
        content1 = "Black's Turn"
        if (props.blackInCheck) {
            content2 = "Check"
        }
    }
    if (props.turnCounter === 50) {
        let style={marginBottom: 25}
        let promotionPieces = []
        if (props.promoteWhite) {
            promotionPieces = [3, 5, 7, 9]
        }
        else if (props.promoteBlack) {
            promotionPieces = [4, 6, 8, 10]
        }
        return(
            <table>
                <tbody>
                    <tr>
                        {promotionPieces.map((val, index) =>
                            <PromotionTile
                                handleSelection={props.handleSelection}
                                val={val}
                                key={index}
                            />
                        )} 
                    </tr>
                </tbody>
            </table>           
        )
    }
    else return(
        <table>
            <tbody>
                <tr>
                    <div style={{fontSize: 40, textAlign: "left"}}>{content1}</div>
                    <div style={{fontSize: 40, textAlign: "left"}}>{content2}</div>
                    <div onClick={(e) => props.getInitialBoardState()} style={{textAlign: "left", display: btnDisplay}}><button className="btn btn-info">Reset Board</button></div>
                </tr>
            </tbody>
        </table>           
    )
}

export default Header