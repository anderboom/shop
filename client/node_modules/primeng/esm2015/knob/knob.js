import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, forwardRef, ChangeDetectorRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Knob__svg_text_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "text", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("x", 50)("y", 57)("fill", ctx_r0.textColor)("name", ctx_r0.name);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.valueToDisplay());
} }
export const KNOB_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Knob),
    multi: true
};
export class Knob {
    constructor(cd, el) {
        this.cd = cd;
        this.el = el;
        this.valueColor = "var(--primary-color, Black)";
        this.rangeColor = "var(--surface-d, LightGray)";
        this.textColor = "var(--text-color-secondary, Black)";
        this.valueTemplate = "{value}";
        this.size = 100;
        this.step = 1;
        this.min = 0;
        this.max = 100;
        this.strokeWidth = 14;
        this.showValue = true;
        this.readonly = false;
        this.onChange = new EventEmitter();
        this.radius = 40;
        this.midX = 50;
        this.midY = 50;
        this.minRadians = 4 * Math.PI / 3;
        this.maxRadians = -Math.PI / 3;
        this.value = null;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    mapRange(x, inMin, inMax, outMin, outMax) {
        return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    onClick(event) {
        if (!this.disabled && !this.readonly) {
            this.updateValue(event.offsetX, event.offsetY);
        }
    }
    updateValue(offsetX, offsetY) {
        let dx = offsetX - this.size / 2;
        let dy = this.size / 2 - offsetY;
        let angle = Math.atan2(dy, dx);
        let start = -Math.PI / 2 - Math.PI / 6;
        this.updateModel(angle, start);
    }
    updateModel(angle, start) {
        let mappedValue;
        if (angle > this.maxRadians)
            mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
        else if (angle < start)
            mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);
        else
            return;
        let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
        this.value = newValue;
        this.onModelChange(this.value);
        this.onChange.emit(this.value);
    }
    onMouseDown(event) {
        if (!this.disabled && !this.readonly) {
            this.windowMouseMoveListener = this.onMouseMove.bind(this);
            this.windowMouseUpListener = this.onMouseUp.bind(this);
            window.addEventListener('mousemove', this.windowMouseMoveListener);
            window.addEventListener('mouseup', this.windowMouseUpListener);
            event.preventDefault();
        }
    }
    onMouseUp(event) {
        if (!this.disabled && !this.readonly) {
            window.removeEventListener('mousemove', this.windowMouseMoveListener);
            window.removeEventListener('mouseup', this.windowMouseUpListener);
            this.windowMouseUpListener = null;
            this.windowMouseMoveListener = null;
            event.preventDefault();
        }
    }
    onTouchStart(event) {
        if (!this.disabled && !this.readonly) {
            this.windowTouchMoveListener = this.onTouchMove.bind(this);
            this.windowTouchEndListener = this.onTouchEnd.bind(this);
            window.addEventListener('touchmove', this.windowTouchMoveListener);
            window.addEventListener('touchend', this.windowTouchEndListener);
            event.preventDefault();
        }
    }
    onTouchEnd(event) {
        if (!this.disabled && !this.readonly) {
            window.removeEventListener('touchmove', this.windowTouchMoveListener);
            window.removeEventListener('touchend', this.windowTouchEndListener);
            this.windowTouchMoveListener = null;
            this.windowTouchEndListener = null;
            event.preventDefault();
        }
    }
    onMouseMove(event) {
        if (!this.disabled && !this.readonly) {
            this.updateValue(event.offsetX, event.offsetY);
            event.preventDefault();
        }
    }
    onTouchMove(event) {
        if (!this.disabled && !this.readonly && event.touches.length == 1) {
            const rect = this.el.nativeElement.children[0].getBoundingClientRect();
            const touch = event.targetTouches.item(0);
            const offsetX = touch.clientX - rect.left;
            const offsetY = touch.clientY - rect.top;
            this.updateValue(offsetX, offsetY);
        }
    }
    writeValue(value) {
        this.value = value;
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
    containerClass() {
        return {
            'p-knob p-component': true,
            'p-disabled': this.disabled
        };
    }
    rangePath() {
        return `M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`;
    }
    valuePath() {
        return `M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`;
    }
    zeroRadians() {
        if (this.min > 0 && this.max > 0)
            return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
        else
            return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
    }
    valueRadians() {
        return this.mapRange(this._value, this.min, this.max, this.minRadians, this.maxRadians);
    }
    minX() {
        return this.midX + Math.cos(this.minRadians) * this.radius;
    }
    minY() {
        return this.midY - Math.sin(this.minRadians) * this.radius;
    }
    maxX() {
        return this.midX + Math.cos(this.maxRadians) * this.radius;
    }
    maxY() {
        return this.midY - Math.sin(this.maxRadians) * this.radius;
    }
    zeroX() {
        return this.midX + Math.cos(this.zeroRadians()) * this.radius;
    }
    zeroY() {
        return this.midY - Math.sin(this.zeroRadians()) * this.radius;
    }
    valueX() {
        return this.midX + Math.cos(this.valueRadians()) * this.radius;
    }
    valueY() {
        return this.midY - Math.sin(this.valueRadians()) * this.radius;
    }
    largeArc() {
        return Math.abs(this.zeroRadians() - this.valueRadians()) < Math.PI ? 0 : 1;
    }
    sweep() {
        return this.valueRadians() > this.zeroRadians() ? 0 : 1;
    }
    valueToDisplay() {
        return this.valueTemplate.replace("{value}", this._value.toString());
    }
    get _value() {
        return this.value != null ? this.value : this.min;
    }
}
Knob.ɵfac = function Knob_Factory(t) { return new (t || Knob)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Knob.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Knob, selectors: [["p-knob"]], inputs: { valueColor: "valueColor", rangeColor: "rangeColor", textColor: "textColor", valueTemplate: "valueTemplate", size: "size", step: "step", min: "min", max: "max", strokeWidth: "strokeWidth", showValue: "showValue", readonly: "readonly", disabled: "disabled", styleClass: "styleClass", style: "style", severity: "severity", name: "name" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([KNOB_VALUE_ACCESSOR])], decls: 5, vars: 15, consts: [[3, "ngClass", "ngStyle"], ["viewBox", "0 0 100 100", 3, "click", "mousedown", "mouseup", "touchstart", "touchend"], [1, "p-knob-range"], [1, "p-knob-value"], ["text-anchor", "middle", "class", "p-knob-text", 4, "ngIf"], ["text-anchor", "middle", 1, "p-knob-text"]], template: function Knob_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "svg", 1);
        ɵngcc0.ɵɵlistener("click", function Knob_Template__svg_svg_click_1_listener($event) { return ctx.onClick($event); })("mousedown", function Knob_Template__svg_svg_mousedown_1_listener($event) { return ctx.onMouseDown($event); })("mouseup", function Knob_Template__svg_svg_mouseup_1_listener($event) { return ctx.onMouseUp($event); })("touchstart", function Knob_Template__svg_svg_touchstart_1_listener($event) { return ctx.onTouchStart($event); })("touchend", function Knob_Template__svg_svg_touchend_1_listener($event) { return ctx.onTouchEnd($event); });
        ɵngcc0.ɵɵelement(2, "path", 2);
        ɵngcc0.ɵɵelement(3, "path", 3);
        ɵngcc0.ɵɵtemplate(4, Knob__svg_text_4_Template, 2, 5, "text", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("width", ctx.size + "px")("height", ctx.size + "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("d", ctx.rangePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.rangeColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("d", ctx.valuePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.valueColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showValue);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf], styles: ["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-fill-mode:forwards;animation-name:dash-frame;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}"], encapsulation: 2, changeDetection: 0 });
Knob.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
Knob.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    severity: [{ type: Input }],
    valueColor: [{ type: Input }],
    rangeColor: [{ type: Input }],
    textColor: [{ type: Input }],
    valueTemplate: [{ type: Input }],
    name: [{ type: Input }],
    size: [{ type: Input }],
    step: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    disabled: [{ type: Input }],
    showValue: [{ type: Input }],
    readonly: [{ type: Input }],
    onChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Knob, [{
        type: Component,
        args: [{
                selector: 'p-knob',
                template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
        <svg viewBox="0 0 100 100" [style.width]="size + 'px'" [style.height]="size + 'px'" (click)="onClick($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)"
            (touchstart)="onTouchStart($event)" (touchend)="onTouchEnd($event)">
            <path [attr.d]="rangePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="rangeColor" class="p-knob-range"></path>
            <path [attr.d]="valuePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="valueColor" class="p-knob-value"></path>
            <text *ngIf="showValue" [attr.x]="50" [attr.y]="57" text-anchor="middle" [attr.fill]="textColor" class="p-knob-text" [attr.name]="name">{{valueToDisplay()}}</text>
        </svg>
        </div>
    `,
                providers: [KNOB_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-fill-mode:forwards;animation-name:dash-frame;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { valueColor: [{
            type: Input
        }], rangeColor: [{
            type: Input
        }], textColor: [{
            type: Input
        }], valueTemplate: [{
            type: Input
        }], size: [{
            type: Input
        }], step: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }], showValue: [{
            type: Input
        }], readonly: [{
            type: Input
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], severity: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();
export class KnobModule {
}
KnobModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: KnobModule });
KnobModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function KnobModule_Factory(t) { return new (t || KnobModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(KnobModule, { declarations: function () { return [Knob]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Knob]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KnobModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Knob],
                declarations: [Knob]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25vYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2tub2Iva25vYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZLLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFRO0FBQ3hDLElBQUksT0FBTyxFQUFFLGlCQUFpQjtBQUM5QixJQUFJLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLElBQUksS0FBSyxFQUFFLElBQUk7QUFDZixDQUFDLENBQUM7QUFtQkYsTUFBTSxPQUFPLElBQUk7QUFDakIsSUEyREksWUFBb0IsRUFBcUIsRUFBVSxFQUFjO0FBQUksUUFBakQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQXBEekQsZUFBVSxHQUFXLDZCQUE2QixDQUFDO0FBQ2hFLFFBQ2EsZUFBVSxHQUFXLDZCQUE2QixDQUFDO0FBQ2hFLFFBQ2EsY0FBUyxHQUFXLG9DQUFvQyxDQUFDO0FBQ3RFLFFBQ2Esa0JBQWEsR0FBVyxTQUFTLENBQUM7QUFDL0MsUUFHYSxTQUFJLEdBQVcsR0FBRyxDQUFDO0FBQ2hDLFFBQ2EsU0FBSSxHQUFXLENBQUMsQ0FBQztBQUM5QixRQUNhLFFBQUcsR0FBVyxDQUFDLENBQUM7QUFDN0IsUUFDYSxRQUFHLEdBQVcsR0FBRyxDQUFDO0FBQy9CLFFBQ2EsZ0JBQVcsR0FBVyxF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dUJBRVYsS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssdUJBRVYsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUF3TmpCLE1BQU0sT0FBTyxVQUFVO0FBQUc7c0NBTHpCLFFBQVEsU0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUNmLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUN2Qjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgS05PQl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEtub2IpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Ata25vYicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzcygpXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIFtzdHlsZS53aWR0aF09XCJzaXplICsgJ3B4J1wiIFtzdHlsZS5oZWlnaHRdPVwic2l6ZSArICdweCdcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCIgKG1vdXNlZG93bik9XCJvbk1vdXNlRG93bigkZXZlbnQpXCIgKG1vdXNldXApPVwib25Nb3VzZVVwKCRldmVudClcIlxuICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwib25Ub3VjaFN0YXJ0KCRldmVudClcIiAodG91Y2hlbmQpPVwib25Ub3VjaEVuZCgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cInJhbmdlUGF0aCgpXCIgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN0cm9rZVdpZHRoXCIgW2F0dHIuc3Ryb2tlXT1cInJhbmdlQ29sb3JcIiBjbGFzcz1cInAta25vYi1yYW5nZVwiPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIFthdHRyLmRdPVwidmFsdWVQYXRoKClcIiBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3Ryb2tlV2lkdGhcIiBbYXR0ci5zdHJva2VdPVwidmFsdWVDb2xvclwiIGNsYXNzPVwicC1rbm9iLXZhbHVlXCI+PC9wYXRoPlxuICAgICAgICAgICAgPHRleHQgKm5nSWY9XCJzaG93VmFsdWVcIiBbYXR0ci54XT1cIjUwXCIgW2F0dHIueV09XCI1N1wiIHRleHQtYW5jaG9yPVwibWlkZGxlXCIgW2F0dHIuZmlsbF09XCJ0ZXh0Q29sb3JcIiBjbGFzcz1cInAta25vYi10ZXh0XCIgW2F0dHIubmFtZV09XCJuYW1lXCI+e3t2YWx1ZVRvRGlzcGxheSgpfX08L3RleHQ+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0tOT0JfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4va25vYi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBLbm9iIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzZXZlcml0eTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdmFsdWVDb2xvcjogc3RyaW5nID0gXCJ2YXIoLS1wcmltYXJ5LWNvbG9yLCBCbGFjaylcIjtcblxuICAgIEBJbnB1dCgpIHJhbmdlQ29sb3I6IHN0cmluZyA9IFwidmFyKC0tc3VyZmFjZS1kLCBMaWdodEdyYXkpXCI7XG5cbiAgICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZyA9IFwidmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnksIEJsYWNrKVwiO1xuXG4gICAgQElucHV0KCkgdmFsdWVUZW1wbGF0ZTogc3RyaW5nID0gXCJ7dmFsdWV9XCI7XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSAxMDA7XG5cbiAgICBASW5wdXQoKSBzdGVwOiBudW1iZXIgPSAxO1xuXG4gICAgQElucHV0KCkgbWluOiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgbWF4OiBudW1iZXIgPSAxMDA7XG5cbiAgICBASW5wdXQoKSBzdHJva2VXaWR0aDogbnVtYmVyID0gMTQ7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHNob3dWYWx1ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHJhZGl1czogbnVtYmVyID0gNDA7XG5cbiAgICBtaWRYOiBudW1iZXIgPSA1MDtcblxuICAgIG1pZFk6IG51bWJlciA9IDUwO1xuXG4gICAgbWluUmFkaWFuczogbnVtYmVyID0gNCAqIE1hdGguUEkgLyAzO1xuXG4gICAgbWF4UmFkaWFuczogbnVtYmVyID0gLU1hdGguUEkgLyAzO1xuICAgIFxuICAgIHZhbHVlOiBudW1iZXIgPSBudWxsO1xuXG4gICAgd2luZG93TW91c2VNb3ZlTGlzdGVuZXI6IGFueTtcblxuICAgIHdpbmRvd01vdXNlVXBMaXN0ZW5lcjogYW55O1xuXG4gICAgd2luZG93VG91Y2hNb3ZlTGlzdGVuZXI6IGFueTtcblxuICAgIHdpbmRvd1RvdWNoRW5kTGlzdGVuZXI6IGFueTtcblxuICAgIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG1hcFJhbmdlKHgsIGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgpIHtcbiAgICAgICAgcmV0dXJuICh4IC0gaW5NaW4pICogKG91dE1heCAtIG91dE1pbikgLyAoaW5NYXggLSBpbk1pbikgKyBvdXRNaW47XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZShvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIGxldCBkeCA9IG9mZnNldFggLSB0aGlzLnNpemUgLyAyO1xuICAgICAgICBsZXQgZHkgPSAgdGhpcy5zaXplIC8gMiAtIG9mZnNldFk7XG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gLU1hdGguUEkgLyAyIC0gTWF0aC5QSSAvIDY7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwoYW5nbGUsIHN0YXJ0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVNb2RlbChhbmdsZSwgc3RhcnQpIHtcbiAgICAgICAgbGV0IG1hcHBlZFZhbHVlO1xuICAgICAgICBpZiAoYW5nbGUgPiB0aGlzLm1heFJhZGlhbnMpXG4gICAgICAgICAgICBtYXBwZWRWYWx1ZSA9IHRoaXMubWFwUmFuZ2UoYW5nbGUsIHRoaXMubWluUmFkaWFucywgdGhpcy5tYXhSYWRpYW5zLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgICBlbHNlIGlmIChhbmdsZSA8IHN0YXJ0KVxuICAgICAgICAgICAgbWFwcGVkVmFsdWUgPSB0aGlzLm1hcFJhbmdlKGFuZ2xlICsgMiAqIE1hdGguUEksIHRoaXMubWluUmFkaWFucywgdGhpcy5tYXhSYWRpYW5zLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gTWF0aC5yb3VuZCgobWFwcGVkVmFsdWUgLSB0aGlzLm1pbikgLyB0aGlzLnN0ZXApICogdGhpcy5zdGVwICsgdGhpcy5taW47XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLndpbmRvd01vdXNlTW92ZUxpc3RlbmVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpXG4gICAgICAgICAgICB0aGlzLndpbmRvd01vdXNlVXBMaXN0ZW5lciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcylcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLndpbmRvd01vdXNlTW92ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy53aW5kb3dNb3VzZVVwTGlzdGVuZXIpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VVcChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLndpbmRvd01vdXNlTW92ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy53aW5kb3dNb3VzZVVwTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dNb3VzZVVwTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dNb3VzZU1vdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy53aW5kb3dUb3VjaE1vdmVMaXN0ZW5lciA9IHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMud2luZG93VG91Y2hFbmRMaXN0ZW5lciA9IHRoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMud2luZG93VG91Y2hNb3ZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy53aW5kb3dUb3VjaEVuZExpc3RlbmVyKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMud2luZG93VG91Y2hNb3ZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy53aW5kb3dUb3VjaEVuZExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMud2luZG93VG91Y2hNb3ZlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dUb3VjaEVuZExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5ICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXMuaXRlbSgwKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSB0b3VjaC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRvdWNoLmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUob2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY29udGFpbmVyQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncC1rbm9iIHAtY29tcG9uZW50JzogdHJ1ZSxcbiAgICAgICAgICAgICdwLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJhbmdlUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIGBNICR7dGhpcy5taW5YKCl9ICR7dGhpcy5taW5ZKCl9IEEgJHt0aGlzLnJhZGl1c30gJHt0aGlzLnJhZGl1c30gMCAxIDEgJHt0aGlzLm1heFgoKX0gJHt0aGlzLm1heFkoKX1gO1xuICAgIH1cblxuICAgIHZhbHVlUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIGBNICR7dGhpcy56ZXJvWCgpfSAke3RoaXMuemVyb1koKX0gQSAke3RoaXMucmFkaXVzfSAke3RoaXMucmFkaXVzfSAwICR7dGhpcy5sYXJnZUFyYygpfSAke3RoaXMuc3dlZXAoKX0gJHt0aGlzLnZhbHVlWCgpfSAke3RoaXMudmFsdWVZKCl9YDtcbiAgICB9XG5cbiAgICB6ZXJvUmFkaWFucygpIHtcbiAgICAgICAgaWYgKHRoaXMubWluID4gMCAmJiB0aGlzLm1heCA+IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBSYW5nZSh0aGlzLm1pbiwgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLm1pblJhZGlhbnMsIHRoaXMubWF4UmFkaWFucyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcFJhbmdlKDAsIHRoaXMubWluLCB0aGlzLm1heCwgdGhpcy5taW5SYWRpYW5zLCB0aGlzLm1heFJhZGlhbnMpO1xuICAgIH1cblxuICAgIHZhbHVlUmFkaWFucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwUmFuZ2UodGhpcy5fdmFsdWUsIHRoaXMubWluLCB0aGlzLm1heCwgdGhpcy5taW5SYWRpYW5zLCB0aGlzLm1heFJhZGlhbnMpO1xuICAgIH1cblxuICAgIG1pblgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pZFggKyBNYXRoLmNvcyh0aGlzLm1pblJhZGlhbnMpICogdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgbWluWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlkWSAtIE1hdGguc2luKHRoaXMubWluUmFkaWFucykgKiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBtYXhYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWRYICsgTWF0aC5jb3ModGhpcy5tYXhSYWRpYW5zKSAqIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIG1heFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pZFkgLSBNYXRoLnNpbih0aGlzLm1heFJhZGlhbnMpICogdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgemVyb1goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pZFggKyBNYXRoLmNvcyh0aGlzLnplcm9SYWRpYW5zKCkpICogdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgemVyb1koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pZFkgLSBNYXRoLnNpbih0aGlzLnplcm9SYWRpYW5zKCkpICogdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgdmFsdWVYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWRYICsgTWF0aC5jb3ModGhpcy52YWx1ZVJhZGlhbnMoKSkgKiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICB2YWx1ZVkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pZFkgLSBNYXRoLnNpbih0aGlzLnZhbHVlUmFkaWFucygpKSAqIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIGxhcmdlQXJjKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy56ZXJvUmFkaWFucygpIC0gdGhpcy52YWx1ZVJhZGlhbnMoKSkgPCBNYXRoLlBJID8gMCA6IDE7XG4gICAgfVxuXG4gICAgc3dlZXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlUmFkaWFucygpID4gdGhpcy56ZXJvUmFkaWFucygpID8gMCA6IDE7XG4gICAgfVxuXG4gICAgdmFsdWVUb0Rpc3BsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlVGVtcGxhdGUucmVwbGFjZShcInt2YWx1ZX1cIiwgdGhpcy5fdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgZ2V0IF92YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsID8gdGhpcy52YWx1ZSA6IHRoaXMubWluO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbS25vYl0sXG4gICAgZGVjbGFyYXRpb25zOiBbS25vYl1cbn0pXG5leHBvcnQgY2xhc3MgS25vYk1vZHVsZSB7IH1cbiJdfQ==