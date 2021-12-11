(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/ripple'),require('@angular/common'),exports, require('@angular/core'), require('primeng/dom'), require('@angular/common'), require('primeng/ripple'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/button', ['@angular/core','primeng/ripple','@angular/common','exports', '@angular/core', 'primeng/dom', '@angular/common', 'primeng/ripple', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.ripple,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.button = {}), global.ng.core, global.primeng.dom, global.ng.common, global.primeng.ripple, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, dom, common, ripple, api) { 
function Button_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c0 = function (a1, a2, a3, a4) { return { "p-button-icon": true, "p-button-icon-left": a1, "p-button-icon-right": a2, "p-button-icon-top": a3, "p-button-icon-bottom": a4 }; };
function Button_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.loading ? "p-button-loading-icon " + ctx_r1.loadingIcon : ctx_r1.icon);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c0, ctx_r1.iconPos === "left" && ctx_r1.label, ctx_r1.iconPos === "right" && ctx_r1.label, ctx_r1.iconPos === "top" && ctx_r1.label, ctx_r1.iconPos === "bottom" && ctx_r1.label));
    ɵngcc0.ɵɵattribute("aria-hidden", true);
} }
function Button_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("aria-hidden", ctx_r2.icon && !ctx_r2.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.label || "\u00A0");
} }
function Button_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r3.badgeClass);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.badgeStyleClass());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.badge);
} }
var _c1 = function (a1, a2, a3, a4, a5) { return { "p-button p-component": true, "p-button-icon-only": a1, "p-button-vertical": a2, "p-disabled": a3, "p-button-loading": a4, "p-button-loading-label-only": a5 }; };
var _c2 = ["*"];
'use strict';

    var ButtonDirective = /** @class */ (function () {
        function ButtonDirective(el) {
            this.el = el;
            this.iconPos = 'left';
            this.loadingIcon = "pi pi-spinner pi-spin";
            this._loading = false;
        }
        ButtonDirective.prototype.ngAfterViewInit = function () {
            this._initialStyleClass = this.el.nativeElement.className;
            dom.DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
            if (this.icon) {
                this.createIconEl();
            }
            var labelElement = document.createElement("span");
            if (this.icon && !this.label) {
                labelElement.setAttribute('aria-hidden', 'true');
            }
            labelElement.className = 'p-button-label';
            if (this.label)
                labelElement.appendChild(document.createTextNode(this.label));
            else
                labelElement.innerHTML = '&nbsp;';
            this.el.nativeElement.appendChild(labelElement);
            this.initialized = true;
        };
        ButtonDirective.prototype.getStyleClass = function () {
            var styleClass = 'p-button p-component';
            if (this.icon && !this.label) {
                styleClass = styleClass + ' p-button-icon-only';
            }
            if (this.loading) {
                styleClass = styleClass + ' p-disabled p-button-loading';
                if (!this.icon && this.label)
                    styleClass = styleClass + ' p-button-loading-label-only';
            }
            return styleClass;
        };
        ButtonDirective.prototype.setStyleClass = function () {
            var styleClass = this.getStyleClass();
            this.el.nativeElement.className = styleClass + ' ' + this._initialStyleClass;
        };
        ButtonDirective.prototype.createIconEl = function () {
            var iconElement = document.createElement("span");
            iconElement.className = 'p-button-icon';
            iconElement.setAttribute("aria-hidden", "true");
            var iconPosClass = this.label ? 'p-button-icon-' + this.iconPos : null;
            if (iconPosClass) {
                dom.DomHandler.addClass(iconElement, iconPosClass);
            }
            dom.DomHandler.addMultipleClasses(iconElement, this.getIconClass());
            var labelEl = dom.DomHandler.findSingle(this.el.nativeElement, '.p-button-label');
            if (labelEl)
                this.el.nativeElement.insertBefore(iconElement, labelEl);
            else
                this.el.nativeElement.appendChild(iconElement);
        };
        ButtonDirective.prototype.getIconClass = function () {
            return this.loading ? 'p-button-loading-icon ' + this.loadingIcon : this._icon;
        };
        ButtonDirective.prototype.setIconClass = function () {
            var iconElement = dom.DomHandler.findSingle(this.el.nativeElement, '.p-button-icon');
            if (iconElement) {
                if (this.iconPos)
                    iconElement.className = 'p-button-icon p-button-icon-' + this.iconPos + ' ' + this.getIconClass();
                else
                    iconElement.className = 'p-button-icon ' + this.getIconClass();
            }
            else {
                this.createIconEl();
            }
        };
        ButtonDirective.prototype.removeIconElement = function () {
            var iconElement = dom.DomHandler.findSingle(this.el.nativeElement, '.p-button-icon');
            this.el.nativeElement.removeChild(iconElement);
        };
        Object.defineProperty(ButtonDirective.prototype, "label", {
            get: function () {
                return this._label;
            },
            set: function (val) {
                this._label = val;
                if (this.initialized) {
                    dom.DomHandler.findSingle(this.el.nativeElement, '.p-button-label').textContent = this._label || '&nbsp;';
                    this.setStyleClass();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonDirective.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (val) {
                this._icon = val;
                if (this.initialized) {
                    this.setIconClass();
                    this.setStyleClass();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonDirective.prototype, "loading", {
            get: function () {
                return this._loading;
            },
            set: function (val) {
                this._loading = val;
                if (this.initialized) {
                    if (this.loading || this.icon)
                        this.setIconClass();
                    else
                        this.removeIconElement();
                    this.setStyleClass();
                }
            },
            enumerable: false,
            configurable: true
        });
        ButtonDirective.prototype.ngOnDestroy = function () {
            this.initialized = false;
        };
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ButtonDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ButtonDirective, selectors: [["", "pButton", ""]], inputs: { iconPos: "iconPos", loadingIcon: "loadingIcon", label: "label", icon: "icon", loading: "loading" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonDirective, [{
        type: core.Directive,
        args: [{
                selector: '[pButton]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { iconPos: [{
            type: core.Input
        }], loadingIcon: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], icon: [{
            type: core.Input
        }], loading: [{
            type: core.Input
        }] }); })();
        return ButtonDirective;
    }());
    ButtonDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ButtonDirective.propDecorators = {
        iconPos: [{ type: core.Input }],
        loadingIcon: [{ type: core.Input }],
        label: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        loading: [{ type: core.Input }]
    };
    var Button = /** @class */ (function () {
        function Button() {
            this.type = "button";
            this.iconPos = 'left';
            this.loading = false;
            this.loadingIcon = "pi pi-spinner pi-spin";
            this.onClick = new core.EventEmitter();
            this.onFocus = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
        }
        Button.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
            });
        };
        Button.prototype.badgeStyleClass = function () {
            return {
                'p-badge p-component': true,
                'p-badge-no-gutter': this.badge && String(this.badge).length === 1
            };
        };
Button.ɵfac = function Button_Factory(t) { return new (t || Button)(); };
Button.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Button, selectors: [["p-button"]], contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { type: "type", iconPos: "iconPos", loading: "loading", loadingIcon: "loadingIcon", icon: "icon", badge: "badge", label: "label", disabled: "disabled", style: "style", styleClass: "styleClass", badgeClass: "badgeClass" }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, ngContentSelectors: _c2, decls: 6, vars: 16, consts: [["pRipple", "", 3, "ngStyle", "disabled", "ngClass", "click", "focus", "blur"], [4, "ngTemplateOutlet"], [3, "ngClass", "class", 4, "ngIf"], ["class", "p-button-label", 4, "ngIf"], [3, "ngClass"], [1, "p-button-label"]], template: function Button_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function Button_Template_button_click_0_listener($event) { return ctx.onClick.emit($event); })("focus", function Button_Template_button_focus_0_listener($event) { return ctx.onFocus.emit($event); })("blur", function Button_Template_button_blur_0_listener($event) { return ctx.onBlur.emit($event); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(3, Button_span_3_Template, 1, 9, "span", 2);
        ɵngcc0.ɵɵtemplate(4, Button_span_4_Template, 2, 2, "span", 3);
        ɵngcc0.ɵɵtemplate(5, Button_span_5_Template, 2, 4, "span", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("disabled", ctx.disabled || ctx.loading)("ngClass", ɵngcc0.ɵɵpureFunction5(10, _c1, ctx.icon && !ctx.label, (ctx.iconPos === "top" || ctx.iconPos === "bottom") && ctx.label, ctx.disabled || ctx.loading, ctx.loading, ctx.loading && !ctx.icon && ctx.label));
        ɵngcc0.ɵɵattribute("type", ctx.type);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.contentTemplate && (ctx.icon || ctx.loading));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.contentTemplate && ctx.badge);
    } }, directives: [ɵngcc1.Ripple, ɵngcc2.NgStyle, ɵngcc2.NgClass, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Button, [{
        type: core.Component,
        args: [{
                selector: 'p-button',
                template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [ngStyle]=\"style\" [disabled]=\"disabled || loading\"\n            [ngClass]=\"{'p-button p-component':true,\n                        'p-button-icon-only': (icon && !label),\n                        'p-button-vertical': (iconPos === 'top' || iconPos === 'bottom') && label,\n                        'p-disabled': this.disabled || this.loading,\n                        'p-button-loading': this.loading,\n                        'p-button-loading-label-only': this.loading && !this.icon && this.label}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\" pRipple>\n            <ng-content></ng-content>\n            <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            <span [ngClass]=\"{'p-button-icon': true,\n                        'p-button-icon-left': iconPos === 'left' && label,\n                        'p-button-icon-right': iconPos === 'right' && label,\n                        'p-button-icon-top': iconPos === 'top' && label,\n                        'p-button-icon-bottom': iconPos === 'bottom' && label}\"\n                        [class]=\"loading ? 'p-button-loading-icon ' + loadingIcon : icon\" *ngIf=\"!contentTemplate && (icon||loading)\" [attr.aria-hidden]=\"true\"></span>\n            <span class=\"p-button-label\" [attr.aria-hidden]=\"icon && !label\" *ngIf=\"!contentTemplate\">{{label||'&nbsp;'}}</span>\n            <span [ngClass]=\"badgeStyleClass()\" [class]=\"badgeClass\" *ngIf=\"!contentTemplate && badge\">{{badge}}</span>\n        </button>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return []; }, { type: [{
            type: core.Input
        }], iconPos: [{
            type: core.Input
        }], loading: [{
            type: core.Input
        }], loadingIcon: [{
            type: core.Input
        }], onClick: [{
            type: core.Output
        }], onFocus: [{
            type: core.Output
        }], onBlur: [{
            type: core.Output
        }], icon: [{
            type: core.Input
        }], badge: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], badgeClass: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Button;
    }());
    Button.propDecorators = {
        type: [{ type: core.Input }],
        iconPos: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        badge: [{ type: core.Input }],
        label: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        loading: [{ type: core.Input }],
        loadingIcon: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        badgeClass: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        onClick: [{ type: core.Output }],
        onFocus: [{ type: core.Output }],
        onBlur: [{ type: core.Output }]
    };
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
ButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[common.CommonModule, ripple.RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonDirective, Button], imports: [ɵngcc2.CommonModule, ɵngcc1.RippleModule], exports: [ButtonDirective, Button] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, ripple.RippleModule],
                exports: [ButtonDirective, Button],
                declarations: [ButtonDirective, Button]
            }]
    }], function () { return []; }, null); })();
        return ButtonModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Button = Button;
    exports.ButtonDirective = ButtonDirective;
    exports.ButtonModule = ButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-button.umd.js.map