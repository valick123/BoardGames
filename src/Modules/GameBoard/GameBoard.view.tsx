import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { GameBoardModel } from "./GameBoard.model"
import { IGameBoardProps } from "./GameBoard.types";

export const GameBoard = forwardRef(
    function (props: IGameBoardProps) {
        const gameBoardModel: GameBoardModel = GameBoardModel.getInstance();
        gameBoardModel.setProps(props);
        const [reRenderCounter, setReRenderCounter] = useState<number>(0)
        const selfRef = useRef<any>();

        useImperativeHandle(selfRef as any, () => ({
            reRender() {
                setReRenderCounter((prevCounter) => prevCounter + 1);
            }
        }))

        useEffect(() => {
            console.log("render")
        }, [reRenderCounter])
        gameBoardModel.setViewRef(selfRef);
        return (
            <>
                {
                    gameBoardModel.drawGameBoard()
                }
            </>
        )
    }
) 