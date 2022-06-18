import { useEffect } from "react";
import { GameSelectorModel } from "./GameSelector.model";
import { IGameSelectorProps } from "./GameSelector.types";

export function GameSelector(props: IGameSelectorProps) {
    const gameSelectorModel: GameSelectorModel = GameSelectorModel.getInstance();
    gameSelectorModel.setProps(props);

    useEffect(() => {
        gameSelectorModel.onSelectGame(props.gameOptions?.[0].label);
    }, [])

    return (
        <>
            <label
                htmlFor=""
            >
                {props.label}
            </label>
            <select
                id={props.label}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    gameSelectorModel.onSelectGame(event.target.value);
                }}
            >
                {
                    gameSelectorModel.getGameSelectorOptions()
                }
            </select>
        </>
    )
}