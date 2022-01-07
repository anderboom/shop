import { NgModule, Component, Input, forwardRef, EventEmitter, Output, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a1, a2, a3) { return { "p-inputswitch p-component": true, "p-inputswitch-checked": a1, "p-disabled": a2, "p-focus": a3 }; };
export const INPUTSWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSwitch),
    multi: true
};
export class InputSwitch {
    constructor(cd) {
        this.cd = cd;
        this.onChange = new EventEmitter();
        this.checked = false;
        this.focused = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    onClick(event, cb) {
        if (!this.disabled && !this.readonly) {
            event.preventDefault();
            this.toggle(event);
            cb.focus();
        }
    }
    onInputChange(event) {
        if (!this.readonly) {
            const inputChecked = event.target.checked;
            this.updateModel(event, inputChecked);
        }
    }
    toggle(event) {
        this.updateModel(event, !this.checked);
    }
    updateModel(event, value) {
        this.checked = value;
        this.onModelChange(this.checked);
        this.onChange.emit({
            originalEvent: event,
            checked: this.checked
        });
    }
    onFocus(event) {
        this.focused = true;
    }
    onBlur(event) {
        this.focused = false;
        this.onModelTouched();
    }
    writeValue(checked) {
        this.checked = checked;
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
}
InputSwitch.ɵfac = function InputSwitch_Factory(t) { return new (t || InputSwitch)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
InputSwitch.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputSwitch, selectors: [["p-inputSwitch"]], inputs: { disabled: "disabled", style: "style", styleClass: "styleClass", tabindex: "tabindex", inputId: "inputId", name: "name", readonly: "readonly", ariaLabelledBy: "ariaLabelledBy" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([INPUTSWITCH_VALUE_ACCESSOR])], decls: 5, vars: 15, consts: [[3, "ngClass", "ngStyle", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", "role", "switch", 3, "checked", "disabled", "change", "focus", "blur"], ["cb", ""], [1, "p-inputswitch-slider"]], template: function InputSwitch_Template(rf, ctx) { if (rf & 1) {
        const _r1 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function InputSwitch_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r1); const _r0 = ɵngcc0.ɵɵreference(3); return ctx.onClick($event, _r0); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("change", function InputSwitch_Template_input_change_2_listener($event) { return ctx.onInputChange($event); })("focus", function InputSwitch_Template_input_focus_2_listener($event) { return ctx.onFocus($event); })("blur", function InputSwitch_Template_input_blur_2_listener($event) { return ctx.onBlur($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "span", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(11, _c0, ctx.checked, ctx.disabled, ctx.focused))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-checked", ctx.checked)("aria-labelledby", ctx.ariaLabelledBy);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-inputswitch{-ms-user-select:none;-webkit-user-select:none;display:inline-block;position:relative;user-select:none}.p-inputswitch-slider{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.p-inputswitch-slider:before{content:\"\";position:absolute;top:50%}"], encapsulation: 2, changeDetection: 0 });
InputSwitch.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
InputSwitch.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    tabindex: [{ type: Input }],
    inputId: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    onChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputSwitch, [{
        type: Component,
        args: [{
                selector: 'p-inputSwitch',
                template: `
        <div [ngClass]="{'p-inputswitch p-component': true, 'p-inputswitch-checked': checked, 'p-disabled': disabled, 'p-focus': focused}" 
            [ngStyle]="style" [class]="styleClass" (click)="onClick($event, cb)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [attr.tabindex]="tabindex" [checked]="checked" (change)="onInputChange($event)"
                    (focus)="onFocus($event)" (blur)="onBlur($event)" [disabled]="disabled" role="switch" [attr.aria-checked]="checked" [attr.aria-labelledby]="ariaLabelledBy"/>
            </div>
            <span class="p-inputswitch-slider"></span>
        </div>
    `,
                providers: [INPUTSWITCH_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-inputswitch{-ms-user-select:none;-webkit-user-select:none;display:inline-block;position:relative;user-select:none}.p-inputswitch-slider{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.p-inputswitch-slider:before{content:\"\";position:absolute;top:50%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { onChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], inputId: [{
            type: Input
        }], name: [{
            type: Input
        }], readonly: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }] }); })();
export class InputSwitchModule {
}
InputSwitchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputSwitchModule });
InputSwitchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputSwitchModule_Factory(t) { return new (t || InputSwitchModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputSwitchModule, { declarations: function () { return [InputSwitch]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputSwitch]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputSwitchModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [InputSwitch],
                declarations: [InputSwitch]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzd2l0Y2guanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dHN3aXRjaC9pbnB1dHN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkosT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBc0IsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFdEUsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQVE7QUFDL0MsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7QUFDNUMsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQW1CRixNQUFNLE9BQU8sV0FBVztBQUFHLElBNEJ2QixZQUFvQixFQUFxQjtBQUFJLFFBQXpCLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUFWaEMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQy9ELFFBQ0ksWUFBTyxHQUFZLEtBQUssQ0FBQztBQUM3QixRQUNJLFlBQU8sR0FBWSxLQUFLLENBQUM7QUFDN0IsUUFDSSxrQkFBYSxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUN2QyxRQUNJLG1CQUFjLEdBQWEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3hDLElBQ2dELENBQUM7QUFDakQsSUFDSSxPQUFPLENBQUMsS0FBWSxFQUFFLEVBQW9CO0FBQzlDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFF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QUFpQjtBQUFHOzZDQUxoQyxRQUFRLFNBQUM7Q0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxrQkFDdEIsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQzlCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LGZvcndhcmRSZWYsRXZlbnRFbWl0dGVyLE91dHB1dCxDaGFuZ2VEZXRlY3RvclJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SLENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBJTlBVVFNXSVRDSF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRTd2l0Y2gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWlucHV0U3dpdGNoJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsncC1pbnB1dHN3aXRjaCBwLWNvbXBvbmVudCc6IHRydWUsICdwLWlucHV0c3dpdGNoLWNoZWNrZWQnOiBjaGVja2VkLCAncC1kaXNhYmxlZCc6IGRpc2FibGVkLCAncC1mb2N1cyc6IGZvY3VzZWR9XCIgXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50LCBjYilcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0ICNjYiB0eXBlPVwiY2hlY2tib3hcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIiBbY2hlY2tlZF09XCJjaGVja2VkXCIgKGNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwib25CbHVyKCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiByb2xlPVwic3dpdGNoXCIgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrZWRcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dHN3aXRjaC1zbGlkZXJcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbSU5QVVRTV0lUQ0hfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW5wdXRzd2l0Y2guY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRTd2l0Y2ggaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIG9uQ2xpY2soZXZlbnQ6IEV2ZW50LCBjYjogSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZShldmVudCk7XG4gICAgICAgICAgICBjYi5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dENoZWNrZWQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkuY2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsIGlucHV0Q2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsICF0aGlzLmNoZWNrZWQpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1vZGVsKGV2ZW50OiBFdmVudCwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBjaGVja2VkOiB0aGlzLmNoZWNrZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Gb2N1cyhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkJsdXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZShjaGVja2VkOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG4gICAgXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0lucHV0U3dpdGNoXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJbnB1dFN3aXRjaF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRTd2l0Y2hNb2R1bGUgeyB9XG4iXX0=