import { CellFactory } from "../../Common/CellFactory/CellFactory";
import { Colors } from "../../Common/Common.types";
import { GameSignatureBuilber } from "../../Common/GameSignatureBuilder/GameSignatureBuilder";
import { CellModel } from "../../Modules/Cell/Cell.model";
import { PlayerModel } from "../../Modules/Player/Player.model";
import { CheckersFigureFactory } from "./CheckersFigureFactory";

export class CheckersGameSignatureBuilder extends GameSignatureBuilber {
    public setGameName(): void {
        this.gameSignature = {
            ...this.gameSignature,
            gameName: "Шашки"
        }
    }
    public setPlayers(): void {
        this.gameSignature = {
            ...this.gameSignature,
            players: [
                new PlayerModel(
                    `${Colors.BLACK}_Player`,
                    Colors.BLACK
                ),
                new PlayerModel(
                    `${Colors.WHITE}_Player`,
                    Colors.WHITE
                )
            ]
        }
    }
    public setCells(): void {
        const cellFactory: CellFactory = new CellFactory();
        const cells: CellModel[][] = [];
        const boardSize: number = 7;
        let cellCount: number = 0;
        for (let rowInx = 0; rowInx <= boardSize; rowInx++) {
            const row: CellModel[] = [];
            for (let colIdx = 0; colIdx <= boardSize; colIdx++) {
                let cell: CellModel;
                if (rowInx % 2 === 0) {
                    cell = (cellCount % 2 === 0)
                        ? cellFactory.getWhiteCell(
                            {
                                row: rowInx,
                                col: colIdx
                            }
                        )
                        : cellFactory.getBlackCell(
                            {
                                row: rowInx,
                                col: colIdx
                            }
                        );
                }
                else {
                    cell = (cellCount % 2 === 0)
                        ? cellFactory.getBlackCell(
                            {
                                row: rowInx,
                                col: colIdx
                            }
                        )
                        : cellFactory.getWhiteCell(
                            {
                                row: rowInx,
                                col: colIdx
                            }
                        );
                }
                row.push(cell)
                cellCount++;
            }
            cells.push(row);
        }

        this.gameSignature = {
            ...this.gameSignature,
            cells
        }
    }
    public setFigures(): void {
        const checkersFactory: CheckersFigureFactory = new CheckersFigureFactory();

        if (!this.gameSignature.cells.length) {
            this.setCells();
        }
        this.gameSignature.cells
            ?.forEach((cellRow: CellModel[]) => {
                cellRow
                    ?.forEach((cell: CellModel) => {
                        const { row } = cell.getCords();
                        if (row >= 0 && row <= 1) {
                            cell.setFigure(
                                checkersFactory.getWhiteChecker()
                            );
                        }
                        if (row >= 6 && row <= 7) {
                            cell.setFigure(
                                checkersFactory.getBlackChecker()
                            );
                        }
                    })
            })

        this.gameSignature = {
            ...this.gameSignature,
        }
    }
}