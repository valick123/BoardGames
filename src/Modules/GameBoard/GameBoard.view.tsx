import { GameBoardModel } from "./GameBoard.model"
import { IGameBoardProps } from "./GameBoard.types";

export function GameBoard(props: IGameBoardProps) {
    const gameBoardModel: GameBoardModel = GameBoardModel.getInstance();
    gameBoardModel.setProps(props);
    return (
        <>
            GAME BOARD
        </>
    )
}