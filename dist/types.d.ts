interface Window {
    visiblee: import('./visiblee').Visiblee;
}
declare namespace Visiblee {
    interface Entry {
        element: HTMLElement;
        callback: (entry: Entry) => void;
        triggerPoint: number;
        removeOnceVisible: boolean;
    }
}
