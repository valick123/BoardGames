import { Game } from "../../../Common/Game/Game";
import { GameBoardModel } from "../../GameBoard/GameBoard.model";

export class GameController {
    protected static instance: GameController | null = null;
    protected gameObj: Game | null = null
    protected gameBoardView: GameBoardModel = GameBoardModel.getInstance();
    private constructor() {

    }
    public setGame(nextGame?: Game): void {
        if (nextGame) {
            this.gameObj = nextGame;
            this.initGame();
            this.gameBoardView.setGameSignature(
                this.gameObj.getGameSignature()
            );
        }
    }
    public initGame(): void {
        this.gameObj?.initGame();
    }
    public static getInstance(): GameController {
        if (this.instance === null) {
            this.instance = new GameController();
        }
        return this.instance;
    }

}