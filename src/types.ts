interface Window {
    visiblee: import('./visiblee').Visiblee;
}

declare namespace Visiblee {

    export interface Entry {
        element: HTMLElement;
        callback: (entry: Entry) => void;
        triggerPoint: number;
        removeOnceVisible: boolean;
    }
}
