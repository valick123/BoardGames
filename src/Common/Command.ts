export abstract class Command {
    protected abstract commandConsumer: any
    public abstract execute(...args: any): void
}