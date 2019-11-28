/// <reference path="./types.ts"/>

export class Visiblee {


    /**
     * The elements to watch.
     *
     * @private
     * @type {Array<Visiblee.Entry>}
     * @memberof Visiblee
     */
    private watchList: Array<Visiblee.Entry> = [];


    /**
     * Creates an instance of Visiblee.
     * 
     * @private
     * @memberof Visiblee
     */
    private constructor() {
        if(window.visiblee) { return; }

        window.addEventListener('scroll', () => {
            this.watchList.forEach(entry => {
                if(this.isVisible(entry)) {
                    entry.callback(entry);

                    if(entry.removeOnceVisible) {
                        Visiblee.unwatch(entry.element);
                    }
                }
            });
        });
    }


    /**
     * Add's the elements to the watch list.
     *
     * @static
     * @param {(Array<HTMLElement> | HTMLElement)} elements
     * @param {(entry:Visiblee.Entry) => void} callback
     * @param {number} [triggerPoint=0.5]
     * @param {boolean} [removeOnceVisible=true]
     * @memberof Visiblee
     */
    public static watch(elements: Array<HTMLElement> | HTMLElement, callback: (entry: Visiblee.Entry) => void, triggerPoint = 0.5, removeOnceVisible = true): void {
        const instance = this.getInstance();
        
        if(Array.isArray(elements)) {
            elements.forEach(element => {
                instance.watchList.push({element, callback, triggerPoint, removeOnceVisible});
            });
        } else {
            instance.watchList.push({element: elements, callback, triggerPoint, removeOnceVisible});
        }
    }


    /**
     * Removes the element from the watch list
     *
     * @param {HTMLElement} element
     * @memberof Visiblee
     */
    public static unwatch(element: HTMLElement): void {
        const instance = this.getInstance();
        const entry    = instance.watchList.find(entry => entry.element === element);

        if(entry) {
            instance.watchList = instance.watchList.filter(item => item !== entry);
        }
    }



    /**
     * Returns true if the provided element is currently visible.
     *
     * @param {HTMLElement} element
     * @param {number} [triggerPoint=0.5]
     * @returns {boolean}
     * @memberof Visiblee
     */
    public static check(element: HTMLElement, triggerPoint = 0.5): boolean {
        const instance = this.getInstance();

        return instance.isVisible({
            element,
            triggerPoint,
            callback: () => {},
            removeOnceVisible: false
        });
    }


    /**
     * Binds an instance of Visiblee to the window if it isn't already.
     *
     * @static
     * @memberof Visiblee
     */
    public static getInstance(): Visiblee {
        if(!window.visiblee) {
            window.visiblee = new Visiblee();
        }
        return window.visiblee;
    }


    /**
     * Returns true if the entry is currently visible.
     *
     * @private
     * @param {Visiblee.Entry} entry
     * @returns {boolean}
     * @memberof Visiblee
     */
    private isVisible(entry: Visiblee.Entry): boolean {
        const visibilityOffset = (window.innerHeight / (100 / (100 - (entry.triggerPoint * 100))));
        return (window.scrollY || window.pageYOffset) >= entry.element.offsetTop - visibilityOffset;
    }
}
