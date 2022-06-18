export class ComponentModel<PropsType>{
    protected props: PropsType | null = null;
    protected viewRef: React.MutableRefObject<any> | null = null
    public setProps(props: PropsType): void {
        this.props = props;
    }
    public setViewRef(viewRef: React.MutableRefObject<any>): void {
        this.viewRef = viewRef;
    }
}