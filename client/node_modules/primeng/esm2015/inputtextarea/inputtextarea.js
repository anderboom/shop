import { NgModule, Directive, ElementRef, HostListener, Input, Output, EventEmitter, Optional, ChangeDetectorRef } from '@angular/core';
import { NgModel, NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
export class InputTextarea {
    constructor(el, ngModel, control, cd) {
        this.el = el;
        this.ngModel = ngModel;
        this.control = control;
        this.cd = cd;
        this.onResize = new EventEmitter();
    }
    ngOnInit() {
        if (this.ngModel) {
            this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
                this.updateState();
            });
        }
        if (this.control) {
            this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
                this.updateState();
            });
        }
    }
    ngAfterViewInit() {
        if (this.autoResize)
            this.resize();
        this.updateFilledState();
        this.cd.detectChanges();
    }
    onInput(e) {
        this.updateState();
    }
    updateFilledState() {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
    onFocus(e) {
        if (this.autoResize) {
            this.resize(e);
        }
    }
    onBlur(e) {
        if (this.autoResize) {
            this.resize(e);
        }
    }
    resize(event) {
        this.el.nativeElement.style.height = 'auto';
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = "scroll";
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = "hidden";
        }
        this.onResize.emit(event || {});
    }
    updateState() {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    }
    ngOnDestroy() {
        if (this.ngModelSubscription) {
            this.ngModelSubscription.unsubscribe();
        }
        if (this.ngControlSubscription) {
            this.ngControlSubscription.unsubscribe();
        }
    }
}
InputTextarea.ɵfac = function InputTextarea_Factory(t) { return new (t || InputTextarea)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgModel, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
InputTextarea.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InputTextarea, selectors: [["", "pInputTextarea", ""]], hostVars: 10, hostBindings: function InputTextarea_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function InputTextarea_input_HostBindingHandler($event) { return ctx.onInput($event); })("focus", function InputTextarea_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("blur", function InputTextarea_blur_HostBindingHandler($event) { return ctx.onBlur($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputtextarea", true)("p-inputtext", true)("p-component", true)("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
    } }, inputs: { autoResize: "autoResize" }, outputs: { onResize: "onResize" } });
InputTextarea.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
InputTextarea.propDecorators = {
    autoResize: [{ type: Input }],
    onResize: [{ type: Output }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextarea, [{
        type: Directive,
        args: [{
                selector: '[pInputTextarea]',
                host: {
                    '[class.p-inputtextarea]': 'true',
                    '[class.p-inputtext]': 'true',
                    '[class.p-component]': 'true',
                    '[class.p-filled]': 'filled',
                    '[class.p-inputtextarea-resizable]': 'autoResize'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NgModel, decorators: [{
                type: Optional
            }] }, { type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { onResize: [{
            type: Output
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }], onFocus: [{
            type: HostListener,
            args: ['focus', ['$event']]
        }], onBlur: [{
            type: HostListener,
            args: ['blur', ['$event']]
        }], autoResize: [{
            type: Input
        }] }); })();
export class InputTextareaModule {
}
InputTextareaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputTextareaModule });
InputTextareaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputTextareaModule_Factory(t) { return new (t || InputTextareaModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputTextareaModule, { declarations: function () { return [InputTextarea]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputTextarea]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextareaModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [InputTextarea],
                declarations: [InputTextarea]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXR0ZXh0YXJlYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2lucHV0dGV4dGFyZWEvaW5wdXR0ZXh0YXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLFFBQVEsRUFBb0MsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEssT0FBTyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7OztBQWE3QyxNQUFNLE9BQU8sYUFBYTtBQUFHLElBY3pCLFlBQW1CLEVBQWMsRUFBcUIsT0FBZ0IsRUFBcUIsT0FBbUIsRUFBVSxFQUFxQjtBQUFJLFFBQTlILE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFvQixZQUFPLEdBQVAsT0FBTyxDQUFTO0FBQUMsUUFBb0IsWUFBTyxHQUFQLE9BQU8sQ0FBWTtBQUFDLFFBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQVZwSSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0QsSUFTb0osQ0FBQztBQUNySixJQUNJLFFBQVE7QUFDWixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUMxQixZQUFZLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQy9FLGdCQUFlLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0FBQ2QsU0FBUztBQUNULFFBQ1EsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzFCLFlBQVksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FB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LElBQUksQ0FBQyxxQkFBcUIsRUFBRTtBQUN4QyxZQUFZLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyRCxTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0w7eUNBdkdDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QixJQUFJLEVBQUUsc0JBQ0YseUJBQXlCLEVBQUUsTUFBTSxzQkFDakMscUJBQXFCLEVBQUUsTUFBTSxzQkFDN0IscUJBQXFCLEVBQUU7SUFBTSxzQkFDN0Isa0JBQWtCLEVBQUUsUUFBUSxzQkFDNUIsbUNBQW1DLEVBQUUsWUFBWSxrQkFDcEQsY0FDSjs7OztvRkFDSTtBQUFDO0FBQXVDLFlBZmxCLFVBQVU7QUFBSSxZQUNqQyxPQUFPLHVCQTRCeUIsUUFBUTtBQUFPLFlBNUJ0QyxTQUFTLHVCQTRCbUQsUUFBUTtBQUFPLFlBN0I4QixpQkFBaUI7QUFBRztBQUFHO0FBQ2xJLHlCQWdCVixLQUFLO0FBQUssdUJBRVYsTUFBTTtBQUFLLHNCQWtDWCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ2hDLHNCQVFBLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDaEMscUJBTUEsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBNkNOLE1BQU0sT0FBTyxtQkFBbUI7QUFBRzsrQ0FMbEMsUUFBUSxTQUFDLGtCQUNOO01BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUN4QixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FDaEM7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxEaXJlY3RpdmUsRWxlbWVudFJlZixIb3N0TGlzdGVuZXIsSW5wdXQsT3V0cHV0LCBFdmVudEVtaXR0ZXIsT3B0aW9uYWwsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nTW9kZWwsIE5nQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcElucHV0VGV4dGFyZWFdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1pbnB1dHRleHRhcmVhXSc6ICd0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0dGV4dF0nOiAndHJ1ZScsXG4gICAgICAgICdbY2xhc3MucC1jb21wb25lbnRdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLnAtZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtaW5wdXR0ZXh0YXJlYS1yZXNpemFibGVdJzogJ2F1dG9SZXNpemUnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFRleHRhcmVhIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgIHtcbiAgICBcbiAgICBASW5wdXQoKSBhdXRvUmVzaXplOiBib29sZWFuO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIFxuICAgIGZpbGxlZDogYm9vbGVhbjtcblxuICAgIGNhY2hlZFNjcm9sbEhlaWdodDpudW1iZXI7XG5cbiAgICBuZ01vZGVsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBuZ0NvbnRyb2xTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHVibGljIG5nTW9kZWw6IE5nTW9kZWwsIEBPcHRpb25hbCgpIHB1YmxpYyBjb250cm9sIDogTmdDb250cm9sLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICAgICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5nTW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMubmdNb2RlbFN1YnNjcmlwdGlvbiA9IHRoaXMubmdNb2RlbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+e1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbFN1YnNjcmlwdGlvbiA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1Jlc2l6ZSlcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVGaWxsZWRTdGF0ZSgpO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gICAgb25JbnB1dChlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlRmlsbGVkU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuZmlsbGVkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIFxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSlcbiAgICBvbkZvY3VzKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1Jlc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gICAgb25CbHVyKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1Jlc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVzaXplKGV2ZW50PzogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQpID49IHBhcnNlRmxvYXQodGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLm1heEhlaWdodCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblJlc2l6ZS5lbWl0KGV2ZW50fHx7fSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hdXRvUmVzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLm5nTW9kZWxTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubmdNb2RlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtJbnB1dFRleHRhcmVhXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJbnB1dFRleHRhcmVhXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFRleHRhcmVhTW9kdWxlIHsgfVxuIl19