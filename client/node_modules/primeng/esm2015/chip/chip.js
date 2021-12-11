import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Chip_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 6);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("src", ctx_r1.image, ɵngcc0.ɵɵsanitizeUrl);
} }
function Chip_div_0_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMap(ctx_r6.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-chip-icon");
} }
function Chip_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Chip_div_0_ng_template_3_span_0_Template, 1, 3, "span", 7);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.icon);
} }
function Chip_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.label);
} }
function Chip_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵlistener("click", function Chip_div_0_span_6_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.close($event); })("keydown.enter", function Chip_div_0_span_6_Template_span_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.close($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r5.removeIcon);
    ɵngcc0.ɵɵproperty("ngClass", "pi-chip-remove-icon");
} }
function Chip_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Chip_div_0_img_2_Template, 1, 1, "img", 2);
    ɵngcc0.ɵɵtemplate(3, Chip_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, Chip_div_0_div_5_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(6, Chip_div_0_span_6_Template, 1, 3, "span", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = ɵngcc0.ɵɵreference(4);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.image)("ngIfElse", _r2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.removable);
} }
const _c0 = ["*"];
export class Chip {
    constructor() {
        this.removeIcon = "pi pi-times-circle";
        this.onRemove = new EventEmitter();
        this.visible = true;
    }
    containerClass() {
        return {
            'p-chip p-component': true,
            'p-chip-image': this.image != null
        };
    }
    close(event) {
        this.visible = false;
        this.onRemove.emit(event);
    }
}
Chip.ɵfac = function Chip_Factory(t) { return new (t || Chip)(); };
Chip.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Chip, selectors: [["p-chip"]], inputs: { removeIcon: "removeIcon", label: "label", icon: "icon", image: "image", style: "style", styleClass: "styleClass", removable: "removable" }, outputs: { onRemove: "onRemove" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "src", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["class", "p-chip-text", 4, "ngIf"], ["tabindex", "0", 3, "class", "ngClass", "click", "keydown.enter", 4, "ngIf"], [3, "src"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-chip-text"], ["tabindex", "0", 3, "ngClass", "click", "keydown.enter"]], template: function Chip_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, Chip_div_0_Template, 7, 8, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-chip{align-items:center;display:inline-flex}.p-chip-icon.pi,.p-chip-text{line-height:1.5}.pi-chip-remove-icon{cursor:pointer;line-height:1.5}.p-chip img{border-radius:50%}"], encapsulation: 2, changeDetection: 0 });
Chip.propDecorators = {
    label: [{ type: Input }],
    icon: [{ type: Input }],
    image: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    removable: [{ type: Input }],
    removeIcon: [{ type: Input }],
    onRemove: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Chip, [{
        type: Component,
        args: [{
                selector: 'p-chip',
                template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" *ngIf="visible">
            <ng-content></ng-content>
            <img [src]="image" *ngIf="image;else iconTemplate">
            <ng-template #iconTemplate><span *ngIf="icon" [class]="icon" [ngClass]="'p-chip-icon'"></span></ng-template>
            <div class="p-chip-text" *ngIf="label">{{label}}</div>
            <span *ngIf="removable" tabindex="0" [class]="removeIcon" [ngClass]="'pi-chip-remove-icon'" (click)="close($event)" (keydown.enter)="close($event)"></span>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-chip{align-items:center;display:inline-flex}.p-chip-icon.pi,.p-chip-text{line-height:1.5}.pi-chip-remove-icon{cursor:pointer;line-height:1.5}.p-chip img{border-radius:50%}"]
            }]
    }], function () { return []; }, { removeIcon: [{
            type: Input
        }], onRemove: [{
            type: Output
        }], label: [{
            type: Input
        }], icon: [{
            type: Input
        }], image: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], removable: [{
            type: Input
        }] }); })();
export class ChipModule {
}
ChipModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ChipModule });
ChipModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ChipModule_Factory(t) { return new (t || ChipModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ChipModule, { declarations: function () { return [Chip]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Chip]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ChipModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Chip],
                declarations: [Chip]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2NoaXAvY2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCL0MsTUFBTSxPQUFPLElBQUk7QUFDakIsSUFoQkE7QUFDRyxRQTRCVSxlQUFVLEdBQVcsb0JBQW9CLENBQUM7QUFDdkQsUUFDYyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0QsUUFDSSxZQUFPLEdBQVksSUFBSSxDQUFDO0FBQzVCLElBWUEsQ0FBQztBQUNELElBWkksY0FBYztBQUNsQixRQUFRLE9BQU87QUFDZixZQUFZLG9CQUFvQixFQUFFLElBQUk7QUFDdEMsWUFBWSxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO0FBQzlDLFNBQVMsQ0FBQztBQUNWLElBQUksQ0FBQztBQUNMLElBQ0ksS0FBSyxDQUFDLEtBQUs7QUFDZixRQUFRLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzdCLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDakMsSUFBSSxDQUFDO0FBQ0w7Z0NBOUNDLFNBQVMsU0FBQztBQUNQLFFBQVEsRUFBRSxRQUFRLGtCQUNsQixRQUFRLEVBQUUsa2tCQVFULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Ozs7OEJBRXhDLDBRQUNJO0FBQUM7QUFFRyxvQkFBSixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssdUJBRVYsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBc0JqQixNQUFNLE9BQU8sVUFBVTtBQUFHO3NDQUx6QixRQUFRLFNBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFDZixZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FDdkI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1jaGlwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzKClcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgKm5nSWY9XCJ2aXNpYmxlXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1hZ2VcIiAqbmdJZj1cImltYWdlO2Vsc2UgaWNvblRlbXBsYXRlXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2ljb25UZW1wbGF0ZT48c3BhbiAqbmdJZj1cImljb25cIiBbY2xhc3NdPVwiaWNvblwiIFtuZ0NsYXNzXT1cIidwLWNoaXAtaWNvbidcIj48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoaXAtdGV4dFwiICpuZ0lmPVwibGFiZWxcIj57e2xhYmVsfX08L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicmVtb3ZhYmxlXCIgdGFiaW5kZXg9XCIwXCIgW2NsYXNzXT1cInJlbW92ZUljb25cIiBbbmdDbGFzc109XCIncGktY2hpcC1yZW1vdmUtaWNvbidcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiIChrZXlkb3duLmVudGVyKT1cImNsb3NlKCRldmVudClcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9jaGlwLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoaXAge1xuXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcmVtb3ZhYmxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcmVtb3ZlSWNvbjogc3RyaW5nID0gXCJwaSBwaS10aW1lcy1jaXJjbGVcIjtcblxuICAgIEBPdXRwdXQoKSBvblJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtY2hpcCBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1jaGlwLWltYWdlJzogdGhpcy5pbWFnZSAhPSBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xvc2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZW1vdmUuZW1pdChldmVudClcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0NoaXBdLFxuICAgIGRlY2xhcmF0aW9uczogW0NoaXBdXG59KVxuZXhwb3J0IGNsYXNzIENoaXBNb2R1bGUgeyB9XG4iXX0=