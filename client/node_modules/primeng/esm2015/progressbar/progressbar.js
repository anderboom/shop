import { NgModule, Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ProgressBar_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("width", ctx_r0.value + "%");
} }
function ProgressBar_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r1.value != null ? "block" : "none");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2("", ctx_r1.value, "", ctx_r1.unit, "");
} }
function ProgressBar_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelement(1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = function (a1, a2) { return { "p-progressbar p-component": true, "p-progressbar-determinate": a1, "p-progressbar-indeterminate": a2 }; };
export class ProgressBar {
    constructor() {
        this.showValue = true;
        this.unit = '%';
        this.mode = 'determinate';
    }
}
ProgressBar.ɵfac = function ProgressBar_Factory(t) { return new (t || ProgressBar)(); };
ProgressBar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressBar, selectors: [["p-progressBar"]], inputs: { showValue: "showValue", unit: "unit", mode: "mode", value: "value", style: "style", styleClass: "styleClass" }, decls: 4, vars: 11, consts: [["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", "ngClass"], ["class", "p-progressbar-value p-progressbar-value-animate", "style", "display:block", 3, "width", 4, "ngIf"], ["class", "p-progressbar-label", 3, "display", 4, "ngIf"], ["class", "p-progressbar-indeterminate-container", 4, "ngIf"], [1, "p-progressbar-value", "p-progressbar-value-animate", 2, "display", "block"], [1, "p-progressbar-label"], [1, "p-progressbar-indeterminate-container"], [1, "p-progressbar-value", "p-progressbar-value-animate"]], template: function ProgressBar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ProgressBar_div_1_Template, 1, 2, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ProgressBar_div_2_Template, 2, 4, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ProgressBar_div_3_Template, 2, 0, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c0, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        ɵngcc0.ɵɵattribute("aria-valuenow", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "determinate");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "determinate" && ctx.showValue);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "indeterminate");
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".p-progressbar{overflow:hidden;position:relative}.p-progressbar-determinate .p-progressbar-value{border:0;display:none;height:100%;position:absolute;width:0}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-determinate .p-progressbar-label{font-weight:700;height:100%;position:absolute;text-align:center;width:100%}.p-progressbar-indeterminate .p-progressbar-value:before{animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}.p-progressbar-indeterminate .p-progressbar-value:after{animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}"], encapsulation: 2, changeDetection: 0 });
ProgressBar.propDecorators = {
    value: [{ type: Input }],
    showValue: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    unit: [{ type: Input }],
    mode: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressBar, [{
        type: Component,
        args: [{
                selector: 'p-progressBar',
                template: `
        <div [class]="styleClass" [ngStyle]="style" role="progressbar" aria-valuemin="0" [attr.aria-valuenow]="value" aria-valuemax="100"
            [ngClass]="{'p-progressbar p-component': true, 'p-progressbar-determinate': (mode === 'determinate'), 'p-progressbar-indeterminate': (mode === 'indeterminate')}">
            <div *ngIf="mode === 'determinate'" class="p-progressbar-value p-progressbar-value-animate" [style.width]="value + '%'" style="display:block"></div>
            <div *ngIf="mode === 'determinate' && showValue" class="p-progressbar-label" [style.display]="value != null ? 'block' : 'none'">{{value}}{{unit}}</div>
            <div *ngIf="mode === 'indeterminate'" class="p-progressbar-indeterminate-container">
                <div class="p-progressbar-value p-progressbar-value-animate"></div>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-progressbar{overflow:hidden;position:relative}.p-progressbar-determinate .p-progressbar-value{border:0;display:none;height:100%;position:absolute;width:0}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-determinate .p-progressbar-label{font-weight:700;height:100%;position:absolute;text-align:center;width:100%}.p-progressbar-indeterminate .p-progressbar-value:before{animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}.p-progressbar-indeterminate .p-progressbar-value:after{animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}"]
            }]
    }], function () { return []; }, { showValue: [{
            type: Input
        }], unit: [{
            type: Input
        }], mode: [{
            type: Input
        }], value: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class ProgressBarModule {
}
ProgressBarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressBarModule });
ProgressBarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressBarModule, { declarations: function () { return [ProgressBar]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ProgressBar]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [ProgressBar],
                declarations: [ProgressBar]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCN0MsTUFBTSxPQUFPLFdBQVc7QUFDeEIsSUFqQkE7QUFDRyxRQW1CVSxjQUFTLEdBQVksSUFBSSxDQUFDO0FBQ3ZDLFFBS2EsU0FBSSxHQUFXLEdBQUcsQ0FBQztBQUNoQyxRQUNhLFNBQUksR0FBVyxhQUFhLENBQUM7QUFDMUMsSUFDQSxDQUFDO0FBQ0Q7dUNBL0JDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUU7V0FBZSxrQkFDekIsUUFBUSxFQUFFO3lDQVNUO2VBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07TUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7d2RBRXhDLDB3QkFDSTtBQUFDO0FBRUcsb0JBQUosS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLG1CQUVWLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFTaEIsTUFBTSxPQUFPLGlCQUFpQjtBQUFHOzZDQUxoQyxRQUFRLFNBQUM7Q0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxrQkFDdEIsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQzlCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXByb2dyZXNzQmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiIFthdHRyLmFyaWEtdmFsdWVub3ddPVwidmFsdWVcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1wcm9ncmVzc2JhciBwLWNvbXBvbmVudCc6IHRydWUsICdwLXByb2dyZXNzYmFyLWRldGVybWluYXRlJzogKG1vZGUgPT09ICdkZXRlcm1pbmF0ZScpLCAncC1wcm9ncmVzc2Jhci1pbmRldGVybWluYXRlJzogKG1vZGUgPT09ICdpbmRldGVybWluYXRlJyl9XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibW9kZSA9PT0gJ2RldGVybWluYXRlJ1wiIGNsYXNzPVwicC1wcm9ncmVzc2Jhci12YWx1ZSBwLXByb2dyZXNzYmFyLXZhbHVlLWFuaW1hdGVcIiBbc3R5bGUud2lkdGhdPVwidmFsdWUgKyAnJSdcIiBzdHlsZT1cImRpc3BsYXk6YmxvY2tcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtb2RlID09PSAnZGV0ZXJtaW5hdGUnICYmIHNob3dWYWx1ZVwiIGNsYXNzPVwicC1wcm9ncmVzc2Jhci1sYWJlbFwiIFtzdHlsZS5kaXNwbGF5XT1cInZhbHVlICE9IG51bGwgPyAnYmxvY2snIDogJ25vbmUnXCI+e3t2YWx1ZX19e3t1bml0fX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtb2RlID09PSAnaW5kZXRlcm1pbmF0ZSdcIiBjbGFzcz1cInAtcHJvZ3Jlc3NiYXItaW5kZXRlcm1pbmF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1wcm9ncmVzc2Jhci12YWx1ZSBwLXByb2dyZXNzYmFyLXZhbHVlLWFuaW1hdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3NiYXIuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgICBcbiAgICBASW5wdXQoKSBzaG93VmFsdWU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdW5pdDogc3RyaW5nID0gJyUnO1xuICAgIFxuICAgIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdkZXRlcm1pbmF0ZSc7XG4gICAgXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1Byb2dyZXNzQmFyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtQcm9ncmVzc0Jhcl1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJNb2R1bGUgeyB9Il19