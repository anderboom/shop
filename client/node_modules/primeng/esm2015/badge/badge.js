import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Directive, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { UniqueComponentId } from 'primeng/utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class BadgeDirective {
    constructor(el) {
        this.el = el;
        this.iconPos = 'left';
    }
    ngAfterViewInit() {
        this.id = UniqueComponentId() + '_badge';
        let el = this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
        let badge = document.createElement('span');
        badge.id = this.id;
        badge.className = 'p-badge p-component';
        if (this.severity) {
            DomHandler.addClass(badge, 'p-badge-' + this.severity);
        }
        if (this.value != null) {
            badge.appendChild(document.createTextNode(this.value));
            if (String(this.value).length === 1) {
                DomHandler.addClass(badge, 'p-badge-no-gutter');
            }
        }
        else {
            DomHandler.addClass(badge, 'p-badge-dot');
        }
        DomHandler.addClass(el, 'p-overlay-badge');
        el.appendChild(badge);
        this.initialized = true;
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (val !== this._value) {
            this._value = val;
            if (this.initialized) {
                let badge = document.getElementById(this.id);
                if (this._value) {
                    if (DomHandler.hasClass(badge, 'p-badge-dot'))
                        DomHandler.removeClass(badge, 'p-badge-dot');
                    if (String(this._value).length === 1) {
                        DomHandler.addClass(badge, 'p-badge-no-gutter');
                    }
                    else {
                        DomHandler.removeClass(badge, 'p-badge-no-gutter');
                    }
                }
                else if (!this._value && !DomHandler.hasClass(badge, 'p-badge-dot')) {
                    DomHandler.addClass(badge, 'p-badge-dot');
                }
                badge.innerHTML = '';
                badge.appendChild(document.createTextNode(this._value));
            }
        }
    }
    ngOnDestroy() {
        this.initialized = false;
    }
}
BadgeDirective.ɵfac = function BadgeDirective_Factory(t) { return new (t || BadgeDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BadgeDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BadgeDirective, selectors: [["", "pBadge", ""]], inputs: { iconPos: "iconPos", value: "value", severity: "severity" } });
BadgeDirective.ctorParameters = () => [
    { type: ElementRef }
];
BadgeDirective.propDecorators = {
    iconPos: [{ type: Input }],
    value: [{ type: Input }],
    severity: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BadgeDirective, [{
        type: Directive,
        args: [{
                selector: '[pBadge]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { iconPos: [{
            type: Input
        }], value: [{
            type: Input
        }], severity: [{
            type: Input
        }] }); })();
export class Badge {
    containerClass() {
        return {
            'p-badge p-component': true,
            'p-badge-no-gutter': this.value && String(this.value).length === 1,
            'p-badge-lg': this.size === 'large',
            'p-badge-xl': this.size === 'xlarge',
            'p-badge-info': this.severity === 'info',
            'p-badge-success': this.severity === 'success',
            'p-badge-warning': this.severity === 'warning',
            'p-badge-danger': this.severity === 'danger'
        };
    }
}
Badge.ɵfac = function Badge_Factory(t) { return new (t || Badge)(); };
Badge.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Badge, selectors: [["p-badge"]], inputs: { styleClass: "styleClass", style: "style", size: "size", severity: "severity", value: "value" }, decls: 2, vars: 5, consts: [[3, "ngClass", "ngStyle"]], template: function Badge_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.value, " ");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-badge{border-radius:10px;display:inline-block;padding:0 .5rem;text-align:center}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{margin:0;position:absolute;right:0;top:0;transform:translate(50%,-50%);transform-origin:100% 0}.p-badge-dot{height:.5rem;min-width:.5rem;width:.5rem}.p-badge-dot,.p-badge-no-gutter{border-radius:50%;padding:0}"], encapsulation: 2, changeDetection: 0 });
Badge.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    size: [{ type: Input }],
    severity: [{ type: Input }],
    value: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Badge, [{
        type: Component,
        args: [{
                selector: 'p-badge',
                template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
                {{value}}
        </span>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-badge{border-radius:10px;display:inline-block;padding:0 .5rem;text-align:center}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{margin:0;position:absolute;right:0;top:0;transform:translate(50%,-50%);transform-origin:100% 0}.p-badge-dot{height:.5rem;min-width:.5rem;width:.5rem}.p-badge-dot,.p-badge-no-gutter{border-radius:50%;padding:0}"]
            }]
    }], null, { styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], size: [{
            type: Input
        }], severity: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
export class BadgeModule {
}
BadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BadgeModule });
BadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BadgeModule_Factory(t) { return new (t || BadgeModule)(); }, imports: [[CommonModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BadgeModule, { declarations: function () { return [Badge, BadgeDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Badge, BadgeDirective, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BadgeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Badge, BadgeDirective, SharedModule],
                declarations: [Badge, BadgeDirective]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9iYWRnZS9iYWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQTJDLFNBQVMsRUFBNEIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pNLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLbEQsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQVUxQixZQUFtQixFQUFjO0FBQUksUUFBbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBUnpCLFlBQU8sR0FBd0MsTUFBTSxDQUFDO0FBQ25FLElBT3dDLENBQUM7QUFDekMsSUFDSSxlQUFlO0FBQ25CLFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsRUFBRSxHQUFHLFFBQVEsQ0FBQztBQUNqRCxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFBQyxRQUV2SCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELFFBQVEsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFFO0FBQzVCLFFB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QU8sV0FBVztBQUFHO3VDQUwxQixRQUFRLFNBQUM7T0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLGtCQUM5QyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLGNBQ3hDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuLCBUZW1wbGF0ZVJlZiwgRGlyZWN0aXZlLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBEb21IYW5kbGVyIH0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHsgVW5pcXVlQ29tcG9uZW50SWQgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcEJhZGdlXSdcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaWNvblBvczogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2JvdHRvbScgPSAnbGVmdCc7XG4gICAgICAgICAgICBcbiAgICBwdWJsaWMgX3ZhbHVlOiBzdHJpbmc7XG4gICAgICAgICAgICBcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5pZCA9IFVuaXF1ZUNvbXBvbmVudElkKCkgKyAnX2JhZGdlJztcbiAgICAgICAgbGV0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lLmluZGV4T2YoXCItXCIpICE9IC0xID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQgOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7IFxuXG4gICAgICAgIGxldCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYmFkZ2UuaWQgPSB0aGlzLmlkIDtcbiAgICAgICAgYmFkZ2UuY2xhc3NOYW1lID0gJ3AtYmFkZ2UgcC1jb21wb25lbnQnO1xuXG4gICAgICAgIGlmICh0aGlzLnNldmVyaXR5KSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKGJhZGdlLCAncC1iYWRnZS0nICsgdGhpcy5zZXZlcml0eSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGJhZGdlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudmFsdWUpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFN0cmluZyh0aGlzLnZhbHVlKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKGJhZGdlLCAncC1iYWRnZS1uby1ndXR0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoYmFkZ2UsICdwLWJhZGdlLWRvdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhlbCwgJ3Atb3ZlcmxheS1iYWRnZScpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChiYWRnZSk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHZhbCAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChEb21IYW5kbGVyLmhhc0NsYXNzKGJhZGdlLCAncC1iYWRnZS1kb3QnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoYmFkZ2UsICdwLWJhZGdlLWRvdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdHJpbmcodGhpcy5fdmFsdWUpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhiYWRnZSwgJ3AtYmFkZ2Utbm8tZ3V0dGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKGJhZGdlLCAncC1iYWRnZS1uby1ndXR0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghdGhpcy5fdmFsdWUgJiYgIURvbUhhbmRsZXIuaGFzQ2xhc3MoYmFkZ2UsICdwLWJhZGdlLWRvdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoYmFkZ2UsICdwLWJhZGdlLWRvdCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJhZGdlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGJhZGdlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuX3ZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXZlcml0eTogc3RyaW5nO1xuICAgICAgICBcbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWJhZGdlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzcygpXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxuICAgICAgICAgICAgICAgIHt7dmFsdWV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2JhZGdlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgc2V2ZXJpdHk6IHN0cmluZztcbiAgICBcbiAgICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICAgIFxuICAgIGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtYmFkZ2UgcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgJ3AtYmFkZ2Utbm8tZ3V0dGVyJzogdGhpcy52YWx1ZSAmJiBTdHJpbmcodGhpcy52YWx1ZSkubGVuZ3RoID09PSAxLFxuICAgICAgICAgICAgJ3AtYmFkZ2UtbGcnOiB0aGlzLnNpemUgPT09ICdsYXJnZScsXG4gICAgICAgICAgICAncC1iYWRnZS14bCc6IHRoaXMuc2l6ZSA9PT0gJ3hsYXJnZScsXG4gICAgICAgICAgICAncC1iYWRnZS1pbmZvJzogdGhpcy5zZXZlcml0eSA9PT0gJ2luZm8nLFxuICAgICAgICAgICAgJ3AtYmFkZ2Utc3VjY2Vzcyc6IHRoaXMuc2V2ZXJpdHkgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICdwLWJhZGdlLXdhcm5pbmcnOiB0aGlzLnNldmVyaXR5ID09PSAnd2FybmluZycsXG4gICAgICAgICAgICAncC1iYWRnZS1kYW5nZXInOiB0aGlzLnNldmVyaXR5ID09PSAnZGFuZ2VyJ1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbQmFkZ2UsIEJhZGdlRGlyZWN0aXZlLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0JhZGdlLCBCYWRnZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VNb2R1bGUgeyB9XG4iXX0=