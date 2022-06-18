import { ReactNode } from "react";
import { ComponentModel } from "../../Common/ComponentModel";
import { Game } from "../../Common/Game";
import { SetGameCommand } from "../Controllers/GameController/Commands/setGame.command";
import { IGameSelectorOption, IGameSelectorProps } from "./GameSelector.types";

export class GameSelectorModel extends ComponentModel<IGameSelectorProps> {
    protected static instance: GameSelectorModel | null = null;
    private commands = {
        setGameCommand: SetGameCommand.getInstance()
    }
    private constructor() {
        super();
    }

    public getGameSelectorOptions(): ReactNode[] {
        return this.props?.gameOptions
            ?.map((gameOption: IGameSelectorOption) => {
                return (
                    <option
                        key={gameOption.label}
                        value={gameOption.label}
                    >
                        {
                            gameOption.label
                        }
                    </option>
                )
            }) ?? []
    }
    public onSelectGame(gameLabel: string): void {
        const gameObj: Game | undefined = this.props
            ?.gameOptions
            ?.find((gameOption: IGameSelectorOption): IGameSelectorOption["gameObj"] => {
                return gameOption.label === gameLabel;
            });
        if (gameObj) {
            this.commands.setGameCommand.execute(gameObj);
        }
    }
    public static getInstance(): GameSelectorModel {
        if (this.instance === null) {
            this.instance = new GameSelectorModel();
        }
        return this.instance;
    }

}