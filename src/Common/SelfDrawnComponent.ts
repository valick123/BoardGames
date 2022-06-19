import { ReactNode } from "react";

export abstract class SelfDrawnComponent {
    protected abstract draw(...args: any): ReactNode;
}