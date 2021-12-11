import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/ripple';
import * as ɵngcc2 from '@angular/common';

const _c0 = function (a1, a2) { return { "p-button-icon": true, "p-button-icon-left": a1, "p-button-icon-right": a2 }; };
function ToggleButton_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c0, ctx_r0.iconPos === "left", ctx_r0.iconPos === "right"));
} }
const _c1 = function (a1, a2, a3) { return { "p-button p-togglebutton p-component": true, "p-button-icon-only": a1, "p-highlight": a2, "p-disabled": a3 }; };
export const TOGGLEBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleButton),
    multi: true
};
export class ToggleButton {
    constructor(cd) {
        this.cd = cd;
        this.iconPos = 'left';
        this.onChange = new EventEmitter();
        this.checked = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    toggle(event) {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onModelChange(this.checked);
            this.onModelTouched();
            this.onChange.emit({
                originalEvent: event,
                checked: this.checked
            });
            this.cd.markForCheck();
        }
    }
    onBlur() {
        this.onModelTouched();
    }
    writeValue(value) {
        this.checked = value;
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    get hasOnLabel() {
        return this.onLabel && this.onLabel.length > 0;
    }
    get hasOffLabel() {
        return this.onLabel && this.onLabel.length > 0;
    }
}
ToggleButton.ɵfac = function ToggleButton_Factory(t) { return new (t || ToggleButton)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ToggleButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToggleButton, selectors: [["p-toggleButton"]], inputs: { iconPos: "iconPos", disabled: "disabled", onLabel: "onLabel", offLabel: "offLabel", onIcon: "onIcon", offIcon: "offIcon", ariaLabelledBy: "ariaLabelledBy", style: "style", styleClass: "styleClass", inputId: "inputId", tabindex: "tabindex" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR])], decls: 4, vars: 12, consts: [["role", "checkbox", "pRipple", "", 3, "ngClass", "ngStyle", "click", "keydown.enter"], [3, "class", "ngClass", 4, "ngIf"], [1, "p-button-label"], [3, "ngClass"]], template: function ToggleButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function ToggleButton_Template_div_click_0_listener($event) { return ctx.toggle($event); })("keydown.enter", function ToggleButton_Template_div_keydown_enter_0_listener($event) { return ctx.toggle($event); });
        ɵngcc0.ɵɵtemplate(1, ToggleButton_span_1_Template, 1, 6, "span", 1);
        ɵngcc0.ɵɵelementStart(2, "span", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(8, _c1, ctx.onIcon && ctx.offIcon && !ctx.hasOnLabel && !ctx.hasOffLabel, ctx.checked, ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? null : "0")("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.onIcon || ctx.offIcon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.checked ? ctx.hasOnLabel ? ctx.onLabel : "" : ctx.hasOffLabel ? ctx.offLabel : "");
    } }, directives: [ɵngcc1.Ripple, ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgIf], styles: [".p-button[_ngcontent-%COMP%]{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:inline-flex;margin:0;overflow:hidden;position:relative;text-align:center;user-select:none;vertical-align:bottom}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{flex:0 0 auto;visibility:hidden;width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-bottom-right-radius:0;border-top-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-bottom-left-radius:0;border-top-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}.p-button-label[_ngcontent-%COMP%]{transition:all .2s}"], changeDetection: 0 });
ToggleButton.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ToggleButton.propDecorators = {
    onLabel: [{ type: Input }],
    offLabel: [{ type: Input }],
    onIcon: [{ type: Input }],
    offIcon: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    disabled: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    inputId: [{ type: Input }],
    tabindex: [{ type: Input }],
    iconPos: [{ type: Input }],
    onChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToggleButton, [{
        type: Component,
        args: [{
                selector: 'p-toggleButton',
                template: `
        <div [ngClass]="{'p-button p-togglebutton p-component': true, 'p-button-icon-only': (onIcon && offIcon && !hasOnLabel && !hasOffLabel),'p-highlight': checked,'p-disabled':disabled}" 
                        [ngStyle]="style" [class]="styleClass" (click)="toggle($event)" (keydown.enter)="toggle($event)"
                        [attr.tabindex]="disabled ? null : '0'" role="checkbox" [attr.aria-checked]="checked" pRipple>
            <span *ngIf="onIcon||offIcon" [class]="checked ? this.onIcon : this.offIcon" 
                [ngClass]="{'p-button-icon': true, 'p-button-icon-left': (iconPos === 'left'), 'p-button-icon-right': (iconPos === 'right')}"></span>
            <span class="p-button-label">{{checked ? hasOnLabel ? onLabel : '' : hasOffLabel ? offLabel : ''}}</span>
        </div>
    `,
                providers: [TOGGLEBUTTON_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".p-button{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:inline-flex;margin:0;overflow:hidden;position:relative;text-align:center;user-select:none;vertical-align:bottom}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only .p-button-label{flex:0 0 auto;visibility:hidden;width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-bottom-right-radius:0;border-top-right-radius:0}.p-buttonset .p-button:last-of-type{border-bottom-left-radius:0;border-top-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}.p-button-label{transition:all .2s}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { iconPos: [{
            type: Input
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], onLabel: [{
            type: Input
        }], offLabel: [{
            type: Input
        }], onIcon: [{
            type: Input
        }], offIcon: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], inputId: [{
            type: Input
        }], tabindex: [{
            type: Input
        }] }); })();
export class ToggleButtonModule {
}
ToggleButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToggleButtonModule });
ToggleButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToggleButtonModule_Factory(t) { return new (t || ToggleButtonModule)(); }, imports: [[CommonModule, RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToggleButtonModule, { declarations: function () { return [ToggleButton]; }, imports: function () { return [CommonModule, RippleModule]; }, exports: function () { return [ToggleButton]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToggleButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule],
                exports: [ToggleButton],
                declarations: [ToggleButton]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlYnV0dG9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvdG9nZ2xlYnV0dG9uL3RvZ2dsZWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsaUJBQWlCLEVBQXVCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFRO0FBQ2hELElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0FBQzdDLElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFpQkYsTUFBTSxPQUFPLFlBQVk7QUFBRyxJQWdDeEIsWUFBbUIsRUFBcUI7QUFBSSxRQUF6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBVmhDLFlBQU8sR0FBVyxNQUFNLENBQUM7QUFDdEMsUUFDYyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0QsUUFDSSxZQUFPLEdBQVksS0FBSyxDQUFDO0FBQzdCLFFBQ0ksa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDdkMsUUFDSSxtQkFBYyxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUN4QyxJQUNnRCxDQUFDO0FBQ2pELElBQ0ksTUFBTSxDQUFDLEtBQVk7QUFDdkIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUM1QixZQUFZLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3pDLFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsWUFBWSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbEMsWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUMvQixnQkFBZ0IsYUFBYSxFQUFFLEtBQUs7QUFDcEMsZ0JBQWdCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztBQUNyQyxhQUFhLENBQUMsQ0FBQztBQUNmLFlBQ1ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNuQyxTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0wsSUFDSSxNQUFNO0FBQ1YsUUFBUSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUIsSUFBSSxDQUFDO0FBQ0wsSUFDSSxVQUFVLENBQUMsS0FBVTtBQUFJLFFBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzdCLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMvQixJQUFJLENBQUM7QUFDTCxJQUNJLGdCQUFnQixDQUFDLEVBQVk7QUFBSSxRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUNoQyxJQUFJLENBQUM7QUFDTCxJQUNJLGlCQUFpQixDQUFDLEVBQVk7QUFBSSxRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUNqQyxJQUFJLENBQUM7QUFDTCxJQUNJLGdCQUFnQixDQUFDLEdBQVk7QUFBSSxRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUM1QixRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDL0IsSUFBSSxDQUFDO0FBQ0wsSUFDSSxJQUFJLFVBQVU7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDdkQsSUFBSSxDQUFDO0FBQ0wsSUFDSSxJQUFJLFdBQVc7QUFBSyxRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELElBQUksQ0FBQztBQUNMO3dDQTVGQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUIsUUFBUSxFQUFFOzs7dUNBUVQsa0JBQ0QsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUMsa0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7OztpR0FFbEQseTJDQUNJO0FBQUM7QUFBc0MsWUExQjRDLGlCQUFpQjtBQUFHO0FBQUc7QUFDakcsc0JBMkJULEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUsscUJBRVYsS0FBSztBQUFLLHNCQUVWLEtBQUs7QUFBSyw2QkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssc0JBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQUssdUJBRVYsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUE0RGpCLE1BQU0sT0FBTyxrQkFBa0I7QUFBRzs4Q0FMakMsUUFBUSxTQUFDO0FBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLFlBQVksQ0FBQyxrQkFDcEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FDL0I7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixmb3J3YXJkUmVmLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBUT0dHTEVCVVRUT05fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRvZ2dsZUJ1dHRvbiksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdG9nZ2xlQnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsncC1idXR0b24gcC10b2dnbGVidXR0b24gcC1jb21wb25lbnQnOiB0cnVlLCAncC1idXR0b24taWNvbi1vbmx5JzogKG9uSWNvbiAmJiBvZmZJY29uICYmICFoYXNPbkxhYmVsICYmICFoYXNPZmZMYWJlbCksJ3AtaGlnaGxpZ2h0JzogY2hlY2tlZCwncC1kaXNhYmxlZCc6ZGlzYWJsZWR9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCIgKGtleWRvd24uZW50ZXIpPVwidG9nZ2xlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiZGlzYWJsZWQgPyBudWxsIDogJzAnXCIgcm9sZT1cImNoZWNrYm94XCIgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrZWRcIiBwUmlwcGxlPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvbkljb258fG9mZkljb25cIiBbY2xhc3NdPVwiY2hlY2tlZCA/IHRoaXMub25JY29uIDogdGhpcy5vZmZJY29uXCIgXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWJ1dHRvbi1pY29uJzogdHJ1ZSwgJ3AtYnV0dG9uLWljb24tbGVmdCc6IChpY29uUG9zID09PSAnbGVmdCcpLCAncC1idXR0b24taWNvbi1yaWdodCc6IChpY29uUG9zID09PSAncmlnaHQnKX1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYnV0dG9uLWxhYmVsXCI+e3tjaGVja2VkID8gaGFzT25MYWJlbCA/IG9uTGFiZWwgOiAnJyA6IGhhc09mZkxhYmVsID8gb2ZmTGFiZWwgOiAnJ319PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1RPR0dMRUJVVFRPTl9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc3R5bGVVcmxzOiBbJy4uL2J1dHRvbi9idXR0b24uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgb25MYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb2ZmTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG9uSWNvbjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb2ZmSWNvbjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsbGVkQnk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBpY29uUG9zOiBzdHJpbmcgPSAnbGVmdCc7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICBcbiAgICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICBcbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cbiAgICBcbiAgICB0b2dnbGUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB0aGlzLmNoZWNrZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uQmx1cigpIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIH1cbiAgICBcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cbiAgICBcbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaGFzT25MYWJlbCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkxhYmVsICYmIHRoaXMub25MYWJlbC5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaGFzT2ZmTGFiZWwoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25MYWJlbCAmJiB0aGlzLm9uTGFiZWwubGVuZ3RoID4gMDtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtUb2dnbGVCdXR0b25dLFxuICAgIGRlY2xhcmF0aW9uczogW1RvZ2dsZUJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uTW9kdWxlIHsgfVxuIl19