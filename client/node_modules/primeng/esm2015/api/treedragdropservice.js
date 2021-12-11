import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class TreeDragDropService {
    constructor() {
        this.dragStartSource = new Subject();
        this.dragStopSource = new Subject();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    startDrag(event) {
        this.dragStartSource.next(event);
    }
    stopDrag(event) {
        this.dragStopSource.next(event);
    }
}
TreeDragDropService.ɵfac = function TreeDragDropService_Factory(t) { return new (t || TreeDragDropService)(); };
TreeDragDropService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TreeDragDropService, factory: TreeDragDropService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeDragDropService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZWRyYWdkcm9wc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS90cmVlZHJhZ2Ryb3BzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJL0IsTUFBTSxPQUFPLG1CQUFtQjtBQUNoQyxJQUZBO0FBQ0UsUUFFVSxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFxQixDQUFDO0FBQy9ELFFBQVksbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztBQUM5RCxRQUNJLGVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3JELFFBQUksY0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDbkQsSUFRQSxDQUFDO0FBQUMsSUFQRSxTQUFTLENBQUMsS0FBd0I7QUFDdEMsUUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTCxJQUNJLFFBQVEsQ0FBQyxLQUF3QjtBQUNyQyxRQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLElBQUksQ0FBQztBQUNMOytDQWhCQyxVQUFVOzs7O2dEQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmVlTm9kZURyYWdFdmVudCB9IGZyb20gJy4vdHJlZW5vZGVkcmFnZXZlbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZURyYWdEcm9wU2VydmljZSB7XG4gICAgXG4gICAgcHJpdmF0ZSBkcmFnU3RhcnRTb3VyY2UgPSBuZXcgU3ViamVjdDxUcmVlTm9kZURyYWdFdmVudD4oKTtcbiAgICBwcml2YXRlIGRyYWdTdG9wU291cmNlID0gbmV3IFN1YmplY3Q8VHJlZU5vZGVEcmFnRXZlbnQ+KCk7XG4gICAgXG4gICAgZHJhZ1N0YXJ0JCA9IHRoaXMuZHJhZ1N0YXJ0U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIGRyYWdTdG9wJCA9IHRoaXMuZHJhZ1N0b3BTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgXG4gICAgc3RhcnREcmFnKGV2ZW50OiBUcmVlTm9kZURyYWdFdmVudCkge1xuICAgICAgICB0aGlzLmRyYWdTdGFydFNvdXJjZS5uZXh0KGV2ZW50KTtcbiAgICB9XG4gICAgXG4gICAgc3RvcERyYWcoZXZlbnQ6IFRyZWVOb2RlRHJhZ0V2ZW50KSB7XG4gICAgICAgIHRoaXMuZHJhZ1N0b3BTb3VyY2UubmV4dChldmVudCk7XG4gICAgfVxufSJdfQ==