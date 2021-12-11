import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["*"];
export class Divider {
    constructor() {
        this.layout = "horizontal";
        this.type = "solid";
    }
    containerClass() {
        return {
            'p-divider p-component': true,
            'p-divider-horizontal': this.layout === "horizontal",
            'p-divider-vertical': this.layout === "vertical",
            'p-divider-solid': this.type === "solid",
            'p-divider-dashed': this.type === "dashed",
            'p-divider-dotted': this.type === "dotted",
            'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left'),
            'p-divider-center': (this.layout === 'horizontal' && this.align === 'center') || (this.layout === 'vertical' && (!this.align || this.align === 'center')),
            'p-divider-right': this.layout === 'horizontal' && this.align === 'right',
            'p-divider-top': this.layout === 'vertical' && (this.align === 'top'),
            'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom'
        };
    }
}
Divider.ɵfac = function Divider_Factory(t) { return new (t || Divider)(); };
Divider.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Divider, selectors: [["p-divider"]], inputs: { layout: "layout", type: "type", styleClass: "styleClass", style: "style", align: "align" }, ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["role", "separator", 3, "ngClass", "ngStyle"], [1, "p-divider-content"]], template: function Divider_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-divider-horizontal{align-items:center;display:flex;position:relative;width:100%}.p-divider-horizontal:before{content:\"\";display:block;left:0;position:absolute;top:50%;width:100%}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{display:flex;justify-content:center;margin:0 1rem;min-height:100%;position:relative}.p-divider-vertical:before{content:\"\";display:block;height:100%;left:50%;position:absolute;top:0}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted;border-top-style:dotted}"], encapsulation: 2, changeDetection: 0 });
Divider.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    layout: [{ type: Input }],
    type: [{ type: Input }],
    align: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Divider, [{
        type: Component,
        args: [{
                selector: 'p-divider',
                template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" role="separator">
            <div class="p-divider-content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-divider-horizontal{align-items:center;display:flex;position:relative;width:100%}.p-divider-horizontal:before{content:\"\";display:block;left:0;position:absolute;top:50%;width:100%}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{display:flex;justify-content:center;margin:0 1rem;min-height:100%;position:relative}.p-divider-vertical:before{content:\"\";display:block;height:100%;left:50%;position:absolute;top:0}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted;border-top-style:dotted}"]
            }]
    }], function () { return []; }, { layout: [{
            type: Input
        }], type: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], align: [{
            type: Input
        }] }); })();
export class DividerModule {
}
DividerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DividerModule });
DividerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DividerModule_Factory(t) { return new (t || DividerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DividerModule, { declarations: function () { return [Divider]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Divider]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DividerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Divider],
                declarations: [Divider]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2RpdmlkZXIvZGl2aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQWUvQyxNQUFNLE9BQU8sT0FBTztBQUNwQixJQWRBO0FBQ0csUUFrQlUsV0FBTSxHQUFXLFlBQVksQ0FBQztBQUMzQyxRQUNhLFNBQUksR0FBVyxPQUFPLENBQUM7QUFDcEMsSUFvQkEsQ0FBQztBQUNELElBaEJJLGNBQWM7QUFDbEIsUUFBUSxPQUFPO0FBQ2YsWUFBWSx1QkFBdUIsRUFBRSxJQUFJO0FBQ3pDLFlBQVksc0JBQXNCLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxZQUFZO0FBQ2hFLFlBQVksb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVO0FBQzVELFlBQVksaUJBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPO0FBQ3BELFlBQVksa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRO0FBQ3RELFlBQVksa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRO0FBQ3RELFlBQVksZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUM7QUFDcEcsWUFBWSxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBQ3JLLFlBQVksaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPO0FBQ3JGLFlBQVksZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7QUFDakYsWUFBWSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVE7QUFDckYsU0FBUyxDQUFDO0FBQ1YsSUFBSSxDQUFDO0FBQ0w7bUNBMUNDLFNBQVMsU0FBQyxrQkFDUDtFQUFRLEVBQUUsV0FBVyxrQkFDckIsUUFBUSxFQUFFLGtPQU1ULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUU7UUFBaUIsQ0FBQyxJQUFJOzs7Ozs7Ozs7dzBCQUV4Qyw2WkFDSTtBQUFDO0FBRUcseUJBQUosS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxxQkFFVixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUEwQmhCLE1BQU0sT0FBTyxhQUFhO0FBQUc7eUNBTDVCLFFBQVEsU0FBQztLQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGtCQUNsQixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FDMUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtZGl2aWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzcygpXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiIHJvbGU9XCJzZXBhcmF0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRpdmlkZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGl2aWRlci5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaXZpZGVyIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBsYXlvdXQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIFxuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IFwic29saWRcIjtcblxuICAgIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XG5cbiAgICBcblxuICAgIGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtZGl2aWRlciBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1kaXZpZGVyLWhvcml6b250YWwnOiB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAncC1kaXZpZGVyLXZlcnRpY2FsJzogdGhpcy5sYXlvdXQgPT09IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICdwLWRpdmlkZXItc29saWQnOiB0aGlzLnR5cGUgPT09IFwic29saWRcIixcbiAgICAgICAgICAgICdwLWRpdmlkZXItZGFzaGVkJzogdGhpcy50eXBlID09PSBcImRhc2hlZFwiLFxuICAgICAgICAgICAgJ3AtZGl2aWRlci1kb3R0ZWQnOiB0aGlzLnR5cGUgPT09IFwiZG90dGVkXCIsXG4gICAgICAgICAgICAncC1kaXZpZGVyLWxlZnQnOiB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnICYmICghdGhpcy5hbGlnbiB8fCB0aGlzLmFsaWduID09PSAnbGVmdCcpLFxuICAgICAgICAgICAgJ3AtZGl2aWRlci1jZW50ZXInOiAodGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLmFsaWduID09PSAnY2VudGVyJykgfHwgKHRoaXMubGF5b3V0ID09PSAndmVydGljYWwnICYmICghdGhpcy5hbGlnbiB8fCB0aGlzLmFsaWduID09PSAnY2VudGVyJykpLFxuICAgICAgICAgICAgJ3AtZGl2aWRlci1yaWdodCc6IHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgJiYgdGhpcy5hbGlnbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgICdwLWRpdmlkZXItdG9wJzogdGhpcy5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgKHRoaXMuYWxpZ24gPT09ICd0b3AnKSxcbiAgICAgICAgICAgICdwLWRpdmlkZXItYm90dG9tJzogdGhpcy5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgdGhpcy5hbGlnbiA9PT0gJ2JvdHRvbSdcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RpdmlkZXJdLFxuICAgIGRlY2xhcmF0aW9uczogW0RpdmlkZXJdXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJNb2R1bGUgeyB9XG4iXX0=