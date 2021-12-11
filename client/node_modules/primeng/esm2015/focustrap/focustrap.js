import { NgModule, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import * as ɵngcc0 from '@angular/core';
export class FocusTrap {
    constructor(el) {
        this.el = el;
    }
    onkeydown(e) {
        if (this.pFocusTrapDisabled !== true) {
            e.preventDefault();
            let focusableElements = DomHandler.getFocusableElements(this.el.nativeElement);
            if (focusableElements && focusableElements.length > 0) {
                if (!focusableElements[0].ownerDocument.activeElement) {
                    focusableElements[0].focus();
                }
                else {
                    let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
                    if (e.shiftKey) {
                        if (focusedIndex == -1 || focusedIndex === 0)
                            focusableElements[focusableElements.length - 1].focus();
                        else
                            focusableElements[focusedIndex - 1].focus();
                    }
                    else {
                        if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                            focusableElements[0].focus();
                        else
                            focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        }
    }
}
FocusTrap.ɵfac = function FocusTrap_Factory(t) { return new (t || FocusTrap)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FocusTrap.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FocusTrap, selectors: [["", "pFocusTrap", ""]], hostBindings: function FocusTrap_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown.tab", function FocusTrap_keydown_tab_HostBindingHandler($event) { return ctx.onkeydown($event); })("keydown.shift.tab", function FocusTrap_keydown_shift_tab_HostBindingHandler($event) { return ctx.onkeydown($event); });
    } }, inputs: { pFocusTrapDisabled: "pFocusTrapDisabled" } });
FocusTrap.ctorParameters = () => [
    { type: ElementRef }
];
FocusTrap.propDecorators = {
    pFocusTrapDisabled: [{ type: Input }],
    onkeydown: [{ type: HostListener, args: ['keydown.tab', ['$event'],] }, { type: HostListener, args: ['keydown.shift.tab', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FocusTrap, [{
        type: Directive,
        args: [{
                selector: '[pFocusTrap]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onkeydown: [{
            type: HostListener,
            args: ['keydown.tab', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.shift.tab', ['$event']]
        }], pFocusTrapDisabled: [{
            type: Input
        }] }); })();
export class FocusTrapModule {
}
FocusTrapModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FocusTrapModule });
FocusTrapModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FocusTrapModule_Factory(t) { return new (t || FocusTrapModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FocusTrapModule, { declarations: function () { return [FocusTrap]; }, imports: function () { return [CommonModule]; }, exports: function () { return [FocusTrap]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FocusTrapModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [FocusTrap],
                declarations: [FocusTrap]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXN0cmFwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9jdXN0cmFwL2ZvY3VzdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7QUFLdkMsTUFBTSxPQUFPLFNBQVM7QUFDdEIsSUFHSSxZQUFtQixFQUFjO0FBQUksUUFBbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLElBQUUsQ0FBQztBQUN6QyxJQUdJLFNBQVMsQ0FBQyxDQUFDO0FBQ2YsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7QUFDOUMsWUFBWSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDL0IsWUFBWSxJQUFJLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNGLFlBQVksSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ25FLGdCQUFnQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTtBQUN2RSxvQkFBb0IsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakQsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixvQkFBb0IsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNuSCxvQkFDb0IsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO0FBQ3BDLHdCQUF3QixJQUFJLFlBQVksSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQztBQUNwRSw0QkFBNEIsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BGO0FBQ0EsNEJBQTRCLGlCQUFpQixDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4RSxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLHdCQUF3QixJQUFJLFlBQVksSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pHLDRCQUE0QixpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6RDtBQUNBLDRCQUE0QixpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEUscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULElBQUksQ0FBQztBQUNMO3FDQXRDQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFLGNBQWMsZUFDM0I7OztpRUFDSTtBQUFDO0FBRVMsWUFUWSxVQUFVO0FBQUc7QUFBRztBQUE2QixpQ0FTbkUsS0FBSztBQUFLLHdCQUlWLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDdEMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDO0FBQzdDOzs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWtDTixNQUFNLE9BQU8sZUFBZTtBQUFHOzJDQUw5QixRQUFRLFNBQUM7R0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxrQkFDcEIsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQzVCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsRGlyZWN0aXZlLEVsZW1lbnRSZWYsSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twRm9jdXNUcmFwXScsXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzVHJhcCB7XG5cbiAgICBASW5wdXQoKSBwRm9jdXNUcmFwRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnRhYicsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zaGlmdC50YWInLCBbJyRldmVudCddKVxuICAgIG9ua2V5ZG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLnBGb2N1c1RyYXBEaXNhYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGZvY3VzYWJsZUVsZW1lbnRzID0gRG9tSGFuZGxlci5nZXRGb2N1c2FibGVFbGVtZW50cyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzICYmIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZvY3VzYWJsZUVsZW1lbnRzWzBdLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvY3VzZWRJbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmluZGV4T2YoZm9jdXNhYmxlRWxlbWVudHNbMF0ub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PSAtMSB8fCBmb2N1c2VkSW5kZXggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2VkSW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PSAtMSB8fCBmb2N1c2VkSW5kZXggPT09IChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzZWRJbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0ZvY3VzVHJhcF0sXG4gICAgZGVjbGFyYXRpb25zOiBbRm9jdXNUcmFwXVxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c1RyYXBNb2R1bGUgeyB9XG4iXX0=