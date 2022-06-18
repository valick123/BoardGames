import { ComponentModel } from "../../Common/ComponentModel";
import { IGameBoardProps } from "./GameBoard.types";

export class GameBoardModel extends ComponentModel<IGameBoardProps> {
    protected static instance: GameBoardModel | null = null;
    private constructor() {
        super();
    }
    public static getInstance(): GameBoardModel {
        if (this.instance === null) {
            this.instance = new GameBoardModel();
        }
        return this.instance;
    }
}