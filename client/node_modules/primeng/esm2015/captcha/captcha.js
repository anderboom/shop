import { NgModule, Component, EventEmitter, Input, NgZone, Output, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
export class Captcha {
    constructor(el, _zone, cd) {
        this.el = el;
        this._zone = _zone;
        this.cd = cd;
        this.siteKey = null;
        this.theme = 'light';
        this.type = 'image';
        this.size = 'normal';
        this.tabindex = 0;
        this.initCallback = "initRecaptcha";
        this.onResponse = new EventEmitter();
        this.onExpire = new EventEmitter();
        this._instance = null;
        this._language = null;
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
        this.init();
    }
    ngAfterViewInit() {
        if (window.grecaptcha) {
            if (!window.grecaptcha.render) {
                setTimeout(() => {
                    this.init();
                }, 100);
            }
            else {
                this.init();
            }
        }
        else {
            window[this.initCallback] = () => {
                this.init();
            };
        }
    }
    init() {
        this._instance = window.grecaptcha.render(this.el.nativeElement.children[0], {
            'sitekey': this.siteKey,
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabindex,
            'hl': this.language,
            'callback': (response) => { this._zone.run(() => this.recaptchaCallback(response)); },
            'expired-callback': () => { this._zone.run(() => this.recaptchaExpiredCallback()); }
        });
    }
    reset() {
        if (this._instance === null)
            return;
        window.grecaptcha.reset(this._instance);
        this.cd.markForCheck();
    }
    getResponse() {
        if (this._instance === null)
            return null;
        return window.grecaptcha.getResponse(this._instance);
    }
    recaptchaCallback(response) {
        this.onResponse.emit({
            response: response
        });
    }
    recaptchaExpiredCallback() {
        this.onExpire.emit();
    }
    ngOnDestroy() {
        if (this._instance != null) {
            window.grecaptcha.reset(this._instance);
        }
    }
}
Captcha.ɵfac = function Captcha_Factory(t) { return new (t || Captcha)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Captcha.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Captcha, selectors: [["p-captcha"]], inputs: { siteKey: "siteKey", theme: "theme", type: "type", size: "size", tabindex: "tabindex", initCallback: "initCallback", language: "language" }, outputs: { onResponse: "onResponse", onExpire: "onExpire" }, decls: 1, vars: 0, template: function Captcha_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div");
    } }, encapsulation: 2, changeDetection: 0 });
Captcha.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
Captcha.propDecorators = {
    siteKey: [{ type: Input }],
    theme: [{ type: Input }],
    type: [{ type: Input }],
    size: [{ type: Input }],
    tabindex: [{ type: Input }],
    initCallback: [{ type: Input }],
    onResponse: [{ type: Output }],
    onExpire: [{ type: Output }],
    language: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Captcha, [{
        type: Component,
        args: [{
                selector: 'p-captcha',
                template: `<div></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { siteKey: [{
            type: Input
        }], theme: [{
            type: Input
        }], type: [{
            type: Input
        }], size: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], initCallback: [{
            type: Input
        }], onResponse: [{
            type: Output
        }], onExpire: [{
            type: Output
        }], language: [{
            type: Input
        }] }); })();
export class CaptchaModule {
}
CaptchaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CaptchaModule });
CaptchaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CaptchaModule_Factory(t) { return new (t || CaptchaModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CaptchaModule, { declarations: function () { return [Captcha]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Captcha]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CaptchaModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Captcha],
                declarations: [Captcha]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2NhcHRjaGEvY2FwdGNoYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFlLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBVyxNQUFNLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25MLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFRN0MsTUFBTSxPQUFPLE9BQU87QUFBRyxJQWdDbkIsWUFBbUIsRUFBYyxFQUFTLEtBQWEsRUFBUyxFQUFxQjtBQUFJLFFBQXRFLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFRLFVBQUssR0FBTCxLQUFLLENBQVE7QUFBQyxRQUFRLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUE5QjdFLFlBQU8sR0FBVyxJQUFJLENBQUM7QUFDcEMsUUFDYSxVQUFLLEdBQUcsT0FBTyxDQUFDO0FBQzdCLFFBQ2EsU0FBSSxHQUFHLE9BQU8sQ0FBQztBQUM1QixRQUNhLFNBQUksR0FBRyxRQUFRLENBQUM7QUFDN0IsUUFDYSxhQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLFFBQ2EsaUJBQVksR0FBRyxlQUFlLENBQUM7QUFDNUMsUUFDYyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDakUsUUFDYyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0QsUUFDWSxjQUFTLEdBQVEsSUFBSSxDQUFDO0FBQ2xDLFFBQ1ksY0FBUyxHQUFRLElBQUksQ0FBQztBQUNsQyxJQVc0RixDQUFDO0FBQzdGLElBVkksSUFBYSxRQUFRO0FBQUssUUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzlCLElBQUksQ0FBQztBQUNMLElBQ0ksSUFBSSxRQUFRLENB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SSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtBQUNwQyxZQUFnQixNQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekQsU0FBUztBQUNULElBQUksQ0FBQztBQUNMO21DQXJHQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFLFdBQVcsa0JBQ3JCLFFBQVEsRUFBRSxhQUFhLGtCQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtHQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN4Qzs7aURBQ0k7QUFBQztBQUFpQyxZQVQ2QyxVQUFVO0FBQUksWUFBdEMsTUFBTTtBQUFJLFlBQXFFLGlCQUFpQjtBQUFHO0FBQUc7QUFDekosc0JBVUosS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSywyQkFFVixLQUFLO0FBQUsseUJBRVYsTUFBTTtBQUFLLHVCQUVYLE1BQU07QUFBSyx1QkFPWCxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQStFaEIsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FMNUIsUUFBUSxTQUFDO0tBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQ2xCLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUMxQjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLEFmdGVyVmlld0luaXQsQ29tcG9uZW50LEV2ZW50RW1pdHRlcixJbnB1dCxOZ1pvbmUsT25EZXN0cm95LE91dHB1dCxFbGVtZW50UmVmLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1jYXB0Y2hhJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXY+PC9kaXY+YCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhcHRjaGEgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBzaXRlS2V5OiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBcbiAgICBASW5wdXQoKSB0aGVtZSA9ICdsaWdodCc7XG4gICAgXG4gICAgQElucHV0KCkgdHlwZSA9ICdpbWFnZSc7XG4gICAgXG4gICAgQElucHV0KCkgc2l6ZSA9ICdub3JtYWwnO1xuICAgIFxuICAgIEBJbnB1dCgpIHRhYmluZGV4ID0gMDtcbiAgICAgXG4gICAgQElucHV0KCkgaW5pdENhbGxiYWNrID0gXCJpbml0UmVjYXB0Y2hhXCI7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uUmVzcG9uc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkV4cGlyZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgcHJpdmF0ZSBfaW5zdGFuY2U6IGFueSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9sYW5ndWFnZTogYW55ID0gbnVsbDtcblxuXG4gICAgQElucHV0KCkgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgICB9XG5cbiAgICBzZXQgbGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyBfem9uZTogTmdab25lLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCg8YW55PndpbmRvdykuZ3JlY2FwdGNoYSkge1xuICAgICAgICAgICAgaWYgKCEoPGFueT53aW5kb3cpLmdyZWNhcHRjaGEucmVuZGVyKXtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICB9LDEwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKDxhbnk+d2luZG93KVt0aGlzLmluaXRDYWxsYmFja10gPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cbiAgICBcbiAgICBpbml0KCnCoHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmdyZWNhcHRjaGEucmVuZGVyKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwge1xuICAgICAgICAgICAgJ3NpdGVrZXknOiB0aGlzLnNpdGVLZXksXG4gICAgICAgICAgICAndGhlbWUnOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgJ3R5cGUnOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICAnc2l6ZSc6IHRoaXMuc2l6ZSxcbiAgICAgICAgICAgICd0YWJpbmRleCc6IHRoaXMudGFiaW5kZXgsXG4gICAgICAgICAgICAnaGwnOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgICAgICAgJ2NhbGxiYWNrJzogKHJlc3BvbnNlOiBzdHJpbmcpID0+IHt0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrKHJlc3BvbnNlKSl9LFxuICAgICAgICAgICAgJ2V4cGlyZWQtY2FsbGJhY2snOiAoKSA9PiB7dGhpcy5fem9uZS5ydW4oKCkgPT4gdGhpcy5yZWNhcHRjaGFFeHBpcmVkQ2FsbGJhY2soKSl9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgKDxhbnk+d2luZG93KS5ncmVjYXB0Y2hhLnJlc2V0KHRoaXMuX2luc3RhbmNlKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UmVzcG9uc2UoKTogU3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKDxhbnk+d2luZG93KS5ncmVjYXB0Y2hhLmdldFJlc3BvbnNlKHRoaXMuX2luc3RhbmNlKTtcbiAgICB9XG4gICAgXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2socmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLm9uUmVzcG9uc2UuZW1pdCh7XG4gICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVjYXB0Y2hhRXhwaXJlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLm9uRXhwaXJlLmVtaXQoKTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICAgICAgKDxhbnk+d2luZG93KS5ncmVjYXB0Y2hhLnJlc2V0KHRoaXMuX2luc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbQ2FwdGNoYV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQ2FwdGNoYV1cbn0pXG5leHBvcnQgY2xhc3MgQ2FwdGNoYU1vZHVsZSB7IH1cbiJdfQ==