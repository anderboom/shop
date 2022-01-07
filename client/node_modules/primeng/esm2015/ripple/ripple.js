import { NgModule, Directive, ElementRef, NgZone, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { PrimeNGConfig } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
export class Ripple {
    constructor(el, zone, config) {
        this.el = el;
        this.zone = zone;
        this.config = config;
    }
    ngAfterViewInit() {
        if (this.config && this.config.ripple) {
            this.zone.runOutsideAngular(() => {
                this.create();
                this.mouseDownListener = this.onMouseDown.bind(this);
                this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
            });
        }
    }
    onMouseDown(event) {
        let ink = this.getInk();
        if (!ink || getComputedStyle(ink, null).display === 'none') {
            return;
        }
        DomHandler.removeClass(ink, 'p-ink-active');
        if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
            let d = Math.max(DomHandler.getOuterWidth(this.el.nativeElement), DomHandler.getOuterHeight(this.el.nativeElement));
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        let offset = DomHandler.getOffset(this.el.nativeElement);
        let x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
        let y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        DomHandler.addClass(ink, 'p-ink-active');
    }
    getInk() {
        for (let i = 0; i < this.el.nativeElement.children.length; i++) {
            if (this.el.nativeElement.children[i].className.indexOf('p-ink') !== -1) {
                return this.el.nativeElement.children[i];
            }
        }
        return null;
    }
    resetInk() {
        let ink = this.getInk();
        if (ink) {
            DomHandler.removeClass(ink, 'p-ink-active');
        }
    }
    onAnimationEnd(event) {
        DomHandler.removeClass(event.currentTarget, 'p-ink-active');
    }
    create() {
        let ink = document.createElement('span');
        ink.className = 'p-ink';
        this.el.nativeElement.appendChild(ink);
        this.animationListener = this.onAnimationEnd.bind(this);
        ink.addEventListener('animationend', this.animationListener);
    }
    remove() {
        let ink = this.getInk();
        if (ink) {
            this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
            ink.removeEventListener('animationend', this.animationListener);
            DomHandler.removeElement(ink);
        }
    }
    ngOnDestroy() {
        if (this.config && this.config.ripple) {
            this.remove();
        }
    }
}
Ripple.ɵfac = function Ripple_Factory(t) { return new (t || Ripple)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PrimeNGConfig, 8)); };
Ripple.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Ripple, selectors: [["", "pRipple", ""]], hostVars: 2, hostBindings: function Ripple_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-ripple", true);
    } } });
Ripple.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: PrimeNGConfig, decorators: [{ type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Ripple, [{
        type: Directive,
        args: [{
                selector: '[pRipple]',
                host: {
                    '[class.p-ripple]': 'true'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.PrimeNGConfig, decorators: [{
                type: Optional
            }] }]; }, null); })();
export class RippleModule {
}
RippleModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RippleModule });
RippleModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RippleModule_Factory(t) { return new (t || RippleModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RippleModule, { declarations: function () { return [Ripple]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Ripple]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RippleModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Ripple],
                declarations: [Ripple]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcmlwcGxlL3JpcHBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBaUIsVUFBVSxFQUFFLE1BQU0sRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBUTVDLE1BQU0sT0FBTyxNQUFNO0FBQUcsSUFFbEIsWUFBbUIsRUFBYyxFQUFTLElBQVksRUFBcUIsTUFBcUI7QUFBSSxRQUFqRixPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUSxTQUFJLEdBQUosSUFBSSxDQUFRO0FBQUMsUUFBb0IsV0FBTSxHQUFOLE1BQU0sQ0FBZTtBQUFDLElBQUcsQ0FBQztBQUN6RyxJQUtJLGVBQWU7QUFDbkIsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDL0MsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtBQUM3QyxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLGdCQUNnQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsZ0JBQWdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUM1RixZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2YsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ks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QVcsa0JBQ3JCLElBQUksRUFBRSxzQkFDRixrQkFBa0IsRUFBRSxNQUFNLGtCQUM3QixjQUNKOzs7V0FDSTtBQUFDO0FBQWdDLFlBWE8sVUFBVTtBQUFJLFlBQUYsTUFBTTtBQUFJLFlBRzFELGFBQWEsdUJBVXVDLFFBQVE7QUFBTTs7Ozs7Ozs7Ozs7a0NBQUU7QUF5RjdFLE1BQU0sT0FBTyxZQUFZO0FBQUc7d0NBTDNCLFFBQVEsU0FBQztNQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUNqQixZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FDekI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IFByaW1lTkdDb25maWcgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BSaXBwbGVdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1yaXBwbGVdJzogJ3RydWUnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBSaXBwbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lLCBAT3B0aW9uYWwoKSBwdWJsaWMgY29uZmlnOiBQcmltZU5HQ29uZmlnKSB7IH1cblxuICAgIGFuaW1hdGlvbkxpc3RlbmVyOiBhbnk7XG5cbiAgICBtb3VzZURvd25MaXN0ZW5lcjogYW55O1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucmlwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGxldCBpbmsgPSB0aGlzLmdldEluaygpO1xuICAgICAgICBpZiAoIWluayB8fCBnZXRDb21wdXRlZFN0eWxlKGluaywgbnVsbCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyhpbmssICdwLWluay1hY3RpdmUnKTtcbiAgICAgICAgaWYgKCFEb21IYW5kbGVyLmdldEhlaWdodChpbmspICYmICFEb21IYW5kbGVyLmdldFdpZHRoKGluaykpIHtcbiAgICAgICAgICAgIGxldCBkID0gTWF0aC5tYXgoRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHRoaXMuZWwubmF0aXZlRWxlbWVudCksIERvbUhhbmRsZXIuZ2V0T3V0ZXJIZWlnaHQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBpbmsuc3R5bGUuaGVpZ2h0ID0gZCArICdweCc7XG4gICAgICAgICAgICBpbmsuc3R5bGUud2lkdGggPSBkICsgJ3B4JztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgb2Zmc2V0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgbGV0IHggPSBldmVudC5wYWdlWCAtIG9mZnNldC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgLSBEb21IYW5kbGVyLmdldFdpZHRoKGluaykgLyAyO1xuICAgICAgICBsZXQgeSA9IGV2ZW50LnBhZ2VZIC0gb2Zmc2V0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCAtIERvbUhhbmRsZXIuZ2V0SGVpZ2h0KGluaykgLyAyO1xuICAgIFxuICAgICAgICBpbmsuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgIGluay5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoaW5rLCAncC1pbmstYWN0aXZlJyk7XG4gICAgfVxuICAgIFxuICAgIGdldEluaygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NOYW1lLmluZGV4T2YoJ3AtaW5rJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXNldEluaygpIHtcbiAgICAgICAgbGV0IGluayA9IHRoaXMuZ2V0SW5rKCk7XG4gICAgICAgIGlmIChpbmspIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoaW5rLCAncC1pbmstYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFuaW1hdGlvbkVuZChldmVudCkge1xuICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKGV2ZW50LmN1cnJlbnRUYXJnZXQsICdwLWluay1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIGxldCBpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGluay5jbGFzc05hbWUgPSAncC1pbmsnO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5rKTtcbiAgICBcbiAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0ZW5lciA9IHRoaXMub25BbmltYXRpb25FbmQuYmluZCh0aGlzKTtcbiAgICAgICAgaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuYW5pbWF0aW9uTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgbGV0IGluayA9IHRoaXMuZ2V0SW5rKCk7XG4gICAgICAgIGlmIChpbmspIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICAgICAgICAgIGluay5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCB0aGlzLmFuaW1hdGlvbkxpc3RlbmVyKTtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlRWxlbWVudChpbmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5yaXBwbGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1JpcHBsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbUmlwcGxlXVxufSlcbmV4cG9ydCBjbGFzcyBSaXBwbGVNb2R1bGUgeyB9XG4iXX0=