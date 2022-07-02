import { IGameScheme } from "../Game/Game.types";
import { GameSignatureBuilber } from "./GameSignatureBuilder";

export class GameSignatureDirector {
    protected builder: GameSignatureBuilber;
    constructor(builder: GameSignatureBuilber) {
        this.builder = builder;
    }
    public setBuilder(builder: GameSignatureBuilber): void {
        this.builder = builder;
    }
    public createGameSignature(gameScheme: IGameScheme): void {
        this.builder?.reset();
        this.builder?.setGameScheme(gameScheme);
        this.builder?.setGameName();
        this.builder?.setPlayers();
        this.builder?.setCells();
    }
}