export class ComponentModel<PropsType = any>{
    protected props: PropsType | null = null;
    public setProps(props: PropsType): void {
        this.props = props;
    }
}