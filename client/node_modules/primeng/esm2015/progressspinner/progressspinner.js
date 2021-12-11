import { NgModule, Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class ProgressSpinner {
    constructor() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
}
ProgressSpinner.ɵfac = function ProgressSpinner_Factory(t) { return new (t || ProgressSpinner)(); };
ProgressSpinner.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressSpinner, selectors: [["p-progressSpinner"]], inputs: { strokeWidth: "strokeWidth", fill: "fill", animationDuration: "animationDuration", style: "style", styleClass: "styleClass" }, decls: 3, vars: 6, consts: [["role", "alert", "aria-busy", "true", 1, "p-progress-spinner", 3, "ngStyle", "ngClass"], ["viewBox", "25 25 50 50", 1, "p-progress-spinner-svg"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 1, "p-progress-spinner-circle"]], template: function ProgressSpinner_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "svg", 1);
        ɵngcc0.ɵɵelement(2, "circle", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("animation-duration", ctx.animationDuration);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass], styles: [".p-progress-spinner{display:inline-block;height:100px;margin:0 auto;position:relative;width:100px}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}.p-progress-spinner-circle{animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke:#d62d20;stroke-dasharray:89,200;stroke-dashoffset:0;stroke-linecap:round}@keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}"], encapsulation: 2, changeDetection: 0 });
ProgressSpinner.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    fill: [{ type: Input }],
    animationDuration: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressSpinner, [{
        type: Component,
        args: [{
                selector: 'p-progressSpinner',
                template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass"  role="alert" aria-busy="true">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10"/>
            </svg>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-progress-spinner{display:inline-block;height:100px;margin:0 auto;position:relative;width:100px}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}.p-progress-spinner-circle{animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke:#d62d20;stroke-dasharray:89,200;stroke-dashoffset:0;stroke-linecap:round}@keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}"]
            }]
    }], function () { return []; }, { strokeWidth: [{
            type: Input
        }], fill: [{
            type: Input
        }], animationDuration: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class ProgressSpinnerModule {
}
ProgressSpinnerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressSpinnerModule });
ProgressSpinnerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressSpinnerModule_Factory(t) { return new (t || ProgressSpinnerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressSpinnerModule, { declarations: function () { return [ProgressSpinner]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ProgressSpinner]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressSpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [ProgressSpinner],
                declarations: [ProgressSpinner]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NzcGlubmVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3NzcGlubmVyL3Byb2dyZXNzc3Bpbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFlN0MsTUFBTSxPQUFPLGVBQWU7QUFDNUIsSUFkQTtBQUNHLFFBa0JVLGdCQUFXLEdBQVcsR0FBRyxDQUFDO0FBQ3ZDLFFBQ2EsU0FBSSxHQUFXLE1BQU0sQ0FBQztBQUNuQyxRQUNhLHNCQUFpQixHQUFXLElBQUksQ0FBQztBQUM5QyxJQUNBLENBQUM7QUFDRDsyQ0ExQkMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRTtPQUFtQixrQkFDN0IsUUFBUSxFQUFFLCthQU1ULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUM7QUFBSTs7Ozs7Ozs7Ozs7OzZjQUV4QyxvbEJBQ0k7QUFBQztBQUVHLG9CQUFKLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssMEJBRVYsS0FBSztBQUFLLG1CQUVWLEtBQUs7QUFBSyxnQ0FFVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBU2hCLE1BQU0sT0FBTyxxQkFBcUI7QUFBRztpREFMcEMsUUFBUSxTQUFDLGtCQUNOO0lBQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLGtCQUMxQixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsY0FDbEM7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsSW5wdXQsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtcHJvZ3Jlc3NTcGlubmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1wcm9ncmVzcy1zcGlubmVyXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbbmdDbGFzc109XCJzdHlsZUNsYXNzXCIgIHJvbGU9XCJhbGVydFwiIGFyaWEtYnVzeT1cInRydWVcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJwLXByb2dyZXNzLXNwaW5uZXItc3ZnXCIgdmlld0JveD1cIjI1IDI1IDUwIDUwXCIgW3N0eWxlLmFuaW1hdGlvbi1kdXJhdGlvbl09XCJhbmltYXRpb25EdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJwLXByb2dyZXNzLXNwaW5uZXItY2lyY2xlXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMjBcIiBbYXR0ci5maWxsXT1cImZpbGxcIiBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3Ryb2tlV2lkdGhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzc3NwaW5uZXIuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIHN0cm9rZVdpZHRoOiBzdHJpbmcgPSBcIjJcIjtcbiAgICBcbiAgICBASW5wdXQoKSBmaWxsOiBzdHJpbmcgPSBcIm5vbmVcIjtcbiAgICBcbiAgICBASW5wdXQoKSBhbmltYXRpb25EdXJhdGlvbjogc3RyaW5nID0gXCIyc1wiO1xuICAgIFxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQcm9ncmVzc1NwaW5uZXJdLFxuICAgIGRlY2xhcmF0aW9uczogW1Byb2dyZXNzU3Bpbm5lcl1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyTW9kdWxlIHsgfSJdfQ==