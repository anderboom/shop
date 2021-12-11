import { NgModule, Directive, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class Header {
}
Header.ɵfac = function Header_Factory(t) { return new (t || Header)(); };
Header.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Header, selectors: [["p-header"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function Header_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Header, [{
        type: Component,
        args: [{
                selector: 'p-header',
                template: '<ng-content></ng-content>'
            }]
    }], null, null); })();
export class Footer {
}
Footer.ɵfac = function Footer_Factory(t) { return new (t || Footer)(); };
Footer.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Footer, selectors: [["p-footer"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function Footer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Footer, [{
        type: Component,
        args: [{
                selector: 'p-footer',
                template: '<ng-content></ng-content>'
            }]
    }], null, null); })();
export class PrimeTemplate {
    constructor(template) {
        this.template = template;
    }
    getType() {
        return this.name;
    }
}
PrimeTemplate.ɵfac = function PrimeTemplate_Factory(t) { return new (t || PrimeTemplate)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
PrimeTemplate.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PrimeTemplate, selectors: [["", "pTemplate", ""]], inputs: { type: "type", name: ["pTemplate", "name"] } });
PrimeTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
PrimeTemplate.propDecorators = {
    type: [{ type: Input }],
    name: [{ type: Input, args: ['pTemplate',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PrimeTemplate, [{
        type: Directive,
        args: [{
                selector: '[pTemplate]',
                host: {}
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { type: [{
            type: Input
        }], name: [{
            type: Input,
            args: ['pTemplate']
        }] }); })();
export class SharedModule {
}
SharedModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SharedModule, { declarations: function () { return [Header, Footer, PrimeTemplate]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Header, Footer, PrimeTemplate]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Header, Footer, PrimeTemplate],
                declarations: [Header, Footer, PrimeTemplate]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL3NoYXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFjLFNBQVMsRUFBQyxLQUFLLEVBQXFDLFdBQVcsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDL0ksT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFNeEMsTUFBTSxPQUFPLE1BQU07QUFBRztrQ0FKckIsU0FBUyxTQUFDLGtCQUNQO0lBQVEsRUFBRSxVQUFVLGtCQUNwQixRQUFRLEVBQUUsMkJBQTJCLGNBQ3hDOzs7Ozs7Ozs7OzBCQUNJO0FBTUwsTUFBTSxPQUFPLE1BQU07QUFBRztrQ0FKckIsU0FBUyxTQUFDLGtCQUNQO0lBQVEsRUFBRSxVQUFVLGtCQUNwQixRQUFRLEVBQUUsMkJBQTJCLGNBQ3hDOzs7Ozs7Ozs7OzBCQUNJO0FBT0wsTUFBTSxPQUFPLGFBQWE7QUFDMUIsSUFLSSxZQUFtQixRQUEwQjtBQUFJLFFBQTlCLGFBQVEsR0FBUixRQUFRLENBQWtCO0FBQUMsSUFBRSxDQUFDO0FBQ3JELElBQ0ksT0FBTztBQUFLLFFBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLElBQUksQ0FBQztBQUNMO3lDQWhCQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFLGFBQWEsa0JBQ3ZCLElBQUksRUFBRSxFQUNMO0NBQ0osaUtBQ0k7QUFBQztBQUVLLFlBdkJ1RSxXQUFXO0FBQUc7QUFBRztBQUFpQyxtQkF1Qi9ILEtBQUs7QUFBSyxtQkFFVixLQUFLLFNBQUMsV0FBVztBQUFNOzs7Ozs7Ozs7Ozs7b0JBQUU7QUFjOUIsTUFBTSxPQUFPLFlBQVk7QUFBRzt3Q0FMM0IsUUFBUSxTQUFDO01BQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGFBQWEsQ0FBQyxrQkFDdEMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxhQUFhLENBQUM7T0FDOUM7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLEV2ZW50RW1pdHRlcixEaXJlY3RpdmUsSW5wdXQsT3V0cHV0LENvbnRlbnRDaGlsZHJlbixDb250ZW50Q2hpbGQsVGVtcGxhdGVSZWYsQWZ0ZXJDb250ZW50SW5pdCxRdWVyeUxpc3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyIHt9XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1mb290ZXInLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BUZW1wbGF0ZV0nLFxuICAgIGhvc3Q6IHtcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFByaW1lVGVtcGxhdGUge1xuICAgIFxuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgICBcbiAgICBASW5wdXQoJ3BUZW1wbGF0ZScpIG5hbWU6IHN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG4gICAgXG4gICAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbSGVhZGVyLEZvb3RlcixQcmltZVRlbXBsYXRlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtIZWFkZXIsRm9vdGVyLFByaW1lVGVtcGxhdGVdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiJdfQ==