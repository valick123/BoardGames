import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { IGameSignature } from "../../Common/Game/Game.types";
import { GameBoardModel } from "./GameBoard.model"
import { IGameBoardProps } from "./GameBoard.types";

export const GameBoard = forwardRef(
    function (props: IGameBoardProps) {
        const gameBoardModel: GameBoardModel = GameBoardModel.getInstance();
        gameBoardModel.setProps(props);
        const [gameSignature, setGameSignature] = useState<IGameSignature>()
        const selfRef = useRef<any>();

        useImperativeHandle(selfRef as any, () => ({
            reRender(gameSignature: IGameSignature) {
                setGameSignature(gameSignature);
            }
        }))

        useEffect(() => {
            console.log("render")
        }, [gameSignature])
        gameBoardModel.setViewRef(selfRef);
        return (
            <>
                {
                    gameBoardModel.drawCells()
                }
            </>
        )
    }
) 