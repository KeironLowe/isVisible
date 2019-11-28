interface Window {
    isVisible: import('./isVisible').IsVisible;
}

declare namespace IsVisible {

    export interface Entry {
        element: HTMLElement;
        callback: (entry: Entry) => void;
        triggerPoint: number;
        removeOnceVisible: boolean;
    }
}
