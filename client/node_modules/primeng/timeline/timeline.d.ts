import { ElementRef, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { BlockableUI } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class Timeline implements AfterContentInit, BlockableUI {
    private el;
    value: any[];
    style: any;
    styleClass: string;
    align: string;
    layout: string;
    templates: QueryList<any>;
    contentTemplate: TemplateRef<any>;
    oppositeTemplate: TemplateRef<any>;
    markerTemplate: TemplateRef<any>;
    constructor(el: ElementRef);
    getBlockableElement(): HTMLElement;
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Timeline, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Timeline, "p-timeline", never, { "align": "align"; "layout": "layout"; "value": "value"; "style": "style"; "styleClass": "styleClass"; }, {}, ["templates"], never>;
}
export declare class TimelineModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TimelineModule, [typeof Timeline], [typeof ɵngcc1.CommonModule], [typeof Timeline]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TimelineModule>;
}

//# sourceMappingURL=timeline.d.ts.map