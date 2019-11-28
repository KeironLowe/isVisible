# Visiblee
Visiblee is a a tiny Typescript utility library for triggering a callback when the element comes into view. It's designed to be lightweight and performant.

```
import { Visiblee } from 'visiblee`;

Visiblee.watch(element, (entry) => {
    console.log('I am visible');
});
```

## Browser Support
It works in all modern browsers and IE11 with a couple of polyfills, which are [Array.find](https://www.npmjs.com/package/jspolyfill-array.prototype.find) and [Array.filter](https://www.npmjs.com/package/array.prototype.filter).

## API
Visiblee acts as a singleton class and you do not need to manually create a new instance. Upon use of any of the below methods, a new instance will automatically be created and bound to the window.

### `.watch(elements, callback, triggerPoint, removeOnceVisible): void`
Add's the provided elements to the list of elements to watch.

* `elements: Array<HTMLElement> | HTMLElement` - The elements to watch.
* `callback: (entry: Visiblee.Entry) => void` - The callback to execute when it bcomes visible.
* `triggerPoint: number = 0.5` - The percentage point of the viewport for the callback to trigger.
* `removeOnceVisible: boolean = true` - Whether to remove the element from the watch list once it's visible.
```
Visiblee.watch(element, (entry) => {
    console.log('I am visible');
}, 0.5, true);
```

### `.unwatch(element): void`
Removes the elements from the watch list.

* `element: HTMLElement` - The element to remove
```
Visiblee.unwatch(element);
```

### `.check(element, triggerPoint): boolean`
Returns true if the provided element is currently in view.
* `element: HTMLElement` - The elements to watch.
* `triggerPoint: number = 0.5` - The percentage point of the viewport for the callback to trigger.
```
Visiblee.check(element, 0.5)
```

### `.getInstance(): Visiblee`
Returns the Visiblee instance.

```
Visiblee.getInstance();
```
