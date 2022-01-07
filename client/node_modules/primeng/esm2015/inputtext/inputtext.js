import { NgModule, Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
export class InputText {
    constructor(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    ngDoCheck() {
        this.updateFilledState();
    }
    onInput(e) {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    }
}
InputText.ɵfac = function InputText_Factory(t) { return new (t || InputText)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgModel, 8)); };
InputText.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InputText, selectors: [["", "pInputText", ""]], hostVars: 6, hostBindings: function InputText_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function InputText_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputtext", true)("p-component", true)("p-filled", ctx.filled);
    } } });
InputText.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel, decorators: [{ type: Optional }] }
];
InputText.propDecorators = {
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputText, [{
        type: Directive,
        args: [{
                selector: '[pInputText]',
                host: {
                    '[class.p-inputtext]': 'true',
                    '[class.p-component]': 'true',
                    '[class.p-filled]': 'filled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NgModel, decorators: [{
                type: Optional
            }] }]; }, { onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();
export class InputTextModule {
}
InputTextModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputTextModule });
InputTextModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputTextModule_Factory(t) { return new (t || InputTextModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputTextModule, { declarations: function () { return [InputText]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputText]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [InputText],
                declarations: [InputText]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXR0ZXh0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvaW5wdXR0ZXh0L2lucHV0dGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFTLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFVN0MsTUFBTSxPQUFPLFNBQVM7QUFBRyxJQUlyQixZQUFtQixFQUFjLEVBQXFCLE9BQWdCO0FBQUksUUFBdkQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQW9CLFlBQU8sR0FBUCxPQUFPLENBQVM7QUFBQyxJQUFFLENBQUM7QUFDOUUsSUFDSSxTQUFTO0FBQ2IsUUFBUSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUNqQyxJQUFJLENBQUM7QUFDTCxJQUVJLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsUUFBUSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUNqQyxJQUFJLENBQUM7QUFDTCxJQUNJLGlCQUFpQjtBQUNyQixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN6RixZQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3RCxJQUFJLENBQUM7QUFDTDtxQ0EzQkMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxjQUFjLGtCQUN4QixJQUFJLEVBQUUsc0JBQ0YscUJBQXFCLEVBQUU7Q0FBTSxzQkFDN0IscUJBQXFCLEVBQUUsTUFBTSxzQkFDN0Isa0JBQWtCLEVBQUUsUUFBUSxrQkFDL0IsY0FDSjs7OztXQUNJO0FBQUM7QUFBbUMsWUFaZCxVQUFVO0FBQUksWUFDakMsT0FBTyx1QkFleUIsUUFBUTtBQUFNO0FBQUc7QUFDbEQsc0JBS0YsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNsQzs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWVMLE1BQU0sT0FBTyxlQUFlO0FBQUc7MkNBTDlCLFFBQVEsU0FBQztHQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLGtCQUNwQixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FDNUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxEaXJlY3RpdmUsRWxlbWVudFJlZixIb3N0TGlzdGVuZXIsRG9DaGVjayxPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twSW5wdXRUZXh0XScsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtaW5wdXR0ZXh0XSc6ICd0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5wLWNvbXBvbmVudF0nOiAndHJ1ZScsXG4gICAgICAgICdbY2xhc3MucC1maWxsZWRdJzogJ2ZpbGxlZCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIElucHV0VGV4dCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuXG4gICAgZmlsbGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBwdWJsaWMgbmdNb2RlbDogTmdNb2RlbCkge31cbiAgICAgICAgXG4gICAgbmdEb0NoZWNrKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgfVxuICAgIFxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgXG4gICAgb25JbnB1dChlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlRmlsbGVkU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuZmlsbGVkID0gKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubmdNb2RlbCAmJiB0aGlzLm5nTW9kZWwubW9kZWwpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbSW5wdXRUZXh0XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJbnB1dFRleHRdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0VGV4dE1vZHVsZSB7IH0iXX0=