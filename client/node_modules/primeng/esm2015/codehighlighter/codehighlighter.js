import { NgModule, Directive, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
export class CodeHighlighter {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
        }
    }
}
CodeHighlighter.ɵfac = function CodeHighlighter_Factory(t) { return new (t || CodeHighlighter)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CodeHighlighter.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CodeHighlighter, selectors: [["", "pCode", ""]] });
CodeHighlighter.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CodeHighlighter, [{
        type: Directive,
        args: [{
                selector: '[pCode]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
export class CodeHighlighterModule {
}
CodeHighlighterModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CodeHighlighterModule });
CodeHighlighterModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CodeHighlighterModule_Factory(t) { return new (t || CodeHighlighterModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CodeHighlighterModule, { declarations: function () { return [CodeHighlighter]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CodeHighlighter]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CodeHighlighterModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [CodeHighlighter],
                declarations: [CodeHighlighter]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWhpZ2hsaWdodGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvY29kZWhpZ2hsaWdodGVyL2NvZGVoaWdobGlnaHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLL0MsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQUUzQixZQUFtQixFQUFjO0FBQUksUUFBbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLElBQUcsQ0FBQztBQUMxQyxJQUNJLGVBQWU7QUFDbkIsUUFBUSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM3QixZQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3BFLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTDsyQ0FaQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFLFNBQVMsY0FDdEI7MkdBQ0k7QUFBQztBQUF5QyxZQU5qQixVQUFVO0FBQUc7Ozs7OzsyRUFBRTtBQXNCN0MsTUFBTSxPQUFPLHFCQUFxQjtBQUFHO2lEQUxwQyxRQUFRLFNBQUMsa0JBQ047SUFBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMsa0JBQzFCLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxjQUNsQzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twQ29kZV0nXG59KVxuZXhwb3J0IGNsYXNzIENvZGVIaWdobGlnaHRlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvd1snUHJpc20nXSkge1xuICAgICAgICAgICAgd2luZG93WydQcmlzbSddLmhpZ2hsaWdodEVsZW1lbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbQ29kZUhpZ2hsaWdodGVyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtDb2RlSGlnaGxpZ2h0ZXJdXG59KVxuZXhwb3J0IGNsYXNzIENvZGVIaWdobGlnaHRlck1vZHVsZSB7IH1cblxuIl19