import { NgModule, Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function UIMessage_div_0_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.text, ɵngcc0.ɵɵsanitizeHtml);
} }
function UIMessage_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, UIMessage_div_0_div_2_span_1_Template, 1, 1, "span", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.escape);
} }
function UIMessage_div_0_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.text);
} }
function UIMessage_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, UIMessage_div_0_ng_template_3_span_0_Template, 2, 1, "span", 7);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.escape);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "p-inline-message-info": a0, "p-inline-message-warn": a1, "p-inline-message-error": a2, "p-inline-message-success": a3, "p-inline-message-icon-only": a4 }; };
function UIMessage_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelement(1, "span", 2);
    ɵngcc0.ɵɵtemplate(2, UIMessage_div_0_div_2_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵtemplate(3, UIMessage_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = ɵngcc0.ɵɵreference(4);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style)("ngClass", ɵngcc0.ɵɵpureFunction5(7, _c0, ctx_r0.severity === "info", ctx_r0.severity === "warn", ctx_r0.severity === "error", ctx_r0.severity === "success", ctx_r0.text == null));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.escape)("ngIfElse", _r2);
} }
export class UIMessage {
    constructor() {
        this.escape = true;
    }
    get icon() {
        let icon = null;
        if (this.severity) {
            switch (this.severity) {
                case 'success':
                    icon = 'pi pi-check';
                    break;
                case 'info':
                    icon = 'pi pi-info-circle';
                    break;
                case 'error':
                    icon = 'pi pi-times-circle';
                    break;
                case 'warn':
                    icon = 'pi pi-exclamation-triangle';
                    break;
                default:
                    icon = 'pi pi-info-circle';
                    break;
            }
        }
        return icon;
    }
}
UIMessage.ɵfac = function UIMessage_Factory(t) { return new (t || UIMessage)(); };
UIMessage.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UIMessage, selectors: [["p-message"]], inputs: { escape: "escape", severity: "severity", text: "text", style: "style", styleClass: "styleClass" }, decls: 1, vars: 1, consts: [["aria-live", "polite", "class", "p-inline-message p-component p-inline-message", 3, "ngStyle", "class", "ngClass", 4, "ngIf"], ["aria-live", "polite", 1, "p-inline-message", "p-component", "p-inline-message", 3, "ngStyle", "ngClass"], [1, "p-inline-message-icon", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["escapeOut", ""], ["class", "p-inline-message-text", 3, "innerHTML", 4, "ngIf"], [1, "p-inline-message-text", 3, "innerHTML"], ["class", "p-inline-message-text", 4, "ngIf"], [1, "p-inline-message-text"]], template: function UIMessage_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, UIMessage_div_0_Template, 5, 13, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.severity);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgClass], styles: [".p-inline-message{align-items:center;display:inline-flex;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}"], encapsulation: 2, changeDetection: 0 });
UIMessage.propDecorators = {
    severity: [{ type: Input }],
    text: [{ type: Input }],
    escape: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UIMessage, [{
        type: Component,
        args: [{
                selector: 'p-message',
                template: `
        <div aria-live="polite" class="p-inline-message p-component p-inline-message" *ngIf="severity" [ngStyle]="style" [class]="styleClass"
        [ngClass]="{'p-inline-message-info': (severity === 'info'),
                'p-inline-message-warn': (severity === 'warn'),
                'p-inline-message-error': (severity === 'error'),
                'p-inline-message-success': (severity === 'success'),
                'p-inline-message-icon-only': this.text == null}">
            <span class="p-inline-message-icon" [ngClass]="icon"></span>
            <div *ngIf="!escape; else escapeOut">
                <span *ngIf="!escape" class="p-inline-message-text" [innerHTML]="text"></span>
            </div>
            <ng-template #escapeOut>
                <span *ngIf="escape" class="p-inline-message-text">{{text}}</span>
            </ng-template>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-inline-message{align-items:center;display:inline-flex;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}"]
            }]
    }], function () { return []; }, { escape: [{
            type: Input
        }], severity: [{
            type: Input
        }], text: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class MessageModule {
}
MessageModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MessageModule });
MessageModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MessageModule_Factory(t) { return new (t || MessageModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MessageModule, { declarations: function () { return [UIMessage]; }, imports: function () { return [CommonModule]; }, exports: function () { return [UIMessage]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MessageModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [UIMessage],
                declarations: [UIMessage]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QjdDLE1BQU0sT0FBTyxTQUFTO0FBQ3RCLElBdkJBO0FBQ0csUUEyQlUsV0FBTSxHQUFZLElBQUksQ0FBQztBQUNwQyxJQWtDQSxDQUFDO0FBQ0QsSUE5QkksSUFBSSxJQUFJO0FBQUssUUFDVCxJQUFJLElBQUksR0FBVyxJQUFJLENBQUM7QUFDaEMsUUFDUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDM0IsWUFBWSxRQUFPLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDbEMsZ0JBQWdCLEtBQUssU0FBUztBQUM5QixvQkFBb0IsSUFBSSxHQUFHLGFBQWEsQ0FBQztBQUN6QyxvQkFBZ0IsTUFBTTtBQUN0QixnQkFDZ0IsS0FBSyxNQUFNO0FBQzNCLG9CQUFvQixJQUFJLEdBQUcsbUJBQW1CLENBQUM7QUFDL0Msb0JBQWdCLE1BQU07QUFDdEIsZ0JBQ2dCLEtBQUssT0FBTztBQUM1QixvQkFBb0IsSUFBSSxHQUFHLG9CQUFvQixDQUFDO0FBQ2hELG9CQUFnQixNQUFNO0FBQ3RCLGdCQUNnQixLQUFLLE1BQU07QUFDM0Isb0JBQW9CLElBQUksR0FBRyw0QkFBNEIsQ0FBQztBQUN4RCxvQkFBZ0IsTUFBTTtBQUN0QixnQkFDZ0I7QUFDaEIsb0JBQW9CLElBQUksR0FBRyxtQkFBbUIsQ0FBQztBQUMvQyxvQkFBZ0IsTUFBTTtBQUN0QixhQUFhO0FBQ2IsU0FBUztBQUNULFFBQ1EsT0FBTyxJQUFJLENBQUM7QUFDcEIsSUFBSSxDQUFDO0FBQ0w7cUNBL0RDLFNBQVMsU0FBQyxrQkFDUCxRQUFRO0FBQUUsV0FBVyxrQkFDckIsUUFBUSxFQUFFOzs7OEJBZVQsa0JBQ0Q7Y0FBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLDZPQUdwQztzQkFESix0QkFDSztBQUVHLHVCQUFKLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUsscUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBc0NoQixNQUFNLE9BQU8sYUFBYTtBQUFHO3lDQUw1QixRQUFRLFNBQUM7S0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxrQkFDcEIsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQzVCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJwLWlubGluZS1tZXNzYWdlIHAtY29tcG9uZW50IHAtaW5saW5lLW1lc3NhZ2VcIiAqbmdJZj1cInNldmVyaXR5XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsncC1pbmxpbmUtbWVzc2FnZS1pbmZvJzogKHNldmVyaXR5ID09PSAnaW5mbycpLFxuICAgICAgICAgICAgICAgICdwLWlubGluZS1tZXNzYWdlLXdhcm4nOiAoc2V2ZXJpdHkgPT09ICd3YXJuJyksXG4gICAgICAgICAgICAgICAgJ3AtaW5saW5lLW1lc3NhZ2UtZXJyb3InOiAoc2V2ZXJpdHkgPT09ICdlcnJvcicpLFxuICAgICAgICAgICAgICAgICdwLWlubGluZS1tZXNzYWdlLXN1Y2Nlc3MnOiAoc2V2ZXJpdHkgPT09ICdzdWNjZXNzJyksXG4gICAgICAgICAgICAgICAgJ3AtaW5saW5lLW1lc3NhZ2UtaWNvbi1vbmx5JzogdGhpcy50ZXh0ID09IG51bGx9XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5saW5lLW1lc3NhZ2UtaWNvblwiIFtuZ0NsYXNzXT1cImljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWVzY2FwZTsgZWxzZSBlc2NhcGVPdXRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlc2NhcGVcIiBjbGFzcz1cInAtaW5saW5lLW1lc3NhZ2UtdGV4dFwiIFtpbm5lckhUTUxdPVwidGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlc2NhcGVPdXQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlc2NhcGVcIiBjbGFzcz1cInAtaW5saW5lLW1lc3NhZ2UtdGV4dFwiPnt7dGV4dH19PC9zcGFuPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL21lc3NhZ2UuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVUlNZXNzYWdlIHtcblxuICAgIEBJbnB1dCgpIHNldmVyaXR5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBlc2NhcGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBpY29uOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnNldmVyaXR5KSB7XG4gICAgICAgICAgICBzd2l0Y2godGhpcy5zZXZlcml0eSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICBpY29uID0gJ3BpIHBpLWNoZWNrJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgICAgICBpY29uID0gJ3BpIHBpLWluZm8tY2lyY2xlJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgaWNvbiA9ICdwaSBwaS10aW1lcy1jaXJjbGUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnd2Fybic6XG4gICAgICAgICAgICAgICAgICAgIGljb24gPSAncGkgcGktZXhjbGFtYXRpb24tdHJpYW5nbGUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWNvbiA9ICdwaSBwaS1pbmZvLWNpcmNsZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWNvbjtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1VJTWVzc2FnZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVUlNZXNzYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTW9kdWxlIHsgfVxuIl19