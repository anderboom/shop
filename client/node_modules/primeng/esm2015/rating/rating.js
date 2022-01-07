import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Rating_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 3);
    ɵngcc0.ɵɵlistener("click", function Rating_span_1_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.clear($event); })("keydown.enter", function Rating_span_1_Template_span_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.clear($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.iconCancelClass)("ngStyle", ctx_r0.iconCancelStyle);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r0.disabled || ctx_r0.readonly ? null : "0");
} }
function Rating_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵlistener("click", function Rating_span_2_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const i_r6 = ctx.index; const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.rate($event, i_r6); })("keydown.enter", function Rating_span_2_Template_span_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const i_r6 = ctx.index; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.rate($event, i_r6); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", !ctx_r1.value || i_r6 >= ctx_r1.value ? ctx_r1.iconOffClass : ctx_r1.iconOnClass)("ngStyle", !ctx_r1.value || i_r6 >= ctx_r1.value ? ctx_r1.iconOffStyle : ctx_r1.iconOnStyle);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r1.disabled || ctx_r1.readonly ? null : "0");
} }
const _c0 = function (a0, a1) { return { "p-readonly": a0, "p-disabled": a1 }; };
export const RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Rating),
    multi: true
};
export class Rating {
    constructor(cd) {
        this.cd = cd;
        this.stars = 5;
        this.cancel = true;
        this.iconOnClass = 'pi pi-star';
        this.iconOffClass = 'pi pi-star-o';
        this.iconCancelClass = 'pi pi-ban';
        this.onRate = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngOnInit() {
        this.starsArray = [];
        for (let i = 0; i < this.stars; i++) {
            this.starsArray[i] = i;
        }
    }
    rate(event, i) {
        if (!this.readonly && !this.disabled) {
            this.value = (i + 1);
            this.onModelChange(this.value);
            this.onModelTouched();
            this.onRate.emit({
                originalEvent: event,
                value: (i + 1)
            });
        }
        event.preventDefault();
    }
    clear(event) {
        if (!this.readonly && !this.disabled) {
            this.value = null;
            this.onModelChange(this.value);
            this.onModelTouched();
            this.onCancel.emit(event);
        }
        event.preventDefault();
    }
    writeValue(value) {
        this.value = value;
        this.cd.detectChanges();
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
}
Rating.ɵfac = function Rating_Factory(t) { return new (t || Rating)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Rating.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Rating, selectors: [["p-rating"]], inputs: { stars: "stars", cancel: "cancel", iconOnClass: "iconOnClass", iconOffClass: "iconOffClass", iconCancelClass: "iconCancelClass", disabled: "disabled", readonly: "readonly", iconOnStyle: "iconOnStyle", iconOffStyle: "iconOffStyle", iconCancelStyle: "iconCancelStyle" }, outputs: { onRate: "onRate", onCancel: "onCancel" }, features: [ɵngcc0.ɵɵProvidersFeature([RATING_VALUE_ACCESSOR])], decls: 3, vars: 6, consts: [[1, "p-rating", 3, "ngClass"], ["class", "p-rating-icon p-rating-cancel", 3, "ngClass", "ngStyle", "click", "keydown.enter", 4, "ngIf"], ["class", "p-rating-icon", 3, "ngClass", "ngStyle", "click", "keydown.enter", 4, "ngFor", "ngForOf"], [1, "p-rating-icon", "p-rating-cancel", 3, "ngClass", "ngStyle", "click", "keydown.enter"], [1, "p-rating-icon", 3, "ngClass", "ngStyle", "click", "keydown.enter"]], template: function Rating_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Rating_span_1_Template, 1, 3, "span", 1);
        ɵngcc0.ɵɵtemplate(2, Rating_span_2_Template, 1, 3, "span", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c0, ctx.readonly, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.cancel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.starsArray);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgStyle], styles: [".p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}"], encapsulation: 2, changeDetection: 0 });
Rating.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
Rating.propDecorators = {
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    stars: [{ type: Input }],
    cancel: [{ type: Input }],
    iconOnClass: [{ type: Input }],
    iconOnStyle: [{ type: Input }],
    iconOffClass: [{ type: Input }],
    iconOffStyle: [{ type: Input }],
    iconCancelClass: [{ type: Input }],
    iconCancelStyle: [{ type: Input }],
    onRate: [{ type: Output }],
    onCancel: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Rating, [{
        type: Component,
        args: [{
                selector: 'p-rating',
                template: `
        <div class="p-rating" [ngClass]="{'p-readonly': readonly, 'p-disabled': disabled}">
            <span [attr.tabindex]="(disabled || readonly) ? null : '0'" *ngIf="cancel" (click)="clear($event)" (keydown.enter)="clear($event)" class="p-rating-icon p-rating-cancel" [ngClass]="iconCancelClass" [ngStyle]="iconCancelStyle"></span>
            <span *ngFor="let star of starsArray;let i=index" class="p-rating-icon" [attr.tabindex]="(disabled || readonly) ? null : '0'"  (click)="rate($event,i)" (keydown.enter)="rate($event,i)"
                [ngClass]="(!value || i >= value) ? iconOffClass : iconOnClass"
                [ngStyle]="(!value || i >= value) ? iconOffStyle : iconOnStyle"></span>
        </div>
    `,
                providers: [RATING_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { stars: [{
            type: Input
        }], cancel: [{
            type: Input
        }], iconOnClass: [{
            type: Input
        }], iconOffClass: [{
            type: Input
        }], iconCancelClass: [{
            type: Input
        }], onRate: [{
            type: Output
        }], onCancel: [{
            type: Output
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], iconOnStyle: [{
            type: Input
        }], iconOffStyle: [{
            type: Input
        }], iconCancelStyle: [{
            type: Input
        }] }); })();
export class RatingModule {
}
RatingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RatingModule });
RatingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RatingModule_Factory(t) { return new (t || RatingModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RatingModule, { declarations: function () { return [Rating]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Rating]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RatingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Rating],
                declarations: [Rating]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBUSxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQVE7QUFDMUMsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDdkMsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQWlCRixNQUFNLE9BQU8sTUFBTTtBQUFHLElBMEJsQixZQUFvQixFQUFxQjtBQUFJLFFBQXpCLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUFwQmpDLFVBQUssR0FBVyxDQUFDLENBQUM7QUFDL0IsUUFDYSxXQUFNLEdBQVksSUFBSSxDQUFDO0FBQ3BDLFFBQ2EsZ0JBQVcsR0FBVyxZQUFZLENBQUM7QUFDaEQsUUFHYSxpQkFBWSxHQUFXLGNBQWMsQ0FBQztBQUNuRCxRQUdhLG9CQUFlLEdBQVcsV0FBVyxDQUFDO0FBQ25ELFFBR2MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzdELFFBQ2MsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQy9ELFFBS0ksa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDdkMsUUFDSSxtQkFBYyxHQUFh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QkFFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLDJCQUVWLEtBQUs7QUFBSyw4QkFFVixLQUFLO0FBQUssOEJBRVYsS0FBSztBQUFLLHFCQUVWLE1BQU07QUFBSyx1QkFFWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWtFakIsTUFBTSxPQUFPLFlBQVk7QUFBRzt3Q0FMM0IsUUFBUSxTQUFDO01BQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsa0JBQ2pCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUN6Qjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxPbkluaXQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixmb3J3YXJkUmVmLENoYW5nZURldGVjdG9yUmVmLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBSQVRJTkdfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGluZyksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtcmF0aW5nJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1yYXRpbmdcIiBbbmdDbGFzc109XCJ7J3AtcmVhZG9ubHknOiByZWFkb25seSwgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZH1cIj5cbiAgICAgICAgICAgIDxzcGFuIFthdHRyLnRhYmluZGV4XT1cIihkaXNhYmxlZCB8fCByZWFkb25seSkgPyBudWxsIDogJzAnXCIgKm5nSWY9XCJjYW5jZWxcIiAoY2xpY2spPVwiY2xlYXIoJGV2ZW50KVwiIChrZXlkb3duLmVudGVyKT1cImNsZWFyKCRldmVudClcIiBjbGFzcz1cInAtcmF0aW5nLWljb24gcC1yYXRpbmctY2FuY2VsXCIgW25nQ2xhc3NdPVwiaWNvbkNhbmNlbENsYXNzXCIgW25nU3R5bGVdPVwiaWNvbkNhbmNlbFN0eWxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHN0YXIgb2Ygc3RhcnNBcnJheTtsZXQgaT1pbmRleFwiIGNsYXNzPVwicC1yYXRpbmctaWNvblwiIFthdHRyLnRhYmluZGV4XT1cIihkaXNhYmxlZCB8fCByZWFkb25seSkgPyBudWxsIDogJzAnXCIgIChjbGljayk9XCJyYXRlKCRldmVudCxpKVwiIChrZXlkb3duLmVudGVyKT1cInJhdGUoJGV2ZW50LGkpXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCIoIXZhbHVlIHx8IGkgPj0gdmFsdWUpID8gaWNvbk9mZkNsYXNzIDogaWNvbk9uQ2xhc3NcIlxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cIighdmFsdWUgfHwgaSA+PSB2YWx1ZSkgPyBpY29uT2ZmU3R5bGUgOiBpY29uT25TdHlsZVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtSQVRJTkdfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vcmF0aW5nLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZyBpbXBsZW1lbnRzIE9uSW5pdCxDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc3RhcnM6IG51bWJlciA9IDU7XG5cbiAgICBASW5wdXQoKSBjYW5jZWw6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgaWNvbk9uQ2xhc3M6IHN0cmluZyA9ICdwaSBwaS1zdGFyJztcblxuICAgIEBJbnB1dCgpIGljb25PblN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBpY29uT2ZmQ2xhc3M6IHN0cmluZyA9ICdwaSBwaS1zdGFyLW8nO1xuXG4gICAgQElucHV0KCkgaWNvbk9mZlN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBpY29uQ2FuY2VsQ2xhc3M6IHN0cmluZyA9ICdwaSBwaS1iYW4nO1xuXG4gICAgQElucHV0KCkgaWNvbkNhbmNlbFN0eWxlOiBhbnk7XG5cbiAgICBAT3V0cHV0KCkgb25SYXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge30gXG4gICAgXG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBcbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIHB1YmxpYyBzdGFyc0FycmF5OiBudW1iZXJbXTtcbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGFyc0FycmF5ID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXJzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnNBcnJheVtpXSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmF0ZShldmVudCwgaTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5yZWFkb25seSYmIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAoaSArIDEpO1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5vblJhdGUuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IChpKzEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNsZWFyKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5yZWFkb25seSYmIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNhbmNlbC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuICAgIFxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtSYXRpbmddLFxuICAgIGRlY2xhcmF0aW9uczogW1JhdGluZ11cbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nTW9kdWxlIHsgfSJdfQ==