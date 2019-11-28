/// <reference path="types.d.ts" />
export declare class Visiblee {
    private watchList;
    private constructor();
    static watch(elements: Array<HTMLElement> | HTMLElement, callback: (entry: Visiblee.Entry) => void, triggerPoint?: number, removeOnceVisible?: boolean): void;
    static unwatch(element: HTMLElement): void;
    static check(element: HTMLElement, triggerPoint?: number): boolean;
    static getInstance(): Visiblee;
    private isVisible;
}
