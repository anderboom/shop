import { OnInit, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class ScrollTop implements OnInit, OnDestroy {
    el: ElementRef;
    private cd;
    styleClass: string;
    style: any;
    target: string;
    threshold: number;
    icon: string;
    behavior: string;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    scrollListener: any;
    visible: boolean;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    onClick(): void;
    onEnter(): void;
    checkVisibility(scrollY: any): void;
    bindParentScrollListener(): void;
    bindDocumentScrollListener(): void;
    unbindParentScrollListener(): void;
    unbindDocumentScrollListener(): void;
    containerClass(): {
        'p-scrolltop p-link p-component': boolean;
        'p-scrolltop-sticky': boolean;
    };
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollTop, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScrollTop, "p-scrollTop", never, { "target": "target"; "threshold": "threshold"; "icon": "icon"; "behavior": "behavior"; "showTransitionOptions": "showTransitionOptions"; "hideTransitionOptions": "hideTransitionOptions"; "styleClass": "styleClass"; "style": "style"; }, {}, never, never>;
}
export declare class ScrollTopModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ScrollTopModule, [typeof ScrollTop], [typeof ɵngcc1.CommonModule], [typeof ScrollTop]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ScrollTopModule>;
}

//# sourceMappingURL=scrolltop.d.ts.map