import { GameSelector } from "../GameSelector/GameSelector.view";
import { IAppProps } from "./App.types";
import { AppModel } from "./App.model";
import { allGames } from "../../Games/allGames";
import { GameBoard } from "../GameBoard/GameBoard.view";

export function App(props: IAppProps) {
    const appModel: AppModel = AppModel
        ?.getInstance();
    appModel
        ?.setProps(props);
    return (
        <>
            <GameSelector
                label="Выбор игры"
                gameOptions={allGames}
            />
            <GameBoard />
        </>
    )
}