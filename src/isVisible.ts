export class IsVisible {


    /**
     * The elements to watch.
     *
     * @private
     * @type {Array<IsVisible.Entry>}
     * @memberof IsVisible
     */
    private watchList: Array<IsVisible.Entry> = [];


    /**
     * Creates an instance of IsVisible.
     * 
     * @private
     * @memberof IsVisible
     */
    private constructor() {
        if(window.isVisible) { return; }

        window.addEventListener('scroll', () => {
            this.watchList.forEach(entry => {
                if(this.isVisible(entry)) {
                    entry.callback(entry);

                    if(entry.removeOnceVisible) {
                        IsVisible.unwatch(entry.element);
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
     * @param {(entry:IsVisible.Entry) => void} callback
     * @param {number} [triggerPoint=0.5]
     * @param {boolean} [removeOnceVisible=true]
     * @memberof IsVisible
     */
    public static watch(elements: Array<HTMLElement> | HTMLElement, callback: (entry: IsVisible.Entry) => void, triggerPoint = 0.5, removeOnceVisible = true): void {
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
     * @memberof IsVisible
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
     * @memberof IsVisible
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
     * Binds an instance of IsVisible to the window if it isn't already.
     *
     * @static
     * @memberof IsVisible
     */
    public static getInstance(): IsVisible {
        if(!window.isVisible) {
            window.isVisible = new IsVisible();
        }
        return window.isVisible;
    }


    /**
     * Returns true if the entry is currently visible.
     *
     * @private
     * @param {IsVisible.Entry} entry
     * @returns {boolean}
     * @memberof IsVisible
     */
    private isVisible(entry: IsVisible.Entry): boolean {
        const visibilityOffset = (window.innerHeight / (100 / (100 - (entry.triggerPoint * 100))));
        return (window.scrollY || window.pageYOffset) >= entry.element.offsetTop - visibilityOffset;
    }
}
