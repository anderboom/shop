import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0, a1, a2) { return { "p-checkbox-label-active": a0, "p-disabled": a1, "p-checkbox-label-focus": a2 }; };
function TriStateCheckbox_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 7);
    ɵngcc0.ɵɵlistener("click", function TriStateCheckbox_label_6_Template_label_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); const _r0 = ɵngcc0.ɵɵreference(3); return ctx_r2.onClick($event, _r0); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c0, ctx_r1.value != null, ctx_r1.disabled, ctx_r1.focused));
    ɵngcc0.ɵɵattribute("for", ctx_r1.inputId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
const _c1 = function (a1, a2) { return { "p-checkbox p-component": true, "p-checkbox-disabled": a1, "p-checkbox-focused": a2 }; };
const _c2 = function (a0, a1, a2) { return { "p-highlight": a0, "p-disabled": a1, "p-focus": a2 }; };
export const TRISTATECHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TriStateCheckbox),
    multi: true
};
export class TriStateCheckbox {
    constructor(cd) {
        this.cd = cd;
        this.checkboxTrueIcon = 'pi pi-check';
        this.checkboxFalseIcon = 'pi pi-times';
        this.onChange = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    onClick(event, input) {
        if (!this.disabled && !this.readonly) {
            this.toggle(event);
            this.focused = true;
            input.focus();
        }
    }
    onKeydown(event) {
        if (event.keyCode == 32) {
            event.preventDefault();
        }
    }
    onKeyup(event) {
        if (event.keyCode == 32 && !this.readonly) {
            this.toggle(event);
            event.preventDefault();
        }
    }
    toggle(event) {
        if (this.value == null || this.value == undefined)
            this.value = true;
        else if (this.value == true)
            this.value = false;
        else if (this.value == false)
            this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
        this.onModelTouched();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
        this.cd.markForCheck();
    }
}
TriStateCheckbox.ɵfac = function TriStateCheckbox_Factory(t) { return new (t || TriStateCheckbox)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TriStateCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TriStateCheckbox, selectors: [["p-triStateCheckbox"]], inputs: { checkboxTrueIcon: "checkboxTrueIcon", checkboxFalseIcon: "checkboxFalseIcon", disabled: "disabled", name: "name", ariaLabelledBy: "ariaLabelledBy", tabindex: "tabindex", inputId: "inputId", style: "style", styleClass: "styleClass", label: "label", readonly: "readonly" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([TRISTATECHECKBOX_VALUE_ACCESSOR])], decls: 7, vars: 21, consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "text", "inputmode", "none", 3, "name", "readonly", "disabled", "keyup", "keydown", "focus", "blur"], ["input", ""], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], ["class", "p-checkbox-label", 3, "ngClass", "click", 4, "ngIf"], [1, "p-checkbox-label", 3, "ngClass", "click"]], template: function TriStateCheckbox_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("keyup", function TriStateCheckbox_Template_input_keyup_2_listener($event) { return ctx.onKeyup($event); })("keydown", function TriStateCheckbox_Template_input_keydown_2_listener($event) { return ctx.onKeydown($event); })("focus", function TriStateCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TriStateCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵlistener("click", function TriStateCheckbox_Template_div_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const _r0 = ɵngcc0.ɵɵreference(3); return ctx.onClick($event, _r0); });
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, TriStateCheckbox_label_6_Template, 2, 7, "label", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction2(14, _c1, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("name", ctx.name)("readonly", ctx.readonly)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(17, _c2, ctx.value != null, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.value === true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.value === true ? ctx.checkboxTrueIcon : ctx.value === false ? ctx.checkboxFalseIcon : "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
TriStateCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TriStateCheckbox.propDecorators = {
    disabled: [{ type: Input }],
    name: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    tabindex: [{ type: Input }],
    inputId: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    label: [{ type: Input }],
    readonly: [{ type: Input }],
    checkboxTrueIcon: [{ type: Input }],
    checkboxFalseIcon: [{ type: Input }],
    onChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TriStateCheckbox, [{
        type: Component,
        args: [{
                selector: 'p-triStateCheckbox',
                template: `
        <div [ngStyle]="style" [ngClass]="{'p-checkbox p-component': true,'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused}" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #input type="text" [attr.id]="inputId" [name]="name" [attr.tabindex]="tabindex" [readonly]="readonly" [disabled]="disabled" (keyup)="onKeyup($event)" (keydown)="onKeydown($event)" (focus)="onFocus()" (blur)="onBlur()" [attr.aria-labelledby]="ariaLabelledBy" inputmode="none">
            </div>
            <div class="p-checkbox-box" (click)="onClick($event,input)"  role="checkbox" [attr.aria-checked]="value === true"
                [ngClass]="{'p-highlight':value!=null,'p-disabled':disabled,'p-focus':focused}">
                <span class="p-checkbox-icon" [ngClass]="value === true ? checkboxTrueIcon : value === false ? checkboxFalseIcon : ''"></span>
            </div>
        </div>
        <label class="p-checkbox-label" (click)="onClick($event,input)"
               [ngClass]="{'p-checkbox-label-active':value!=null, 'p-disabled':disabled, 'p-checkbox-label-focus':focused}"
               *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
                providers: [TRISTATECHECKBOX_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { checkboxTrueIcon: [{
            type: Input
        }], checkboxFalseIcon: [{
            type: Input
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], name: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], inputId: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], label: [{
            type: Input
        }], readonly: [{
            type: Input
        }] }); })();
export class TriStateCheckboxModule {
}
TriStateCheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TriStateCheckboxModule });
TriStateCheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TriStateCheckboxModule_Factory(t) { return new (t || TriStateCheckboxModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TriStateCheckboxModule, { declarations: function () { return [TriStateCheckbox]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TriStateCheckbox]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TriStateCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [TriStateCheckbox],
                declarations: [TriStateCheckbox]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpc3RhdGVjaGVja2JveC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3RyaXN0YXRlY2hlY2tib3gvdHJpc3RhdGVjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkosT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQVE7QUFDcEQsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNqRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBc0JGLE1BQU0sT0FBTyxnQkFBZ0I7QUFBRyxJQUU1QixZQUFvQixFQUFxQjtBQUFJLFFBQXpCLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUFvQmpDLHFCQUFnQixHQUFXLGFBQWEsQ0FBQztBQUN0RCxRQUNhLHNCQUFpQixHQUFXLGFBQWEsQ0FBQztBQUN2RCxRQUNjLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMvRCxRQUtJLGtCQUFhLEdBQWEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3ZDLFFBQ0ksbUJBQWMsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDeEMsSUFqQ2dELENBQUM7QUFDakQsSUFpQ0ksT0FBTyxDQUFDLEtBQVksRUFBRSxLQUF1QjtBQUNqRCxRQUFRLElBQUksQ0FBQyxJQUFJ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SSxjQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0R0FDSTtBQUFDO0FBQTBDLFlBOUJnQixpQkFBaUI7QUFBRztBQUFHO0FBQW9DLHVCQWtDdEgsS0FBSztBQUFLLG1CQUVWLEtBQUs7QUFBSyw2QkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLHNCQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssK0JBRVYsS0FBSztBQUFLLGdDQUVWLEtBQUs7QUFBSyx1QkFFVixNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBK0VqQixNQUFNLE9BQU8sc0JBQXNCO0FBQUc7a0RBTHJDLFFBQVEsU0FBQyxrQkFDTjtHQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLGtCQUMzQixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUNuQzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLGZvcndhcmRSZWYsQ2hhbmdlRGV0ZWN0b3JSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IFRSSVNUQVRFQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRyaVN0YXRlQ2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRyaVN0YXRlQ2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nU3R5bGVdPVwic3R5bGVcIiBbbmdDbGFzc109XCJ7J3AtY2hlY2tib3ggcC1jb21wb25lbnQnOiB0cnVlLCdwLWNoZWNrYm94LWRpc2FibGVkJzogZGlzYWJsZWQsICdwLWNoZWNrYm94LWZvY3VzZWQnOiBmb2N1c2VkfVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInRleHRcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW25hbWVdPVwibmFtZVwiIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4XCIgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGtleXVwKT1cIm9uS2V5dXAoJGV2ZW50KVwiIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQpXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCIgaW5wdXRtb2RlPVwibm9uZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveC1ib3hcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQsaW5wdXQpXCIgIHJvbGU9XCJjaGVja2JveFwiIFthdHRyLmFyaWEtY2hlY2tlZF09XCJ2YWx1ZSA9PT0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWhpZ2hsaWdodCc6dmFsdWUhPW51bGwsJ3AtZGlzYWJsZWQnOmRpc2FibGVkLCdwLWZvY3VzJzpmb2N1c2VkfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1jaGVja2JveC1pY29uXCIgW25nQ2xhc3NdPVwidmFsdWUgPT09IHRydWUgPyBjaGVja2JveFRydWVJY29uIDogdmFsdWUgPT09IGZhbHNlID8gY2hlY2tib3hGYWxzZUljb24gOiAnJ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicC1jaGVja2JveC1sYWJlbFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudCxpbnB1dClcIlxuICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWNoZWNrYm94LWxhYmVsLWFjdGl2ZSc6dmFsdWUhPW51bGwsICdwLWRpc2FibGVkJzpkaXNhYmxlZCwgJ3AtY2hlY2tib3gtbGFiZWwtZm9jdXMnOmZvY3VzZWR9XCJcbiAgICAgICAgICAgICAgICpuZ0lmPVwibGFiZWxcIiBbYXR0ci5mb3JdPVwiaW5wdXRJZFwiPnt7bGFiZWx9fTwvbGFiZWw+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtUUklTVEFURUNIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRyaVN0YXRlQ2hlY2tib3ggaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciAge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGNoZWNrYm94VHJ1ZUljb246IHN0cmluZyA9ICdwaSBwaS1jaGVjayc7XG5cbiAgICBASW5wdXQoKSBjaGVja2JveEZhbHNlSWNvbjogc3RyaW5nID0gJ3BpIHBpLXRpbWVzJztcblxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBmb2N1c2VkOiBib29sZWFuO1xuXG4gICAgdmFsdWU6IGFueTtcblxuICAgIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIG9uQ2xpY2soZXZlbnQ6IEV2ZW50LCBpbnB1dDogSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMiAmJiAhdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoZXZlbnQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gbnVsbCB8fCB0aGlzLnZhbHVlID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlID09IHRydWUpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudmFsdWUgPT0gZmFsc2UpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcblxuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1RyaVN0YXRlQ2hlY2tib3hdLFxuICAgIGRlY2xhcmF0aW9uczogW1RyaVN0YXRlQ2hlY2tib3hdXG59KVxuZXhwb3J0IGNsYXNzIFRyaVN0YXRlQ2hlY2tib3hNb2R1bGUgeyB9XG4iXX0=