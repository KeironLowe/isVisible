export declare class IsVisible {
    private watchList;
    private constructor();
    static watch(elements: Array<HTMLElement> | HTMLElement, callback: (entry: IsVisible.Entry) => void, triggerPoint?: number, removeOnceVisible?: boolean): void;
    static unwatch(element: HTMLElement): void;
    static check(element: HTMLElement, triggerPoint?: number): boolean;
    static getInstance(): IsVisible;
    private isVisible;
}
