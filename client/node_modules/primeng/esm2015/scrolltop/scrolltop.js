import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DomHandler } from 'primeng/dom';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c1 = function (a1) { return { value: "open", params: a1 }; };
function ScrollTop_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 1);
    ɵngcc0.ɵɵlistener("@animation.start", function ScrollTop_button_0_Template_button_animation_animation_start_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onEnter(); })("click", function ScrollTop_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onClick(); });
    ɵngcc0.ɵɵelement(1, "span", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("@animation", ɵngcc0.ɵɵpureFunction1(11, _c1, ɵngcc0.ɵɵpureFunction2(8, _c0, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r0.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-scrolltop-icon");
} }
export class ScrollTop {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.target = "window";
        this.threshold = 400;
        this.icon = "pi pi-chevron-up";
        this.behavior = "smooth";
        this.showTransitionOptions = '.15s';
        this.hideTransitionOptions = '.15s';
        this.visible = false;
    }
    ngOnInit() {
        if (this.target === 'window')
            this.bindDocumentScrollListener();
        else if (this.target === 'parent')
            this.bindParentScrollListener();
    }
    onClick() {
        let scrollElement = this.target === 'window' ? window : this.el.nativeElement.parentElement;
        scrollElement.scroll({
            top: 0,
            behavior: this.behavior
        });
    }
    onEnter() {
        this.el.nativeElement.children[0].style.zIndex = DomHandler.generateZIndex();
    }
    checkVisibility(scrollY) {
        if (scrollY > this.threshold)
            this.visible = true;
        else
            this.visible = false;
        this.cd.markForCheck();
    }
    bindParentScrollListener() {
        this.scrollListener = () => {
            this.checkVisibility(this.el.nativeElement.parentElement.scrollTop);
        };
        this.el.nativeElement.parentElement.addEventListener('scroll', this.scrollListener);
    }
    bindDocumentScrollListener() {
        this.scrollListener = () => {
            this.checkVisibility(DomHandler.getWindowScrollTop());
        };
        window.addEventListener('scroll', this.scrollListener);
    }
    unbindParentScrollListener() {
        if (this.scrollListener) {
            this.el.nativeElement.parentElement.removeEventListener('scroll', this.scrollListener);
            this.scrollListener = null;
        }
    }
    unbindDocumentScrollListener() {
        if (this.scrollListener) {
            window.removeEventListener('scroll', this.scrollListener);
            this.scrollListener = null;
        }
    }
    containerClass() {
        return {
            'p-scrolltop p-link p-component': true,
            'p-scrolltop-sticky': this.target !== 'window'
        };
    }
    ngOnDestroy() {
        if (this.target === 'window')
            this.unbindDocumentScrollListener();
        else if (this.target === 'parent')
            this.unbindParentScrollListener();
    }
}
ScrollTop.ɵfac = function ScrollTop_Factory(t) { return new (t || ScrollTop)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ScrollTop.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScrollTop, selectors: [["p-scrollTop"]], inputs: { target: "target", threshold: "threshold", icon: "icon", behavior: "behavior", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", styleClass: "styleClass", style: "style" }, decls: 1, vars: 1, consts: [["type", "button", 3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], ["type", "button", 3, "ngClass", "ngStyle", "click"], [3, "ngClass"]], template: function ScrollTop_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ScrollTop_button_0_Template, 2, 13, "button", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-scrolltop{align-items:center;bottom:20px;display:flex;justify-content:center;position:fixed;right:20px}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}"], encapsulation: 2, data: { animation: [
            trigger('animation', [
                state('void', style({
                    opacity: 0
                })),
                state('open', style({
                    opacity: 1
                })),
                transition('void => open', animate('{{showTransitionParams}}')),
                transition('open => void', animate('{{hideTransitionParams}}')),
            ])
        ] }, changeDetection: 0 });
ScrollTop.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
ScrollTop.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    target: [{ type: Input }],
    threshold: [{ type: Input }],
    icon: [{ type: Input }],
    behavior: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollTop, [{
        type: Component,
        args: [{
                selector: 'p-scrollTop',
                template: `
        <button  *ngIf="visible" [@animation]="{value: 'open', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@animation.start)="onEnter()"
            [ngClass]="containerClass()" (click)="onClick()" [class]="styleClass" [ngStyle]="style" type="button">
            <span [class]="icon" [ngClass]="'p-scrolltop-icon'"></span>
        </button>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('animation', [
                        state('void', style({
                            opacity: 0
                        })),
                        state('open', style({
                            opacity: 1
                        })),
                        transition('void => open', animate('{{showTransitionParams}}')),
                        transition('open => void', animate('{{hideTransitionParams}}')),
                    ])
                ],
                styles: [".p-scrolltop{align-items:center;bottom:20px;display:flex;justify-content:center;position:fixed;right:20px}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { target: [{
            type: Input
        }], threshold: [{
            type: Input
        }], icon: [{
            type: Input
        }], behavior: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
export class ScrollTopModule {
}
ScrollTopModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ScrollTopModule });
ScrollTopModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ScrollTopModule_Factory(t) { return new (t || ScrollTopModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ScrollTopModule, { declarations: function () { return [ScrollTop]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ScrollTop]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollTopModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [ScrollTop],
                declarations: [ScrollTop]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsdG9wLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvc2Nyb2xsdG9wL3Njcm9sbHRvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4SixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCekMsTUFBTSxPQUFPLFNBQVM7QUFBRyxJQXNCckIsWUFBbUIsRUFBYyxFQUFVLEVBQXFCO0FBQUksUUFBakQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQWhCeEQsV0FBTSxHQUFXLFFBQVEsQ0FBQztBQUN2QyxRQUNhLGNBQVMsR0FBVyxHQUFHLENBQUM7QUFDckMsUUFDYSxTQUFJLEdBQVcsa0JBQWtCLENBQUM7QUFDL0MsUUFDYSxhQUFRLEdBQVcsUUFBUSxDQUFDO0FBQ3pDLFFBQ2EsMEJBQXFCLEdBQVcsTUFBTSxDQUFDO0FBQ3BELFFBQ2EsMEJBQXFCLEdBQVcsTUFBTSxDQUFDO0FBQ3BELFFBR0ksWUFBTyxHQUFZLEtBQUssQ0FBQztBQUM3QixJQUN3RSxDQUFDO0FBQ3pFLElBQ0ksUUFBUTtBQUNaLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVE7QUFDcEMsWUFBWSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztBQUM5QyxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0s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QkFDdkIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLGtCQUNwQixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FDNUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1zY3JvbGxUb3AnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gICpuZ0lmPVwidmlzaWJsZVwiIFtAYW5pbWF0aW9uXT1cInt2YWx1ZTogJ29wZW4nLCBwYXJhbXM6IHtzaG93VHJhbnNpdGlvblBhcmFtczogc2hvd1RyYW5zaXRpb25PcHRpb25zLCBoaWRlVHJhbnNpdGlvblBhcmFtczogaGlkZVRyYW5zaXRpb25PcHRpb25zfX1cIiAoQGFuaW1hdGlvbi5zdGFydCk9XCJvbkVudGVyKClcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3MoKVwiIChjbGljayk9XCJvbkNsaWNrKClcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPHNwYW4gW2NsYXNzXT1cImljb25cIiBbbmdDbGFzc109XCIncC1zY3JvbGx0b3AtaWNvbidcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9zY3JvbGx0b3AuY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdhbmltYXRpb24nLCBbXG4gICAgICAgICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IG9wZW4nLCBhbmltYXRlKCd7e3Nob3dUcmFuc2l0aW9uUGFyYW1zfX0nKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdvcGVuID0+IHZvaWQnLCBhbmltYXRlKCd7e2hpZGVUcmFuc2l0aW9uUGFyYW1zfX0nKSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb3AgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmcgPSBcIndpbmRvd1wiO1xuICAgIFxuICAgIEBJbnB1dCgpIHRocmVzaG9sZDogbnVtYmVyID0gNDAwO1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gXCJwaSBwaS1jaGV2cm9uLXVwXCI7XG5cbiAgICBASW5wdXQoKSBiZWhhdmlvcjogc3RyaW5nID0gXCJzbW9vdGhcIjtcbiAgICBcbiAgICBASW5wdXQoKSBzaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMTVzJztcblxuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xNXMnO1xuXG4gICAgc2Nyb2xsTGlzdGVuZXI6IGFueTtcbiAgICBcbiAgICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09ICd3aW5kb3cnKVxuICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnRhcmdldCA9PT0gJ3BhcmVudCcpXG4gICAgICAgICAgICB0aGlzLmJpbmRQYXJlbnRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBzY3JvbGxFbGVtZW50ID0gdGhpcy50YXJnZXQgPT09ICd3aW5kb3cnID8gd2luZG93IDogdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICBzY3JvbGxFbGVtZW50LnNjcm9sbCh7XG4gICAgICAgICAgICB0b3A6IDAsIFxuICAgICAgICAgICAgYmVoYXZpb3I6IHRoaXMuYmVoYXZpb3JcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FbnRlcigpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLnN0eWxlLnpJbmRleCA9IERvbUhhbmRsZXIuZ2VuZXJhdGVaSW5kZXgoKTtcbiAgICB9XG5cbiAgICBjaGVja1Zpc2liaWxpdHkoc2Nyb2xsWSkge1xuICAgICAgICBpZiAoc2Nyb2xsWSA+IHRoaXMudGhyZXNob2xkKVxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBiaW5kUGFyZW50U2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tWaXNpYmlsaXR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tWaXNpYmlsaXR5KERvbUhhbmRsZXIuZ2V0V2luZG93U2Nyb2xsVG9wKCkpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHVuYmluZFBhcmVudFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZERvY3VtZW50U2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbExpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3Atc2Nyb2xsdG9wIHAtbGluayBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1zY3JvbGx0b3Atc3RpY2t5JzogdGhpcy50YXJnZXQgIT09ICd3aW5kb3cnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gJ3dpbmRvdycpXG4gICAgICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50U2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXQgPT09ICdwYXJlbnQnKVxuICAgICAgICAgICAgdGhpcy51bmJpbmRQYXJlbnRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU2Nyb2xsVG9wXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTY3JvbGxUb3BdXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvcE1vZHVsZSB7IH1cbiJdfQ==