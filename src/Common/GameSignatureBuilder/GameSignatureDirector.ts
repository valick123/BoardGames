import { GameSignatureBuilber } from "./GameSignatureBuilder";

export class GameSignatureDirector {
    protected builder: GameSignatureBuilber | null = null;
    public setBuilder(builder: GameSignatureBuilber): void {
        this.builder = builder;
    }
    public createGameSignature(): void {
        this.builder?.reset();
        this.builder?.setGameName();
        this.builder?.setPlayers();
        this.builder?.setCells();
        this.builder?.setFigures();
    }
}