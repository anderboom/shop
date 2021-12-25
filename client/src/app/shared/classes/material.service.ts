import { ElementRef } from '@angular/core';

declare var M: any;

export interface MaterialInstance {
  open(): void;
  close(): void;
  destroy(): void;
  next(): void;
}

export interface MaterialDatepicker extends MaterialInstance {
  date?: Date;
}

export class MaterialService {
  static toast(message: string) {
    M.toast({ html: message });
  }

  static initializeFloatingButton(ref: ElementRef) {
    M.FloatingActionButton.init(ref.nativeElement);
  }

  static initializeDropdownButton(ref: ElementRef): MaterialInstance {
    return M.Dropdown.init(ref.nativeElement);
  }

  static initializeCarousel(ref: ElementRef): MaterialInstance {
    return M.Carousel.init(ref.nativeElement);
  }

  static updateTextInputs() {
    M.updateTextFields();
  }

  static initModal(ref: ElementRef): MaterialInstance {
    return M.Modal.init(ref.nativeElement);
  }

  static initTooltip(ref: ElementRef): MaterialInstance {
    return M.Tooltip.init(ref.nativeElement);
  }

  static initSidenav(ref: ElementRef): MaterialInstance {
    return M.Sidenav.init(ref.nativeElement);
  }

  static initSelect(ref: ElementRef) {
    M.FormSelect.init(ref.nativeElement);
  }

  static initDatepicker(
    ref: ElementRef,
    onClose: () => void
  ): MaterialDatepicker {
    return M.Datepicker.init(ref.nativeElement, {
      format: 'dd.mm.yyyy',
      showClearBtn: true,
      onClose,
    });
  }
}
