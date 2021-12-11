import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Avatar_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function Avatar_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r5.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-avatar-icon");
} }
function Avatar_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Avatar_ng_template_3_span_0_Template, 1, 3, "span", 5);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.icon)("ngIfElse", _r3);
} }
function Avatar_ng_template_5_img_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 8);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("src", ctx_r6.image, ɵngcc0.ɵɵsanitizeUrl);
} }
function Avatar_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Avatar_ng_template_5_img_0_Template, 1, 1, "img", 7);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.image);
} }
const _c0 = ["*"];
export class Avatar {
    constructor() {
        this.size = "normal";
        this.shape = "square";
    }
    containerClass() {
        return {
            'p-avatar p-component': true,
            'p-avatar-image': this.image != null,
            'p-avatar-circle': this.shape === 'circle',
            'p-avatar-lg': this.size === 'large',
            'p-avatar-xl': this.size === 'xlarge'
        };
    }
}
Avatar.ɵfac = function Avatar_Factory(t) { return new (t || Avatar)(); };
Avatar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Avatar, selectors: [["p-avatar"]], inputs: { size: "size", shape: "shape", label: "label", icon: "icon", image: "image", style: "style", styleClass: "styleClass" }, ngContentSelectors: _c0, decls: 7, vars: 6, consts: [[3, "ngClass", "ngStyle"], ["class", "p-avatar-text", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["imageTemplate", ""], [1, "p-avatar-text"], [3, "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass"], [3, "src", 4, "ngIf"], [3, "src"]], template: function Avatar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Avatar_span_2_Template, 2, 1, "span", 1);
        ɵngcc0.ɵɵtemplate(3, Avatar_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, Avatar_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label)("ngIfElse", _r1);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf], styles: [".p-avatar{align-items:center;display:inline-flex;font-size:1rem;height:2rem;justify-content:center;width:2rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{height:100%;width:100%}"], encapsulation: 2, changeDetection: 0 });
Avatar.propDecorators = {
    label: [{ type: Input }],
    icon: [{ type: Input }],
    image: [{ type: Input }],
    size: [{ type: Input }],
    shape: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Avatar, [{
        type: Component,
        args: [{
                selector: 'p-avatar',
                template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
            <span class="p-avatar-text" *ngIf="label; else iconTemplate">{{label}}</span>
            <ng-template #iconTemplate><span [class]="icon" [ngClass]="'p-avatar-icon'" *ngIf="icon; else imageTemplate"></span></ng-template>
            <ng-template #imageTemplate><img [src]="image" *ngIf="image"></ng-template>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-avatar{align-items:center;display:inline-flex;font-size:1rem;height:2rem;justify-content:center;width:2rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{height:100%;width:100%}"]
            }]
    }], function () { return []; }, { size: [{
            type: Input
        }], shape: [{
            type: Input
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
        }] }); })();
export class AvatarModule {
}
AvatarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AvatarModule });
AvatarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AvatarModule_Factory(t) { return new (t || AvatarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AvatarModule, { declarations: function () { return [Avatar]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Avatar]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Avatar],
                declarations: [Avatar]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IvQyxNQUFNLE9BQU8sTUFBTTtBQUNuQixJQWZBO0FBQ0csUUFxQlUsU0FBSSxHQUFXLFFBQVEsQ0FBQztBQUNyQyxRQUNhLFVBQUssR0FBVyxRQUFRLENBQUM7QUFDdEMsSUFjQSxDQUFDO0FBQ0QsSUFWSSxjQUFjO0FBQ2xCLFFBQVEsT0FBTztBQUNmLFlBQVksc0JBQXNCLEVBQUUsSUFBSTtBQUN4QyxZQUFZLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtBQUNoRCxZQUFZLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUTtBQUN0RCxZQUFZLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU87QUFDaEQsWUFBWSxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRO0FBQ2pELFNBQVMsQ0FBQztBQUNWLElBQUksQ0FBQztBQUNMO2tDQXZDQyxTQUFTLFNBQUMsa0JBQ1A7SUFBUSxFQUFFLFVBQVUsa0JBQ3BCLFFBQVEsRUFBRSwrY0FPVCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUM7RUFBTSxrQkFDL0MsYUFBYTtDQUFFLGlCQUFpQixDQUFDLElBQUk7Ozs7bUdBRXhDOzs7Ozs7Ozt1YUFDSTtBQUFDO0FBRUcsb0JBQUosS0FBSztBQUFLLG1CQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBa0JoQixNQUFNLE9BQU8sWUFBWTtBQUFHO3dDQUwzQixRQUFRLFNBQUM7TUFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQkFDakIsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQ3pCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1hdmF0YXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3MoKVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1hdmF0YXItdGV4dFwiICpuZ0lmPVwibGFiZWw7IGVsc2UgaWNvblRlbXBsYXRlXCI+e3tsYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpY29uVGVtcGxhdGU+PHNwYW4gW2NsYXNzXT1cImljb25cIiBbbmdDbGFzc109XCIncC1hdmF0YXItaWNvbidcIiAqbmdJZj1cImljb247IGVsc2UgaW1hZ2VUZW1wbGF0ZVwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpbWFnZVRlbXBsYXRlPjxpbWcgW3NyY109XCJpbWFnZVwiICpuZ0lmPVwiaW1hZ2VcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXZhdGFyLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhciB7XG5cbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZyA9IFwibm9ybWFsXCI7XG5cbiAgICBASW5wdXQoKSBzaGFwZTogc3RyaW5nID0gXCJzcXVhcmVcIjtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBjb250YWluZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLWF2YXRhciBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1hdmF0YXItaW1hZ2UnOiB0aGlzLmltYWdlICE9IG51bGwsXG4gICAgICAgICAgICAncC1hdmF0YXItY2lyY2xlJzogdGhpcy5zaGFwZSA9PT0gJ2NpcmNsZScsXG4gICAgICAgICAgICAncC1hdmF0YXItbGcnOiB0aGlzLnNpemUgPT09ICdsYXJnZScsXG4gICAgICAgICAgICAncC1hdmF0YXIteGwnOiB0aGlzLnNpemUgPT09ICd4bGFyZ2UnXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtBdmF0YXJdLFxuICAgIGRlY2xhcmF0aW9uczogW0F2YXRhcl1cbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTW9kdWxlIHsgfVxuIl19