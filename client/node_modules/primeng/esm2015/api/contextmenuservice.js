import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class ContextMenuService {
    constructor() {
        this.activeItemKeyChange = new Subject();
        this.activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
    }
    changeKey(key) {
        this.activeItemKey = key;
        this.activeItemKeyChange.next(this.activeItemKey);
    }
    reset() {
        this.activeItemKey = null;
        this.activeItemKeyChange.next(this.activeItemKey);
    }
}
ContextMenuService.ɵfac = function ContextMenuService_Factory(t) { return new (t || ContextMenuService)(); };
ContextMenuService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ContextMenuService, factory: ContextMenuService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenuService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dG1lbnVzZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2NvbnRleHRtZW51c2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRy9CLE1BQU0sT0FBTyxrQkFBa0I7QUFDL0IsSUFGQTtBQUNFLFFBRVUsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztBQUN4RCxRQUNJLHlCQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNuRSxJQVlBLENBQUM7QUFDRCxJQVZJLFNBQVMsQ0FBQyxHQUFHO0FBQ2pCLFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDakMsUUFBUSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxRCxJQUFJLENBQUM7QUFDTCxJQUNJLEtBQUs7QUFDVCxRQUFRLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUQsSUFBSSxDQUFDO0FBQ0w7OENBbEJDLFVBQVU7Ozs7Z0RBQ1Q7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51U2VydmljZSB7XG5cbiAgICBwcml2YXRlIGFjdGl2ZUl0ZW1LZXlDaGFuZ2UgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgICBhY3RpdmVJdGVtS2V5Q2hhbmdlJCA9IHRoaXMuYWN0aXZlSXRlbUtleUNoYW5nZS5hc09ic2VydmFibGUoKTtcblxuICAgIGFjdGl2ZUl0ZW1LZXk6IHN0cmluZztcblxuICAgIGNoYW5nZUtleShrZXkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtS2V5ID0ga2V5O1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1LZXlDaGFuZ2UubmV4dCh0aGlzLmFjdGl2ZUl0ZW1LZXkpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1LZXkgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1LZXlDaGFuZ2UubmV4dCh0aGlzLmFjdGl2ZUl0ZW1LZXkpO1xuICAgIH1cbn1cbiJdfQ==