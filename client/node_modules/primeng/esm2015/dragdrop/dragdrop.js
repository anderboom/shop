import { NgModule, Directive, ElementRef, HostListener, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import * as ɵngcc0 from '@angular/core';
export class Draggable {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDrag = new EventEmitter();
    }
    get pDraggableDisabled() {
        return this._pDraggableDisabled;
    }
    set pDraggableDisabled(_pDraggableDisabled) {
        this._pDraggableDisabled = _pDraggableDisabled;
        if (this._pDraggableDisabled) {
            this.unbindMouseListeners();
        }
        else {
            this.el.nativeElement.draggable = true;
            this.bindMouseListeners();
        }
    }
    ngAfterViewInit() {
        if (!this.pDraggableDisabled) {
            this.el.nativeElement.draggable = true;
            this.bindMouseListeners();
        }
    }
    bindDragListener() {
        if (!this.dragListener) {
            this.zone.runOutsideAngular(() => {
                this.dragListener = this.drag.bind(this);
                this.el.nativeElement.addEventListener('drag', this.dragListener);
            });
        }
    }
    unbindDragListener() {
        if (this.dragListener) {
            this.zone.runOutsideAngular(() => {
                this.el.nativeElement.removeEventListener('drag', this.dragListener);
                this.dragListener = null;
            });
        }
    }
    bindMouseListeners() {
        if (!this.mouseDownListener && !this.mouseUpListener) {
            this.zone.runOutsideAngular(() => {
                this.mouseDownListener = this.mousedown.bind(this);
                this.mouseUpListener = this.mouseup.bind(this);
                this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
                this.el.nativeElement.addEventListener('mouseup', this.mouseUpListener);
            });
        }
    }
    unbindMouseListeners() {
        if (this.mouseDownListener && this.mouseUpListener) {
            this.zone.runOutsideAngular(() => {
                this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
                this.el.nativeElement.removeEventListener('mouseup', this.mouseUpListener);
                this.mouseDownListener = null;
                this.mouseUpListener = null;
            });
        }
    }
    drag(event) {
        this.onDrag.emit(event);
    }
    dragStart(event) {
        if (this.allowDrag() && !this.pDraggableDisabled) {
            if (this.dragEffect) {
                event.dataTransfer.effectAllowed = this.dragEffect;
            }
            event.dataTransfer.setData('text', this.scope);
            this.onDragStart.emit(event);
            this.bindDragListener();
        }
        else {
            event.preventDefault();
        }
    }
    dragEnd(event) {
        this.onDragEnd.emit(event);
        this.unbindDragListener();
    }
    mousedown(event) {
        this.handle = event.target;
    }
    mouseup(event) {
        this.handle = null;
    }
    allowDrag() {
        if (this.dragHandle && this.handle)
            return DomHandler.matches(this.handle, this.dragHandle);
        else
            return true;
    }
    ngOnDestroy() {
        this.unbindDragListener();
        this.unbindMouseListeners();
    }
}
Draggable.ɵfac = function Draggable_Factory(t) { return new (t || Draggable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
Draggable.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Draggable, selectors: [["", "pDraggable", ""]], hostBindings: function Draggable_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("dragstart", function Draggable_dragstart_HostBindingHandler($event) { return ctx.dragStart($event); })("dragend", function Draggable_dragend_HostBindingHandler($event) { return ctx.dragEnd($event); });
    } }, inputs: { pDraggableDisabled: "pDraggableDisabled", scope: ["pDraggable", "scope"], dragEffect: "dragEffect", dragHandle: "dragHandle" }, outputs: { onDragStart: "onDragStart", onDragEnd: "onDragEnd", onDrag: "onDrag" } });
Draggable.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
Draggable.propDecorators = {
    scope: [{ type: Input, args: ['pDraggable',] }],
    dragEffect: [{ type: Input }],
    dragHandle: [{ type: Input }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }],
    onDrag: [{ type: Output }],
    pDraggableDisabled: [{ type: Input }],
    dragStart: [{ type: HostListener, args: ['dragstart', ['$event'],] }],
    dragEnd: [{ type: HostListener, args: ['dragend', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Draggable, [{
        type: Directive,
        args: [{
                selector: '[pDraggable]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDragStart: [{
            type: Output
        }], onDragEnd: [{
            type: Output
        }], onDrag: [{
            type: Output
        }], pDraggableDisabled: [{
            type: Input
        }], dragStart: [{
            type: HostListener,
            args: ['dragstart', ['$event']]
        }], dragEnd: [{
            type: HostListener,
            args: ['dragend', ['$event']]
        }], scope: [{
            type: Input,
            args: ['pDraggable']
        }], dragEffect: [{
            type: Input
        }], dragHandle: [{
            type: Input
        }] }); })();
export class Droppable {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.onDragEnter = new EventEmitter();
        this.onDragLeave = new EventEmitter();
        this.onDrop = new EventEmitter();
    }
    ngAfterViewInit() {
        if (!this.pDroppableDisabled) {
            this.bindDragOverListener();
        }
    }
    bindDragOverListener() {
        if (!this.dragOverListener) {
            this.zone.runOutsideAngular(() => {
                this.dragOverListener = this.dragOver.bind(this);
                this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
            });
        }
    }
    unbindDragOverListener() {
        if (this.dragOverListener) {
            this.zone.runOutsideAngular(() => {
                this.el.nativeElement.removeEventListener('dragover', this.dragOverListener);
                this.dragOverListener = null;
            });
        }
    }
    dragOver(event) {
        event.preventDefault();
    }
    drop(event) {
        if (this.allowDrop(event)) {
            DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
            event.preventDefault();
            this.onDrop.emit(event);
        }
    }
    dragEnter(event) {
        event.preventDefault();
        if (this.dropEffect) {
            event.dataTransfer.dropEffect = this.dropEffect;
        }
        DomHandler.addClass(this.el.nativeElement, 'p-draggable-enter');
        this.onDragEnter.emit(event);
    }
    dragLeave(event) {
        event.preventDefault();
        DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
        this.onDragLeave.emit(event);
    }
    allowDrop(event) {
        let dragScope = event.dataTransfer.getData('text');
        if (typeof (this.scope) == "string" && dragScope == this.scope) {
            return true;
        }
        else if (this.scope instanceof Array) {
            for (let j = 0; j < this.scope.length; j++) {
                if (dragScope == this.scope[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    ngOnDestroy() {
        this.unbindDragOverListener();
    }
}
Droppable.ɵfac = function Droppable_Factory(t) { return new (t || Droppable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
Droppable.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Droppable, selectors: [["", "pDroppable", ""]], hostBindings: function Droppable_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function Droppable_drop_HostBindingHandler($event) { return ctx.drop($event); })("dragenter", function Droppable_dragenter_HostBindingHandler($event) { return ctx.dragEnter($event); })("dragleave", function Droppable_dragleave_HostBindingHandler($event) { return ctx.dragLeave($event); });
    } }, inputs: { scope: ["pDroppable", "scope"], pDroppableDisabled: "pDroppableDisabled", dropEffect: "dropEffect" }, outputs: { onDragEnter: "onDragEnter", onDragLeave: "onDragLeave", onDrop: "onDrop" } });
Droppable.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
Droppable.propDecorators = {
    scope: [{ type: Input, args: ['pDroppable',] }],
    pDroppableDisabled: [{ type: Input }],
    dropEffect: [{ type: Input }],
    onDragEnter: [{ type: Output }],
    onDragLeave: [{ type: Output }],
    onDrop: [{ type: Output }],
    drop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    dragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
    dragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Droppable, [{
        type: Directive,
        args: [{
                selector: '[pDroppable]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDragEnter: [{
            type: Output
        }], onDragLeave: [{
            type: Output
        }], onDrop: [{
            type: Output
        }], drop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }], dragEnter: [{
            type: HostListener,
            args: ['dragenter', ['$event']]
        }], dragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }], scope: [{
            type: Input,
            args: ['pDroppable']
        }], pDroppableDisabled: [{
            type: Input
        }], dropEffect: [{
            type: Input
        }] }); })();
export class DragDropModule {
}
DragDropModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DragDropModule });
DragDropModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DragDropModule_Factory(t) { return new (t || DragDropModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DragDropModule, { declarations: function () { return [Draggable, Droppable]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Draggable, Droppable]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragDropModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Draggable, Droppable],
                declarations: [Draggable, Droppable]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9kcmFnZHJvcC9kcmFnZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBeUIsVUFBVSxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEksT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxTQUFTO0FBQUcsSUF3QnJCLFlBQW1CLEVBQWMsRUFBUyxJQUFZO0FBQUksUUFBdkMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQVEsU0FBSSxHQUFKLElBQUksQ0FBUTtBQUFDLFFBaEI3QyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2xFLFFBQ2MsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2hFLFFBQ2MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzdELElBVzZELENBQUM7QUFDOUQsSUFDSSxJQUFhLGtCQUFrQjtBQUFLLFFBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0FBQ3hDLElBQUksQ0FBQztBQUNMLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxtQkFBMkI7QUFDdEQsUUFBUSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7QUFDdkQsUUFDUSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUN0QyxZQUFZLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ3hDLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ25ELFlBQVks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QUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUMsa0JBQzlCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUMsY0FDdEM7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxEaXJlY3RpdmUsT25EZXN0cm95LEFmdGVyVmlld0luaXQsRWxlbWVudFJlZixIb3N0TGlzdGVuZXIsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0RvbUhhbmRsZXJ9IGZyb20gJ3ByaW1lbmcvZG9tJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcERyYWdnYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgXG4gICAgQElucHV0KCdwRHJhZ2dhYmxlJykgc2NvcGU6IHN0cmluZztcbiAgICAgICAgXG4gICAgQElucHV0KCkgZHJhZ0VmZmVjdDogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIGRyYWdIYW5kbGU6IHN0cmluZztcbiAgICBcbiAgICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIGhhbmRsZTogYW55O1xuXG4gICAgZHJhZ0xpc3RlbmVyOiBhbnk7XG5cbiAgICBtb3VzZURvd25MaXN0ZW5lcjogYW55O1xuXG4gICAgbW91c2VVcExpc3RlbmVyOiBhbnk7XG5cbiAgICBfcERyYWdnYWJsZURpc2FibGVkOiBib29sZWFuO1xuICAgICAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBASW5wdXQoKSBnZXQgcERyYWdnYWJsZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcERyYWdnYWJsZURpc2FibGVkO1xuICAgIH1cbiAgICBzZXQgcERyYWdnYWJsZURpc2FibGVkKF9wRHJhZ2dhYmxlRGlzYWJsZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9wRHJhZ2dhYmxlRGlzYWJsZWQgPSBfcERyYWdnYWJsZURpc2FibGVkO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX3BEcmFnZ2FibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy51bmJpbmRNb3VzZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJpbmRNb3VzZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBEcmFnZ2FibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJpbmRNb3VzZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZERyYWdMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYWdMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdMaXN0ZW5lciA9IHRoaXMuZHJhZy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5kcmFnTGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREcmFnTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZycsIHRoaXMuZHJhZ0xpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRNb3VzZUxpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bkxpc3RlbmVyICYmICF0aGlzLm1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5tb3VzZWRvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9IHRoaXMubW91c2V1cC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlRG93bkxpc3RlbmVyICYmIHRoaXMubW91c2VVcExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWcoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgXG4gICAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93RHJhZygpICYmICF0aGlzLnBEcmFnZ2FibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ0VmZmVjdCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5kcmFnRWZmZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kRHJhZ0xpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxuICAgIGRyYWdFbmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMudW5iaW5kRHJhZ0xpc3RlbmVyKCk7XG4gICAgfVxuICAgIFxuICAgIG1vdXNlZG93bihldmVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZSA9IGV2ZW50LnRhcmdldDtcbiAgICB9XG5cbiAgICBtb3VzZXVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgYWxsb3dEcmFnKCkgOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZSAmJiB0aGlzLmhhbmRsZSlcbiAgICAgICAgICAgIHJldHVybiBEb21IYW5kbGVyLm1hdGNoZXModGhpcy5oYW5kbGUsIHRoaXMuZHJhZ0hhbmRsZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZERyYWdMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twRHJvcHBhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBcbiAgICBASW5wdXQoJ3BEcm9wcGFibGUnKSBzY29wZTogc3RyaW5nfHN0cmluZ1tdO1xuXG4gICAgQElucHV0KCkgcERyb3BwYWJsZURpc2FibGVkOiBib29sZWFuO1xuICAgICAgICBcbiAgICBASW5wdXQoKSBkcm9wRWZmZWN0OiBzdHJpbmc7XG4gICAgICAgIFxuICAgIEBPdXRwdXQoKSBvbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25Ecm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBkcmFnT3Zlckxpc3RlbmVyOiBhbnk7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wRHJvcHBhYmxlRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZERyYWdPdmVyTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmREcmFnT3Zlckxpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZHJhZ092ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdPdmVyTGlzdGVuZXIgPSB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlckxpc3RlbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRHJhZ092ZXJMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ092ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgICAgICAgICAgXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gICAgZHJvcChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3AoZXZlbnQpKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3AtZHJhZ2dhYmxlLWVudGVyJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5vbkRyb3AuZW1pdChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJywgWyckZXZlbnQnXSkgXG4gICAgZHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5kcm9wRWZmZWN0KSB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZHJvcEVmZmVjdDtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1kcmFnZ2FibGUtZW50ZXInKTtcbiAgICAgICAgdGhpcy5vbkRyYWdFbnRlci5lbWl0KGV2ZW50KTtcbiAgICB9XG4gICAgXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgXG4gICAgZHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1kcmFnZ2FibGUtZW50ZXInKTtcbiAgICAgICAgdGhpcy5vbkRyYWdMZWF2ZS5lbWl0KGV2ZW50KTtcbiAgICB9XG4gICAgICAgIFxuICAgIGFsbG93RHJvcChldmVudCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZHJhZ1Njb3BlID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5zY29wZSkgPT0gXCJzdHJpbmdcIiAmJiBkcmFnU2NvcGUgPT0gdGhpcy5zY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29wZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5zY29wZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChkcmFnU2NvcGUgPT0gdGhpcy5zY29wZVtqXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZERyYWdPdmVyTGlzdGVuZXIoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RyYWdnYWJsZSxEcm9wcGFibGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0RyYWdnYWJsZSxEcm9wcGFibGVdXG59KVxuZXhwb3J0IGNsYXNzIERyYWdEcm9wTW9kdWxlIHsgfSJdfQ==