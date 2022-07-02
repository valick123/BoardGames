import { Colors } from "../../../Common/Common.types";
import { ICell, IPlayer } from "../../../Common/Game/Game.types";
import { GameSignatureBuilber } from "../../../Common/GameSignatureBuilder/GameSignatureBuilder";
import { CellModel } from "../../../Modules/Cell/Cell.model";
import { FigureModel } from "../../../Modules/Figure/Figure.model";
import { PlayerModel } from "../../../Modules/Player/Player.model";

export class CheckersGameSignatureBuilder extends GameSignatureBuilber {
    public setGameName(): void {
        this.gameSignature = {
            ...this.gameSignature,
            gameName: this.gameScheme.gameName
        }
    }
    public setPlayers(): void {
        this.gameSignature = {
            ...this.gameSignature,
            players: this.gameScheme.players
                ?.map((player: IPlayer): PlayerModel => {
                    return this.elementsFactory
                        .playersFactory
                        .getPlayer(
                            player.name,
                            player.figureColor as Colors
                        )
                })
        }
    }
    public setCells(): void {
        this.gameSignature = {
            ...this.gameSignature,
            cells: this.gameScheme.cells
                ?.map((cellRow: ICell[]): CellModel[] => {
                    return cellRow
                        ?.map((cellCol: ICell): CellModel => {
                            const figure: FigureModel | null = cellCol.figure
                                ? this.elementsFactory
                                    .figureFactory
                                    .getFigure(
                                        cellCol.figure?.figureColor as Colors,
                                        cellCol.figure?.figureName
                                    )
                                : null;
                            return this.elementsFactory
                                .cellFactory
                                .getCell(
                                    cellCol.color as Colors,
                                    cellCol.cords,
                                    figure
                                );
                        })
                })
        }
    }
}