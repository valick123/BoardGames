import { ReactNode } from "react";
import { ComponentModel } from "../../Common/ComponentModel";
import { IGameSignature } from "../../Common/Game/Game.types";
import { CellModel } from "../Cell/Cell.model";
import { IGameBoardProps } from "./GameBoard.types";

export class GameBoardModel extends ComponentModel<IGameBoardProps> {
    protected static instance: GameBoardModel | null = null;
    protected gameSignature: IGameSignature = {} as IGameSignature;
    private constructor() {
        super();
    }
    public setGameSignature(gameSignature: IGameSignature) {
        this.gameSignature = gameSignature;
        this.viewRef?.current.reRender();
    }

    public setThemeSettings(themeSettings: any): void {
        this.themeSettings = themeSettings;
        this.viewRef?.current.reRender();
    }

    public drawGameBoard(): ReactNode[] {
        return this.gameSignature.cells
            ?.map((cellRow: CellModel[]) => {
                return cellRow
                    ?.map((cell: CellModel) => {
                        return cell.draw({});
                    })
            })
    }

    public static getInstance(): GameBoardModel {
        if (this.instance === null) {
            this.instance = new GameBoardModel();
        }
        return this.instance;
    }
}