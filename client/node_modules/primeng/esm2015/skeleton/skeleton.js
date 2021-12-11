import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class Skeleton {
    constructor() {
        this.shape = "rectangle";
        this.animation = "wave";
        this.borderRadius = null;
        this.size = null;
        this.width = "100%";
        this.height = "1rem";
    }
    containerClass() {
        return {
            'p-skeleton p-component': true,
            'p-skeleton-circle': this.shape === 'circle',
            'p-skeleton-none': this.animation === 'none'
        };
    }
    containerStyle() {
        if (this.size)
            return Object.assign(Object.assign({}, this.style), { width: this.size, height: this.size, borderRadius: this.borderRadius });
        else
            return Object.assign(Object.assign({}, this.style), { width: this.width, height: this.height, borderRadius: this.borderRadius });
    }
}
Skeleton.ɵfac = function Skeleton_Factory(t) { return new (t || Skeleton)(); };
Skeleton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Skeleton, selectors: [["p-skeleton"]], inputs: { shape: "shape", animation: "animation", borderRadius: "borderRadius", size: "size", width: "width", height: "height", styleClass: "styleClass", style: "style" }, decls: 1, vars: 4, consts: [[3, "ngClass", "ngStyle"]], template: function Skeleton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle());
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-skeleton{overflow:hidden;position:relative}.p-skeleton:after{animation:p-skeleton-animation 1.2s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"], encapsulation: 2, changeDetection: 0 });
Skeleton.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    shape: [{ type: Input }],
    animation: [{ type: Input }],
    borderRadius: [{ type: Input }],
    size: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Skeleton, [{
        type: Component,
        args: [{
                selector: 'p-skeleton',
                template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle()">
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-skeleton{overflow:hidden;position:relative}.p-skeleton:after{animation:p-skeleton-animation 1.2s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"]
            }]
    }], function () { return []; }, { shape: [{
            type: Input
        }], animation: [{
            type: Input
        }], borderRadius: [{
            type: Input
        }], size: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
export class SkeletonModule {
}
SkeletonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SkeletonModule });
SkeletonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SkeletonModule_Factory(t) { return new (t || SkeletonModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SkeletonModule, { declarations: function () { return [Skeleton]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Skeleton]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkeletonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Skeleton],
                declarations: [Skeleton]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9za2VsZXRvbi9za2VsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFZL0MsTUFBTSxPQUFPLFFBQVE7QUFDckIsSUFYQTtBQUNHLFFBZVUsVUFBSyxHQUFXLFdBQVcsQ0FBQztBQUN6QyxRQUNhLGNBQVMsR0FBVyxNQUFNLENBQUM7QUFDeEMsUUFDYSxpQkFBWSxHQUFXLElBQUksQ0FBQztBQUN6QyxRQUNhLFNBQUksR0FBVyxJQUFJLENBQUM7QUFDakMsUUFDYSxVQUFLLEdBQVcsTUFBTSxDQUFDO0FBQ3BDLFFBQ2EsV0FBTSxHQUFXLE1BQU0sQ0FBQztBQUNyQyxJQWVBLENBQUM7QUFDRCxJQWZJLGNBQWM7QUFDbEIsUUFBUSxPQUFPO0FBQ2YsWUFBWSx3QkFBd0IsRUFBRSxJQUFJO0FBQzFDLFlBQVksbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRO0FBQ3hELFlBQVksaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNO0FBQ3hELFNBQVMsQ0FBQztBQUNWLElBQUksQ0FBQztBQUNMLElBQ0ksY0FBYztBQUNsQixRQUFRLElBQUksSUFBSSxDQUFDLElBQUk7QUFDckIsWUFBZ0IsdUNBQVcsSUFBSSxDQUFDLEtBQUssS0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBRTtBQUM3RztBQUFhLFlBQ0csdUNBQVcsSUFBSSxDQUFDLEtBQUssS0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBRTtBQUNoSCxJQUFJLENBQUM7QUFDTDtvQ0ExQ0MsU0FBUyxTQUFDLGtCQUNQO0FBQVEsRUFBRSxZQUFZLGtCQUN0QixRQUFRLEVBQUUsbUhBR1Qsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzs7OzsySUFFeEMseVdBQ0k7QUFBQztBQUVHLHlCQUFKLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFBSywyQkFFVixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxxQkFFVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBdUJoQixNQUFNLE9BQU8sY0FBYztBQUFHOzBDQUw3QixRQUFRLFNBQUM7SUFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFDbkIsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzNCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXNrZWxldG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzKClcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cImNvbnRhaW5lclN0eWxlKClcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3NrZWxldG9uLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNrZWxldG9uIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzaGFwZTogc3RyaW5nID0gXCJyZWN0YW5nbGVcIjtcblxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogc3RyaW5nID0gXCJ3YXZlXCI7XG5cbiAgICBASW5wdXQoKSBib3JkZXJSYWRpdXM6IHN0cmluZyA9IG51bGw7XG5cbiAgICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgQElucHV0KCkgd2lkdGg6IHN0cmluZyA9IFwiMTAwJVwiO1xuICAgIFxuICAgIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nID0gXCIxcmVtXCI7XG5cbiAgICBjb250YWluZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLXNrZWxldG9uIHAtY29tcG9uZW50JzogdHJ1ZSxcbiAgICAgICAgICAgICdwLXNrZWxldG9uLWNpcmNsZSc6IHRoaXMuc2hhcGUgPT09ICdjaXJjbGUnLFxuICAgICAgICAgICAgJ3Atc2tlbGV0b24tbm9uZSc6IHRoaXMuYW5pbWF0aW9uID09PSAnbm9uZSdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb250YWluZXJTdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnRoaXMuc3R5bGUsIHdpZHRoOiB0aGlzLnNpemUsIGhlaWdodDogdGhpcy5zaXplLCBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzfTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnRoaXMuc3R5bGUsIHdpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0LCBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzfTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1NrZWxldG9uXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTa2VsZXRvbl1cbn0pXG5leHBvcnQgY2xhc3MgU2tlbGV0b25Nb2R1bGUgeyB9XG4iXX0=