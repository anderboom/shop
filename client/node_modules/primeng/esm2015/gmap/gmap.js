import { NgModule, Component, ElementRef, Input, Output, EventEmitter, IterableDiffers, ChangeDetectorRef, NgZone, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class GMap {
    constructor(el, differs, cd, zone) {
        this.el = el;
        this.cd = cd;
        this.zone = zone;
        this.onMapClick = new EventEmitter();
        this.onOverlayClick = new EventEmitter();
        this.onOverlayDblClick = new EventEmitter();
        this.onOverlayDragStart = new EventEmitter();
        this.onOverlayDrag = new EventEmitter();
        this.onOverlayDragEnd = new EventEmitter();
        this.onMapReady = new EventEmitter();
        this.onMapDragEnd = new EventEmitter();
        this.onZoomChanged = new EventEmitter();
        this.differ = differs.find([]).create(null);
    }
    ngAfterViewChecked() {
        if (!this.map && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    }
    initialize() {
        this.map = new google.maps.Map(this.el.nativeElement.children[0], this.options);
        this.onMapReady.emit({
            map: this.map
        });
        if (this.overlays) {
            for (let overlay of this.overlays) {
                overlay.setMap(this.map);
                this.bindOverlayEvents(overlay);
            }
        }
        this.map.addListener('click', (event) => {
            this.zone.run(() => {
                this.onMapClick.emit(event);
            });
        });
        this.map.addListener('dragend', (event) => {
            this.zone.run(() => {
                this.onMapDragEnd.emit(event);
            });
        });
        this.map.addListener('zoom_changed', (event) => {
            this.zone.run(() => {
                this.onZoomChanged.emit(event);
            });
        });
    }
    bindOverlayEvents(overlay) {
        overlay.addListener('click', (event) => {
            this.zone.run(() => {
                this.onOverlayClick.emit({
                    originalEvent: event,
                    'overlay': overlay,
                    map: this.map
                });
            });
        });
        overlay.addListener('dblclick', (event) => {
            this.zone.run(() => {
                this.onOverlayDblClick.emit({
                    originalEvent: event,
                    'overlay': overlay,
                    map: this.map
                });
            });
        });
        if (overlay.getDraggable()) {
            this.bindDragEvents(overlay);
        }
    }
    ngDoCheck() {
        let changes = this.differ.diff(this.overlays);
        if (changes && this.map) {
            changes.forEachRemovedItem((record) => {
                google.maps.event.clearInstanceListeners(record.item);
                record.item.setMap(null);
            });
            changes.forEachAddedItem((record) => {
                record.item.setMap(this.map);
                record.item.addListener('click', (event) => {
                    this.zone.run(() => {
                        this.onOverlayClick.emit({
                            originalEvent: event,
                            overlay: record.item,
                            map: this.map
                        });
                    });
                });
                if (record.item.getDraggable()) {
                    this.bindDragEvents(record.item);
                }
            });
        }
    }
    bindDragEvents(overlay) {
        overlay.addListener('dragstart', (event) => {
            this.zone.run(() => {
                this.onOverlayDragStart.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: this.map
                });
            });
        });
        overlay.addListener('drag', (event) => {
            this.zone.run(() => {
                this.onOverlayDrag.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: this.map
                });
            });
        });
        overlay.addListener('dragend', (event) => {
            this.zone.run(() => {
                this.onOverlayDragEnd.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: this.map
                });
            });
        });
    }
    getMap() {
        return this.map;
    }
}
GMap.ɵfac = function GMap_Factory(t) { return new (t || GMap)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
GMap.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GMap, selectors: [["p-gmap"]], inputs: { style: "style", styleClass: "styleClass", options: "options", overlays: "overlays" }, outputs: { onMapClick: "onMapClick", onOverlayClick: "onOverlayClick", onOverlayDblClick: "onOverlayDblClick", onOverlayDragStart: "onOverlayDragStart", onOverlayDrag: "onOverlayDrag", onOverlayDragEnd: "onOverlayDragEnd", onMapReady: "onMapReady", onMapDragEnd: "onMapDragEnd", onZoomChanged: "onZoomChanged" }, decls: 1, vars: 3, consts: [[3, "ngStyle"]], template: function GMap_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgStyle], encapsulation: 2, changeDetection: 0 });
GMap.ctorParameters = () => [
    { type: ElementRef },
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
GMap.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    options: [{ type: Input }],
    overlays: [{ type: Input }],
    onMapClick: [{ type: Output }],
    onOverlayClick: [{ type: Output }],
    onOverlayDblClick: [{ type: Output }],
    onOverlayDragStart: [{ type: Output }],
    onOverlayDrag: [{ type: Output }],
    onOverlayDragEnd: [{ type: Output }],
    onMapReady: [{ type: Output }],
    onMapDragEnd: [{ type: Output }],
    onZoomChanged: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GMap, [{
        type: Component,
        args: [{
                selector: 'p-gmap',
                template: `<div [ngStyle]="style" [class]="styleClass"></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.IterableDiffers }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { onMapClick: [{
            type: Output
        }], onOverlayClick: [{
            type: Output
        }], onOverlayDblClick: [{
            type: Output
        }], onOverlayDragStart: [{
            type: Output
        }], onOverlayDrag: [{
            type: Output
        }], onOverlayDragEnd: [{
            type: Output
        }], onMapReady: [{
            type: Output
        }], onMapDragEnd: [{
            type: Output
        }], onZoomChanged: [{
            type: Output
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], options: [{
            type: Input
        }], overlays: [{
            type: Input
        }] }); })();
export class GMapModule {
}
GMapModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GMapModule });
GMapModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GMapModule_Factory(t) { return new (t || GMapModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GMapModule, { declarations: function () { return [GMap]; }, imports: function () { return [CommonModule]; }, exports: function () { return [GMap]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GMapModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [GMap],
                declarations: [GMap]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ21hcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2dtYXAvZ21hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQTBCLEtBQUssRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbk0sT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFVN0MsTUFBTSxPQUFPLElBQUk7QUFBRyxJQWdDaEIsWUFBbUIsRUFBYyxFQUFDLE9BQXdCLEVBQVMsRUFBcUIsRUFBUyxJQUFXO0FBQ2hILFFBRHVCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFpQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBQVEsU0FBSSxHQUFKLElBQUksQ0FBTztBQUFDLFFBdEJuRyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDakUsUUFDYyxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3JFLFFBQ2Msc0JBQWlCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDeEUsUUFDYyx1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN6RSxRQUNjLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDcEUsUUFDYyxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN2RSxRQUNjLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNqRSxRQUNjLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDbkUsUUFDYyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3BFLFFBTVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMs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RztBQUF3QixvQkFhMUosS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLHlCQUVWLE1BQU07QUFBSyw2QkFFWCxNQUFNO0FBQUssZ0NBRVgsTUFBTTtBQUFLLGlDQUVYLE1BQU07QUFBSyw0QkFFWCxNQUFNO0FBQUssK0JBRVgsTUFBTTtBQUFLLHlCQUVYLE1BQU07QUFBSywyQkFFWCxNQUFNO0FBQUssNEJBRVgsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWdKakIsTUFBTSxPQUFPLFVBQVU7QUFBRztzQ0FMekIsUUFBUSxTQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQ2YsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQ3ZCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEVsZW1lbnRSZWYsQWZ0ZXJWaWV3Q2hlY2tlZCxEb0NoZWNrLElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsSXRlcmFibGVEaWZmZXJzLENoYW5nZURldGVjdG9yUmVmLE5nWm9uZSxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtZ21hcCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj48L2Rpdj5gLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR01hcCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsRG9DaGVjayB7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuICAgICAgICBcbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICAgIFxuICAgIEBJbnB1dCgpIG92ZXJsYXlzOiBhbnlbXTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25NYXBDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uT3ZlcmxheUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbk92ZXJsYXlEYmxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uT3ZlcmxheURyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uT3ZlcmxheURyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbk92ZXJsYXlEcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25NYXBSZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25NYXBEcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIFxuICAgIEBPdXRwdXQoKSBvblpvb21DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGRpZmZlcjogYW55O1xuICAgIFxuICAgIG1hcDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHpvbmU6Tmdab25lKSB7XG4gICAgICAgIHRoaXMuZGlmZmVyID0gZGlmZmVycy5maW5kKFtdKS5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9uTWFwUmVhZHkuZW1pdCh7XG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheXMpIHtcbiAgICAgICAgICAgIGZvcihsZXQgb3ZlcmxheSBvZiB0aGlzLm92ZXJsYXlzKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZE92ZXJsYXlFdmVudHMob3ZlcmxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwLmFkZExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1hcENsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWFwLmFkZExpc3RlbmVyKCdkcmFnZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTWFwRHJhZ0VuZC5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1hcC5hZGRMaXN0ZW5lcignem9vbV9jaGFuZ2VkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uWm9vbUNoYW5nZWQuZW1pdChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGJpbmRPdmVybGF5RXZlbnRzKG92ZXJsYXk6IGFueSkge1xuICAgICAgICBvdmVybGF5LmFkZExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlDbGljay5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICdvdmVybGF5Jzogb3ZlcmxheSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiB0aGlzLm1hcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG92ZXJsYXkuYWRkTGlzdGVuZXIoJ2RibGNsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheURibENsaWNrLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJsYXknOiBvdmVybGF5LFxuICAgICAgICAgICAgICAgICAgICBtYXA6IHRoaXMubWFwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpZiAob3ZlcmxheS5nZXREcmFnZ2FibGUoKSkge1xuICAgICAgICAgICAgdGhpcy5iaW5kRHJhZ0V2ZW50cyhvdmVybGF5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIGxldCBjaGFuZ2VzID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLm92ZXJsYXlzKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjaGFuZ2VzICYmIHRoaXMubWFwKSB7XG4gICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuY2xlYXJJbnN0YW5jZUxpc3RlbmVycyhyZWNvcmQuaXRlbSk7XG4gICAgICAgICAgICAgICAgcmVjb3JkLml0ZW0uc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbSgocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLml0ZW0uc2V0TWFwKHRoaXMubWFwKTtcbiAgICAgICAgICAgICAgICByZWNvcmQuaXRlbS5hZGRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUNsaWNrLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk6IHJlY29yZC5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogdGhpcy5tYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLml0ZW0uZ2V0RHJhZ2dhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kRHJhZ0V2ZW50cyhyZWNvcmQuaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZERyYWdFdmVudHMob3ZlcmxheSkge1xuICAgICAgICBvdmVybGF5LmFkZExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25PdmVybGF5RHJhZ1N0YXJ0LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiB0aGlzLm1hcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgb3ZlcmxheS5hZGRMaXN0ZW5lcignZHJhZycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlEcmFnLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiB0aGlzLm1hcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgb3ZlcmxheS5hZGRMaXN0ZW5lcignZHJhZ2VuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlEcmFnRW5kLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiB0aGlzLm1hcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBnZXRNYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcDtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0dNYXBdLFxuICAgIGRlY2xhcmF0aW9uczogW0dNYXBdXG59KVxuZXhwb3J0IGNsYXNzIEdNYXBNb2R1bGUgeyB9Il19