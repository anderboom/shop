import { NgModule, Component, Input, Output, ChangeDetectorRef, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from 'primeng/dropdown';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from 'primeng/api';

function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function Paginator_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r1.paginatorState));
} }
function Paginator_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.currentPageReport);
} }
const _c1 = function (a0) { return { "p-disabled": a0 }; };
function Paginator_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.changePageToFirst($event); });
    ɵngcc0.ɵɵelement(1, "span", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r3.isFirstPage())("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r3.isFirstPage()));
} }
const _c2 = function (a0) { return { "p-highlight": a0 }; };
function Paginator_div_0_span_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 21);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_span_6_button_1_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const pageLink_r13 = ctx.$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(3); return ctx_r14.onPageLinkClick($event, pageLink_r13 - 1); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const pageLink_r13 = ctx.$implicit;
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c2, pageLink_r13 - 1 == ctx_r12.getPage()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(pageLink_r13);
} }
function Paginator_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 19);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_span_6_button_1_Template, 2, 4, "button", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.pageLinks);
} }
function Paginator_div_0_p_dropdown_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r16.currentPageReport);
} }
function Paginator_div_0_p_dropdown_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdown", 22);
    ɵngcc0.ɵɵlistener("onChange", function Paginator_div_0_p_dropdown_7_Template_p_dropdown_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.onPageDropdownChange($event); });
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_p_dropdown_7_ng_template_1_Template, 1, 1, "ng-template", 23);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("options", ctx_r5.pageItems)("ngModel", ctx_r5.getPage())("appendTo", ctx_r5.dropdownAppendTo)("scrollHeight", ctx_r5.dropdownScrollHeight);
} }
function Paginator_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 24);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_button_10_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(2); return ctx_r19.changePageToLast($event); });
    ɵngcc0.ɵɵelement(1, "span", 25);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.isLastPage())("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r6.isLastPage()));
} }
function Paginator_div_0_p_dropdown_11_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Paginator_div_0_p_dropdown_11_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Paginator_div_0_p_dropdown_11_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r22 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r22.dropdownItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, item_r23));
} }
function Paginator_div_0_p_dropdown_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_p_dropdown_11_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 28);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function Paginator_div_0_p_dropdown_11_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdown", 26);
    ɵngcc0.ɵɵlistener("ngModelChange", function Paginator_div_0_p_dropdown_11_Template_p_dropdown_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.rows = $event; })("onChange", function Paginator_div_0_p_dropdown_11_Template_p_dropdown_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.onRppChange($event); });
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_p_dropdown_11_ng_container_1_Template, 2, 0, "ng-container", 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("options", ctx_r7.rowsPerPageItems)("ngModel", ctx_r7.rows)("appendTo", ctx_r7.dropdownAppendTo)("scrollHeight", ctx_r7.dropdownScrollHeight);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.dropdownItemTemplate);
} }
function Paginator_div_0_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Paginator_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_12_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r8.templateRight)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r8.paginatorState));
} }
function Paginator_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_1_Template, 2, 4, "div", 2);
    ɵngcc0.ɵɵtemplate(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵtemplate(3, Paginator_div_0_button_3_Template, 2, 4, "button", 4);
    ɵngcc0.ɵɵelementStart(4, "button", 5);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_Template_button_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.changePageToPrev($event); });
    ɵngcc0.ɵɵelement(5, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    ɵngcc0.ɵɵtemplate(7, Paginator_div_0_p_dropdown_7_Template, 2, 4, "p-dropdown", 8);
    ɵngcc0.ɵɵelementStart(8, "button", 9);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_Template_button_click_8_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.changePageToNext($event); });
    ɵngcc0.ɵɵelement(9, "span", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(10, Paginator_div_0_button_10_Template, 2, 4, "button", 11);
    ɵngcc0.ɵɵtemplate(11, Paginator_div_0_p_dropdown_11_Template, 2, 5, "p-dropdown", 12);
    ɵngcc0.ɵɵtemplate(12, Paginator_div_0_div_12_Template, 2, 4, "div", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style)("ngClass", "p-paginator p-component");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.templateLeft);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showCurrentPageReport);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showFirstLastIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.isFirstPage())("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c1, ctx_r0.isFirstPage()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showPageLinks);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showJumpToPageDropdown);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.isLastPage())("ngClass", ɵngcc0.ɵɵpureFunction1(18, _c1, ctx_r0.isLastPage()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showFirstLastIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.rowsPerPageOptions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.templateRight);
} }
export class Paginator {
    constructor(cd) {
        this.cd = cd;
        this.pageLinkSize = 5;
        this.onPageChange = new EventEmitter();
        this.alwaysShow = true;
        this.dropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.showFirstLastIcon = true;
        this.totalRecords = 0;
        this.rows = 0;
        this.showPageLinks = true;
        this._first = 0;
        this._page = 0;
    }
    ngOnInit() {
        this.updatePaginatorState();
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.totalRecords) {
            this.updatePageLinks();
            this.updatePaginatorState();
            this.updateFirst();
            this.updateRowsPerPageOptions();
        }
        if (simpleChange.first) {
            this._first = simpleChange.first.currentValue;
            this.updatePageLinks();
            this.updatePaginatorState();
        }
        if (simpleChange.rows) {
            this.updatePageLinks();
            this.updatePaginatorState();
        }
        if (simpleChange.rowsPerPageOptions) {
            this.updateRowsPerPageOptions();
        }
    }
    get first() {
        return this._first;
    }
    set first(val) {
        this._first = val;
    }
    updateRowsPerPageOptions() {
        if (this.rowsPerPageOptions) {
            this.rowsPerPageItems = [];
            for (let opt of this.rowsPerPageOptions) {
                if (typeof opt == 'object' && opt['showAll']) {
                    this.rowsPerPageItems.unshift({ label: opt['showAll'], value: this.totalRecords });
                }
                else {
                    this.rowsPerPageItems.push({ label: String(opt), value: opt });
                }
            }
        }
    }
    isFirstPage() {
        return this.getPage() === 0;
    }
    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }
    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }
    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    }
    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
        if (this.showJumpToPageDropdown) {
            this.pageItems = [];
            for (let i = 0; i < this.getPageCount(); i++) {
                this.pageItems.push({ label: String(i + 1), value: i });
            }
        }
    }
    changePage(p) {
        var pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this._first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            this.updatePaginatorState();
        }
    }
    updateFirst() {
        const page = this.getPage();
        if (page > 0 && this.totalRecords && (this.first >= this.totalRecords)) {
            Promise.resolve(null).then(() => this.changePage(page - 1));
        }
    }
    getPage() {
        return Math.floor(this.first / this.rows);
    }
    changePageToFirst(event) {
        if (!this.isFirstPage()) {
            this.changePage(0);
        }
        event.preventDefault();
    }
    changePageToPrev(event) {
        this.changePage(this.getPage() - 1);
        event.preventDefault();
    }
    changePageToNext(event) {
        this.changePage(this.getPage() + 1);
        event.preventDefault();
    }
    changePageToLast(event) {
        if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
        }
        event.preventDefault();
    }
    onPageLinkClick(event, page) {
        this.changePage(page);
        event.preventDefault();
    }
    onRppChange(event) {
        this.changePage(this.getPage());
    }
    onPageDropdownChange(event) {
        this.changePage(event.value);
    }
    updatePaginatorState() {
        this.paginatorState = {
            page: this.getPage(),
            pageCount: this.getPageCount(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
        };
    }
    get currentPageReport() {
        return this.currentPageReportTemplate
            .replace("{currentPage}", String(this.getPage() + 1))
            .replace("{totalPages}", String(this.getPageCount()))
            .replace("{first}", String((this.totalRecords > 0) ? this._first + 1 : 0))
            .replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords)))
            .replace("{rows}", String(this.rows))
            .replace("{totalRecords}", String(this.totalRecords));
    }
}
Paginator.ɵfac = function Paginator_Factory(t) { return new (t || Paginator)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Paginator.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Paginator, selectors: [["p-paginator"]], inputs: { pageLinkSize: "pageLinkSize", alwaysShow: "alwaysShow", dropdownScrollHeight: "dropdownScrollHeight", currentPageReportTemplate: "currentPageReportTemplate", showFirstLastIcon: "showFirstLastIcon", totalRecords: "totalRecords", rows: "rows", showPageLinks: "showPageLinks", first: "first", style: "style", styleClass: "styleClass", templateLeft: "templateLeft", templateRight: "templateRight", dropdownAppendTo: "dropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", rowsPerPageOptions: "rowsPerPageOptions", showJumpToPageDropdown: "showJumpToPageDropdown", dropdownItemTemplate: "dropdownItemTemplate" }, outputs: { onPageChange: "onPageChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-left-content", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-left"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-right"], ["type", "button", "pRipple", "", "class", "p-paginator-last p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-right-content", 4, "ngIf"], [1, "p-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-double-left"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page p-paginator-element p-link", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", "p-paginator-element", "p-link", 3, "ngClass", "click"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "onChange"], ["pTemplate", "selectedItem"], ["type", "button", "pRipple", "", 1, "p-paginator-last", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-double-right"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "ngModelChange", "onChange"], [4, "ngIf"], ["pTemplate", "item"], [1, "p-paginator-right-content"]], template: function Paginator_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Paginator_div_0_Template, 13, 20, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc2.Ripple, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc3.Dropdown, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc5.PrimeTemplate], styles: [".p-paginator{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-current,.p-paginator-first,.p-paginator-last,.p-paginator-next,.p-paginator-page,.p-paginator-prev{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:inline-flex;justify-content:center;line-height:1;overflow:hidden;position:relative;user-select:none}.p-paginator-element:focus{position:relative;z-index:1}"], encapsulation: 2, changeDetection: 0 });
Paginator.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
Paginator.propDecorators = {
    pageLinkSize: [{ type: Input }],
    onPageChange: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    alwaysShow: [{ type: Input }],
    templateLeft: [{ type: Input }],
    templateRight: [{ type: Input }],
    dropdownAppendTo: [{ type: Input }],
    dropdownScrollHeight: [{ type: Input }],
    currentPageReportTemplate: [{ type: Input }],
    showCurrentPageReport: [{ type: Input }],
    showFirstLastIcon: [{ type: Input }],
    totalRecords: [{ type: Input }],
    rows: [{ type: Input }],
    rowsPerPageOptions: [{ type: Input }],
    showJumpToPageDropdown: [{ type: Input }],
    showPageLinks: [{ type: Input }],
    dropdownItemTemplate: [{ type: Input }],
    first: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Paginator, [{
        type: Component,
        args: [{
                selector: 'p-paginator',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-paginator p-component'" *ngIf="alwaysShow ? true : (pageLinks && pageLinks.length > 1)">
            <div class="p-paginator-left-content" *ngIf="templateLeft">
                <ng-container *ngTemplateOutlet="templateLeft; context: {$implicit: paginatorState}"></ng-container>
            </div>
            <span class="p-paginator-current" *ngIf="showCurrentPageReport">{{currentPageReport}}</span>
            <button *ngIf="showFirstLastIcon" type="button" [disabled]="isFirstPage()" (click)="changePageToFirst($event)" pRipple
                    class="p-paginator-first p-paginator-element p-link" [ngClass]="{'p-disabled':isFirstPage()}">
                <span class="p-paginator-icon pi pi-angle-double-left"></span>
            </button>
            <button type="button" [disabled]="isFirstPage()" (click)="changePageToPrev($event)" pRipple
                    class="p-paginator-prev p-paginator-element p-link" [ngClass]="{'p-disabled':isFirstPage()}">
                <span class="p-paginator-icon pi pi-angle-left"></span>
            </button>
            <span class="p-paginator-pages" *ngIf="showPageLinks">
                <button type="button" *ngFor="let pageLink of pageLinks" class="p-paginator-page p-paginator-element p-link" [ngClass]="{'p-highlight': (pageLink-1 == getPage())}"
                    (click)="onPageLinkClick($event, pageLink - 1)" pRipple>{{pageLink}}</button>
            </span>
            <p-dropdown [options]="pageItems" [ngModel]="getPage()" *ngIf="showJumpToPageDropdown"  styleClass="p-paginator-page-options"
                (onChange)="onPageDropdownChange($event)" [appendTo]="dropdownAppendTo" [scrollHeight]="dropdownScrollHeight">
                <ng-template pTemplate="selectedItem">{{currentPageReport}}</ng-template>
            </p-dropdown>
            <button type="button" [disabled]="isLastPage()" (click)="changePageToNext($event)" pRipple
                    class="p-paginator-next p-paginator-element p-link" [ngClass]="{'p-disabled':isLastPage()}">
                <span class="p-paginator-icon pi pi-angle-right"></span>
            </button>
            <button *ngIf="showFirstLastIcon" type="button" [disabled]="isLastPage()" (click)="changePageToLast($event)" pRipple
                    class="p-paginator-last p-paginator-element p-link" [ngClass]="{'p-disabled':isLastPage()}">
                <span class="p-paginator-icon pi pi-angle-double-right"></span>
            </button>
            <p-dropdown [options]="rowsPerPageItems" [(ngModel)]="rows" *ngIf="rowsPerPageOptions" styleClass="p-paginator-rpp-options"
                (onChange)="onRppChange($event)" [appendTo]="dropdownAppendTo" [scrollHeight]="dropdownScrollHeight">
                <ng-container *ngIf="dropdownItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: {$implicit: item}">
                        </ng-container>
                    </ng-template>
                </ng-container>
            </p-dropdown>
            <div class="p-paginator-right-content" *ngIf="templateRight">
                <ng-container *ngTemplateOutlet="templateRight; context: {$implicit: paginatorState}"></ng-container>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-paginator{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-current,.p-paginator-first,.p-paginator-last,.p-paginator-next,.p-paginator-page,.p-paginator-prev{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:inline-flex;justify-content:center;line-height:1;overflow:hidden;position:relative;user-select:none}.p-paginator-element:focus{position:relative;z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { pageLinkSize: [{
            type: Input
        }], onPageChange: [{
            type: Output
        }], alwaysShow: [{
            type: Input
        }], dropdownScrollHeight: [{
            type: Input
        }], currentPageReportTemplate: [{
            type: Input
        }], showFirstLastIcon: [{
            type: Input
        }], totalRecords: [{
            type: Input
        }], rows: [{
            type: Input
        }], showPageLinks: [{
            type: Input
        }], first: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templateLeft: [{
            type: Input
        }], templateRight: [{
            type: Input
        }], dropdownAppendTo: [{
            type: Input
        }], showCurrentPageReport: [{
            type: Input
        }], rowsPerPageOptions: [{
            type: Input
        }], showJumpToPageDropdown: [{
            type: Input
        }], dropdownItemTemplate: [{
            type: Input
        }] }); })();
export class PaginatorModule {
}
PaginatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PaginatorModule });
PaginatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PaginatorModule_Factory(t) { return new (t || PaginatorModule)(); }, imports: [[CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule], DropdownModule, FormsModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PaginatorModule, { declarations: function () { return [Paginator]; }, imports: function () { return [CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule]; }, exports: function () { return [Paginator, DropdownModule, FormsModule, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaginatorModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule],
                exports: [Paginator, DropdownModule, FormsModule, SharedModule],
                declarations: [Paginator]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdG9yL3BhZ2luYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBUSxLQUFLLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLFlBQVksRUFBcUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkwsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EekMsTUFBTSxPQUFPLFNBQVM7QUFBRyxJQWtEckIsWUFBb0IsRUFBcUI7QUFBSSxRQUF6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBaERqQyxpQkFBWSxHQUFXLENBQUMsQ0FBQztBQUN0QyxRQUNjLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDbkUsUUFLYSxlQUFVLEdBQVksSUFBSSxDQUFDO0FBQ3hDLFFBT2EseUJBQW9CLEdBQVcsT0FBTyxDQUFDO0FBQ3BELFFBQ2EsOEJBQXlCLEdBQVcsK0JBQStCLENBQUM7QUFDakYsUUFHYSxzQkFBaUIsR0FB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LHlCQUVWLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLDRCQUVWLEtBQUs7QUFBSywrQkFFVixLQUFLO0FBQUssbUNBRVYsS0FBSztBQUFLLHdDQUVWLEtBQUs7QUFBSyxvQ0FFVixLQUFLO0FBQUssZ0NBRVYsS0FBSztBQUFLLDJCQUVWLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUssaUNBRVYsS0FBSztBQUFLLHFDQUVWLEtBQUs7QUFBSyw0QkFFVixLQUFLO0FBQUssbUNBRVYsS0FBSztBQUFLLG9CQTRDVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFnS2hCLE1BQU0sT0FBTyxlQUFlO0FBQUc7MkNBTDlCLFFBQVEsU0FBQztHQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxZQUFZLENBQUMsa0JBQzVFLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFlBQVksQ0FBQyxrQkFDNUQsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQzVCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LE9uSW5pdCxJbnB1dCxPdXRwdXQsQ2hhbmdlRGV0ZWN0b3JSZWYsRXZlbnRFbWl0dGVyLFRlbXBsYXRlUmVmLE9uQ2hhbmdlcyxTaW1wbGVDaGFuZ2VzLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1JpcHBsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXBhZ2luYXRvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW25nQ2xhc3NdPVwiJ3AtcGFnaW5hdG9yIHAtY29tcG9uZW50J1wiICpuZ0lmPVwiYWx3YXlzU2hvdyA/IHRydWUgOiAocGFnZUxpbmtzICYmIHBhZ2VMaW5rcy5sZW5ndGggPiAxKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcGFnaW5hdG9yLWxlZnQtY29udGVudFwiICpuZ0lmPVwidGVtcGxhdGVMZWZ0XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlTGVmdDsgY29udGV4dDogeyRpbXBsaWNpdDogcGFnaW5hdG9yU3RhdGV9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1wYWdpbmF0b3ItY3VycmVudFwiICpuZ0lmPVwic2hvd0N1cnJlbnRQYWdlUmVwb3J0XCI+e3tjdXJyZW50UGFnZVJlcG9ydH19PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dGaXJzdExhc3RJY29uXCIgdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCJpc0ZpcnN0UGFnZSgpXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2VUb0ZpcnN0KCRldmVudClcIiBwUmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1wYWdpbmF0b3ItZmlyc3QgcC1wYWdpbmF0b3ItZWxlbWVudCBwLWxpbmtcIiBbbmdDbGFzc109XCJ7J3AtZGlzYWJsZWQnOmlzRmlyc3RQYWdlKCl9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhZ2luYXRvci1pY29uIHBpIHBpLWFuZ2xlLWRvdWJsZS1sZWZ0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwiaXNGaXJzdFBhZ2UoKVwiIChjbGljayk9XCJjaGFuZ2VQYWdlVG9QcmV2KCRldmVudClcIiBwUmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1wYWdpbmF0b3ItcHJldiBwLXBhZ2luYXRvci1lbGVtZW50IHAtbGlua1wiIFtuZ0NsYXNzXT1cInsncC1kaXNhYmxlZCc6aXNGaXJzdFBhZ2UoKX1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtcGFnaW5hdG9yLWljb24gcGkgcGktYW5nbGUtbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhZ2luYXRvci1wYWdlc1wiICpuZ0lmPVwic2hvd1BhZ2VMaW5rc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0Zvcj1cImxldCBwYWdlTGluayBvZiBwYWdlTGlua3NcIiBjbGFzcz1cInAtcGFnaW5hdG9yLXBhZ2UgcC1wYWdpbmF0b3ItZWxlbWVudCBwLWxpbmtcIiBbbmdDbGFzc109XCJ7J3AtaGlnaGxpZ2h0JzogKHBhZ2VMaW5rLTEgPT0gZ2V0UGFnZSgpKX1cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25QYWdlTGlua0NsaWNrKCRldmVudCwgcGFnZUxpbmsgLSAxKVwiIHBSaXBwbGU+e3twYWdlTGlua319PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8cC1kcm9wZG93biBbb3B0aW9uc109XCJwYWdlSXRlbXNcIiBbbmdNb2RlbF09XCJnZXRQYWdlKClcIiAqbmdJZj1cInNob3dKdW1wVG9QYWdlRHJvcGRvd25cIiAgc3R5bGVDbGFzcz1cInAtcGFnaW5hdG9yLXBhZ2Utb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cIm9uUGFnZURyb3Bkb3duQ2hhbmdlKCRldmVudClcIiBbYXBwZW5kVG9dPVwiZHJvcGRvd25BcHBlbmRUb1wiIFtzY3JvbGxIZWlnaHRdPVwiZHJvcGRvd25TY3JvbGxIZWlnaHRcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwic2VsZWN0ZWRJdGVtXCI+e3tjdXJyZW50UGFnZVJlcG9ydH19PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1kcm9wZG93bj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCJpc0xhc3RQYWdlKClcIiAoY2xpY2spPVwiY2hhbmdlUGFnZVRvTmV4dCgkZXZlbnQpXCIgcFJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtcGFnaW5hdG9yLW5leHQgcC1wYWdpbmF0b3ItZWxlbWVudCBwLWxpbmtcIiBbbmdDbGFzc109XCJ7J3AtZGlzYWJsZWQnOmlzTGFzdFBhZ2UoKX1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtcGFnaW5hdG9yLWljb24gcGkgcGktYW5nbGUtcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93Rmlyc3RMYXN0SWNvblwiIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwiaXNMYXN0UGFnZSgpXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2VUb0xhc3QoJGV2ZW50KVwiIHBSaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLXBhZ2luYXRvci1sYXN0IHAtcGFnaW5hdG9yLWVsZW1lbnQgcC1saW5rXCIgW25nQ2xhc3NdPVwieydwLWRpc2FibGVkJzppc0xhc3RQYWdlKCl9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBhZ2luYXRvci1pY29uIHBpIHBpLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAtZHJvcGRvd24gW29wdGlvbnNdPVwicm93c1BlclBhZ2VJdGVtc1wiIFsobmdNb2RlbCldPVwicm93c1wiICpuZ0lmPVwicm93c1BlclBhZ2VPcHRpb25zXCIgc3R5bGVDbGFzcz1cInAtcGFnaW5hdG9yLXJwcC1vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwib25ScHBDaGFuZ2UoJGV2ZW50KVwiIFthcHBlbmRUb109XCJkcm9wZG93bkFwcGVuZFRvXCIgW3Njcm9sbEhlaWdodF09XCJkcm9wZG93blNjcm9sbEhlaWdodFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkcm9wZG93bkl0ZW1UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW0gcFRlbXBsYXRlPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRyb3Bkb3duSXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3AtZHJvcGRvd24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1wYWdpbmF0b3ItcmlnaHQtY29udGVudFwiICpuZ0lmPVwidGVtcGxhdGVSaWdodFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVJpZ2h0OyBjb250ZXh0OiB7JGltcGxpY2l0OiBwYWdpbmF0b3JTdGF0ZX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdG9yLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIHBhZ2VMaW5rU2l6ZTogbnVtYmVyID0gNTtcblxuICAgIEBPdXRwdXQoKSBvblBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFsd2F5c1Nob3c6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIEBJbnB1dCgpIHRlbXBsYXRlTGVmdDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZVJpZ2h0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQElucHV0KCkgZHJvcGRvd25BcHBlbmRUbzogYW55O1xuXG4gICAgQElucHV0KCkgZHJvcGRvd25TY3JvbGxIZWlnaHQ6IHN0cmluZyA9ICcyMDBweCc7XG5cbiAgICBASW5wdXQoKSBjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlOiBzdHJpbmcgPSAne2N1cnJlbnRQYWdlfSBvZiB7dG90YWxQYWdlc30nO1xuXG4gICAgQElucHV0KCkgc2hvd0N1cnJlbnRQYWdlUmVwb3J0OiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2hvd0ZpcnN0TGFzdEljb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgdG90YWxSZWNvcmRzOiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgcm93czogbnVtYmVyID0gMDtcbiAgICBcbiAgICBASW5wdXQoKSByb3dzUGVyUGFnZU9wdGlvbnM6IGFueVtdO1xuXG4gICAgQElucHV0KCkgc2hvd0p1bXBUb1BhZ2VEcm9wZG93bjogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHNob3dQYWdlTGlua3M6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgZHJvcGRvd25JdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBwYWdlTGlua3M6IG51bWJlcltdO1xuXG4gICAgcGFnZUl0ZW1zOiBTZWxlY3RJdGVtW107XG5cbiAgICByb3dzUGVyUGFnZUl0ZW1zOiBTZWxlY3RJdGVtW107XG4gICAgXG4gICAgcGFnaW5hdG9yU3RhdGU6IGFueTtcblxuICAgIF9maXJzdDogbnVtYmVyID0gMDtcblxuICAgIF9wYWdlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdG9yU3RhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2U6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS50b3RhbFJlY29yZHMpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZUxpbmtzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRvclN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpcnN0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJvd3NQZXJQYWdlT3B0aW9ucygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS5maXJzdCkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSBzaW1wbGVDaGFuZ2UuZmlyc3QuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdG9yU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2Uucm93cykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdG9yU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2Uucm93c1BlclBhZ2VPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJvd3NQZXJQYWdlT3B0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IGZpcnN0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdDtcbiAgICB9XG4gICAgc2V0IGZpcnN0KHZhbDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZmlyc3QgPSB2YWw7XG4gICAgfVxuXG4gICAgdXBkYXRlUm93c1BlclBhZ2VPcHRpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5yb3dzUGVyUGFnZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucm93c1BlclBhZ2VJdGVtcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgb3B0IG9mIHRoaXMucm93c1BlclBhZ2VPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgJiYgb3B0WydzaG93QWxsJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzUGVyUGFnZUl0ZW1zLnVuc2hpZnQoe2xhYmVsOiBvcHRbJ3Nob3dBbGwnXSwgdmFsdWU6IHRoaXMudG90YWxSZWNvcmRzfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3NQZXJQYWdlSXRlbXMucHVzaCh7bGFiZWw6IFN0cmluZyhvcHQpLCB2YWx1ZTogb3B0fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNGaXJzdFBhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhZ2UoKSA9PT0gMDtcbiAgICB9XG5cbiAgICBpc0xhc3RQYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYWdlKCkgPT09IHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxO1xuICAgIH1cblxuICAgIGdldFBhZ2VDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnRvdGFsUmVjb3Jkcy90aGlzLnJvd3MpfHwxO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBhZ2VMaW5rQm91bmRhcmllcygpIHtcbiAgICAgICAgbGV0IG51bWJlck9mUGFnZXMgPSB0aGlzLmdldFBhZ2VDb3VudCgpLFxuICAgICAgICB2aXNpYmxlUGFnZXMgPSBNYXRoLm1pbih0aGlzLnBhZ2VMaW5rU2l6ZSwgbnVtYmVyT2ZQYWdlcyk7XG5cbiAgICAgICAgLy9jYWxjdWxhdGUgcmFuZ2UsIGtlZXAgY3VycmVudCBpbiBtaWRkbGUgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDAsIE1hdGguY2VpbCh0aGlzLmdldFBhZ2UoKSAtICgodmlzaWJsZVBhZ2VzKSAvIDIpKSksXG4gICAgICAgIGVuZCA9IE1hdGgubWluKG51bWJlck9mUGFnZXMgLSAxLCBzdGFydCArIHZpc2libGVQYWdlcyAtIDEpO1xuXG4gICAgICAgIC8vY2hlY2sgd2hlbiBhcHByb2FjaGluZyB0byBsYXN0IHBhZ2VcbiAgICAgICAgdmFyIGRlbHRhID0gdGhpcy5wYWdlTGlua1NpemUgLSAoZW5kIC0gc3RhcnQgKyAxKTtcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydCAtIGRlbHRhKTtcblxuICAgICAgICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xuICAgIH1cblxuICAgIHVwZGF0ZVBhZ2VMaW5rcygpIHtcbiAgICAgICAgdGhpcy5wYWdlTGlua3MgPSBbXTtcbiAgICAgICAgbGV0IGJvdW5kYXJpZXMgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VMaW5rQm91bmRhcmllcygpLFxuICAgICAgICBzdGFydCA9IGJvdW5kYXJpZXNbMF0sXG4gICAgICAgIGVuZCA9IGJvdW5kYXJpZXNbMV07XG5cbiAgICAgICAgZm9yKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUxpbmtzLnB1c2goaSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0p1bXBUb1BhZ2VEcm9wZG93bikge1xuICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRQYWdlQ291bnQoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXMucHVzaCh7bGFiZWw6IFN0cmluZyhpICsgMSksIHZhbHVlOiBpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VQYWdlKHAgOm51bWJlcikge1xuICAgICAgICB2YXIgcGMgPSB0aGlzLmdldFBhZ2VDb3VudCgpO1xuXG4gICAgICAgIGlmIChwID49IDAgJiYgcCA8IHBjKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IHRoaXMucm93cyAqIHA7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgcGFnZTogcCxcbiAgICAgICAgICAgICAgICBmaXJzdDogdGhpcy5maXJzdCxcbiAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnJvd3MsXG4gICAgICAgICAgICAgICAgcGFnZUNvdW50OiBwY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZUxpbmtzKCk7XG5cbiAgICAgICAgICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0b3JTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRmlyc3QoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgaWYgKHBhZ2UgPiAwICYmIHRoaXMudG90YWxSZWNvcmRzICYmICh0aGlzLmZpcnN0ID49IHRoaXMudG90YWxSZWNvcmRzKSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gdGhpcy5jaGFuZ2VQYWdlKHBhZ2UgLSAxKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQYWdlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZmlyc3QgLyB0aGlzLnJvd3MpO1xuICAgIH1cblxuICAgIGNoYW5nZVBhZ2VUb0ZpcnN0KGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaXNGaXJzdFBhZ2UoKSl7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDApO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNoYW5nZVBhZ2VUb1ByZXYoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMuZ2V0UGFnZSgpIC0gMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZVRvTmV4dChldmVudCkge1xuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5nZXRQYWdlKCkgICsgMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZVRvTGFzdChldmVudCkge1xuICAgICAgaWYgKCF0aGlzLmlzTGFzdFBhZ2UoKSl7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvblBhZ2VMaW5rQ2xpY2soZXZlbnQsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHBhZ2UpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uUnBwQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLmdldFBhZ2UoKSk7XG4gICAgfVxuXG4gICAgb25QYWdlRHJvcGRvd25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKGV2ZW50LnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlUGFnaW5hdG9yU3RhdGUoKSB7XG4gICAgICAgIHRoaXMucGFnaW5hdG9yU3RhdGUgPSB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLmdldFBhZ2UoKSxcbiAgICAgICAgICAgIHBhZ2VDb3VudDogdGhpcy5nZXRQYWdlQ291bnQoKSxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMucm93cyxcbiAgICAgICAgICAgIGZpcnN0OiB0aGlzLmZpcnN0LFxuICAgICAgICAgICAgdG90YWxSZWNvcmRzOiB0aGlzLnRvdGFsUmVjb3Jkc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRQYWdlUmVwb3J0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ7Y3VycmVudFBhZ2V9XCIsIFN0cmluZyh0aGlzLmdldFBhZ2UoKSArIDEpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwie3RvdGFsUGFnZXN9XCIsIFN0cmluZyh0aGlzLmdldFBhZ2VDb3VudCgpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIntmaXJzdH1cIiwgU3RyaW5nKCh0aGlzLnRvdGFsUmVjb3JkcyA+IDApID8gdGhpcy5fZmlyc3QgKyAxIDogMCkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ7bGFzdH1cIiwgU3RyaW5nKE1hdGgubWluKHRoaXMuX2ZpcnN0ICsgdGhpcy5yb3dzLCB0aGlzLnRvdGFsUmVjb3JkcykpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwie3Jvd3N9XCIsIFN0cmluZyh0aGlzLnJvd3MpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwie3RvdGFsUmVjb3Jkc31cIiwgU3RyaW5nKHRoaXMudG90YWxSZWNvcmRzKSk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsRHJvcGRvd25Nb2R1bGUsRm9ybXNNb2R1bGUsU2hhcmVkTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1BhZ2luYXRvcixEcm9wZG93bk1vZHVsZSxGb3Jtc01vZHVsZSxTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1BhZ2luYXRvcl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yTW9kdWxlIHsgfVxuIl19