import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Tag_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.icon);
} }
const _c0 = ["*"];
export class Tag {
    containerClass() {
        return {
            'p-tag p-component': true,
            'p-tag-info': this.severity === 'info',
            'p-tag-success': this.severity === 'success',
            'p-tag-warning': this.severity === 'warning',
            'p-tag-danger': this.severity === 'danger',
            'p-tag-rounded': this.rounded
        };
    }
}
Tag.ɵfac = function Tag_Factory(t) { return new (t || Tag)(); };
Tag.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Tag, selectors: [["p-tag"]], inputs: { styleClass: "styleClass", style: "style", severity: "severity", value: "value", icon: "icon", rounded: "rounded" }, ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[3, "ngClass", "ngStyle"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-value"], [1, "p-tag-icon", 3, "ngClass"]], template: function Tag_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Tag_span_2_Template, 1, 1, "span", 1);
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.value);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf], styles: [".p-tag{align-items:center;display:inline-flex;justify-content:center}.p-tag-icon,.p-tag-icon.pi,.p-tag-value{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}"], encapsulation: 2, changeDetection: 0 });
Tag.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    severity: [{ type: Input }],
    value: [{ type: Input }],
    icon: [{ type: Input }],
    rounded: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Tag, [{
        type: Component,
        args: [{
                selector: 'p-tag',
                template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
            <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
            <span class="p-tag-value">{{value}}</span>
        </span>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-tag{align-items:center;display:inline-flex;justify-content:center}.p-tag-icon,.p-tag-icon.pi,.p-tag-value{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}"]
            }]
    }], null, { styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], severity: [{
            type: Input
        }], value: [{
            type: Input
        }], icon: [{
            type: Input
        }], rounded: [{
            type: Input
        }] }); })();
export class TagModule {
}
TagModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TagModule });
TagModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TagModule_Factory(t) { return new (t || TagModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TagModule, { declarations: function () { return [Tag]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Tag]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TagModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Tag],
                declarations: [Tag]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7OztBQWUvQyxNQUFNLE9BQU8sR0FBRztBQUNoQixJQWNJLGNBQWM7QUFDbEIsUUFBUSxPQUFPO0FBQ2YsWUFBWSxtQkFBbUIsRUFBRSxJQUFJO0FBQ3JDLFlBQVksWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTTtBQUNsRCxZQUFZLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVM7QUFDeEQsWUFBWSxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTO0FBQ3hELFlBQVksY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUTtBQUN0RCxZQUFZLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTztBQUN6QyxTQUFTLENBQUM7QUFDVixJQUFJLENBQUM7QUFDTDsrQkF0Q0MsU0FBUyxTQUFDO0VBQ1AsUUFBUSxFQUFFLE9BQU8sa0JBQ2pCLFFBQVEsRUFBRSxrUkFNVCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDO0NBQUk7Ozs7Z0NBRXhDOzs7Ozs7Ozs7OztnU0FDSTtBQUFDO0FBRUcseUJBQUosS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLG1CQUVWLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFvQmhCLE1BQU0sT0FBTyxTQUFTO0FBQUc7cUNBTHhCLFFBQVEsU0FBQztTQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLGtCQUNkLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUN0Qjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10YWcnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzKClcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdGFnLWljb25cIiBbbmdDbGFzc109XCJpY29uXCIgKm5nSWY9XCJpY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXRhZy12YWx1ZVwiPnt7dmFsdWV9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi90YWcuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFnIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzZXZlcml0eTogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByb3VuZGVkOiBib29sZWFuO1xuICAgIFxuXG4gICAgY29udGFpbmVyQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncC10YWcgcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgJ3AtdGFnLWluZm8nOiB0aGlzLnNldmVyaXR5ID09PSAnaW5mbycsXG4gICAgICAgICAgICAncC10YWctc3VjY2Vzcyc6IHRoaXMuc2V2ZXJpdHkgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICdwLXRhZy13YXJuaW5nJzogdGhpcy5zZXZlcml0eSA9PT0gJ3dhcm5pbmcnLFxuICAgICAgICAgICAgJ3AtdGFnLWRhbmdlcic6IHRoaXMuc2V2ZXJpdHkgPT09ICdkYW5nZXInLFxuICAgICAgICAgICAgJ3AtdGFnLXJvdW5kZWQnOiB0aGlzLnJvdW5kZWRcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1RhZ10sXG4gICAgZGVjbGFyYXRpb25zOiBbVGFnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdNb2R1bGUgeyB9XG4iXX0=