import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["*"];
export class AvatarGroup {
}
AvatarGroup.ɵfac = function AvatarGroup_Factory(t) { return new (t || AvatarGroup)(); };
AvatarGroup.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AvatarGroup, selectors: [["p-avatarGroup"]], inputs: { styleClass: "styleClass", style: "style" }, ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[3, "ngClass", "ngStyle"]], template: function AvatarGroup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-avatar-group p-component")("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{align-items:center;display:flex}"], encapsulation: 2, changeDetection: 0 });
AvatarGroup.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarGroup, [{
        type: Component,
        args: [{
                selector: 'p-avatarGroup',
                template: `
        <div [ngClass]="'p-avatar-group p-component'" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{align-items:center;display:flex}"]
            }]
    }], null, { styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
export class AvatarGroupModule {
}
AvatarGroupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AvatarGroupModule });
AvatarGroupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AvatarGroupModule_Factory(t) { return new (t || AvatarGroupModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AvatarGroupModule, { declarations: function () { return [AvatarGroup]; }, imports: function () { return [CommonModule]; }, exports: function () { return [AvatarGroup]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarGroupModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [AvatarGroup],
                declarations: [AvatarGroup]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyZ3JvdXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9hdmF0YXJncm91cC9hdmF0YXJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQWEvQyxNQUFNLE9BQU8sV0FBVztBQUN4Qjt1Q0FaQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFO1dBQWUsa0JBQ3pCLFFBQVEsRUFBRSwwSkFJVCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFO1dBQWlCLENBQUMsSUFBSTs7OzttQkFFeEM7OztpTkFDSTtBQUFDO0FBRUcseUJBQUosS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBUWhCLE1BQU0sT0FBTyxpQkFBaUI7QUFBRzs2Q0FMaEMsUUFBUSxTQUFDO0NBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQ3RCLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUM5Qjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtYXZhdGFyR3JvdXAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3AtYXZhdGFyLWdyb3VwIHAtY29tcG9uZW50J1wiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2F2YXRhcmdyb3VwLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckdyb3VwIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgICBcbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtBdmF0YXJHcm91cF0sXG4gICAgZGVjbGFyYXRpb25zOiBbQXZhdGFyR3JvdXBdXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckdyb3VwTW9kdWxlIHsgfVxuIl19