import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class ConfirmationService {
    constructor() {
        this.requireConfirmationSource = new Subject();
        this.acceptConfirmationSource = new Subject();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
    }
    confirm(confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    }
    close() {
        this.requireConfirmationSource.next(null);
        return this;
    }
    onAccept() {
        this.acceptConfirmationSource.next();
    }
}
ConfirmationService.ɵfac = function ConfirmationService_Factory(t) { return new (t || ConfirmationService)(); };
ConfirmationService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ConfirmationService, factory: ConfirmationService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmationService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9jb25maXJtYXRpb25zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJL0IsTUFBTSxPQUFPLG1CQUFtQjtBQUNoQyxJQUZBO0FBQ0UsUUFFVSw4QkFBeUIsR0FBRyxJQUFJLE9BQU8sRUFBZ0IsQ0FBQztBQUNwRSxRQUFZLDZCQUF3QixHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO0FBQ25FLFFBQ0kseUJBQW9CLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3pFLFFBQUksV0FBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMxRCxJQWNBLENBQUM7QUFBQyxJQWJFLE9BQU8sQ0FBQyxZQUEwQjtBQUN0QyxRQUFRLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUQsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixJQUFJLENBQUM7QUFDTCxJQUNJLEtBQUs7QUFDVCxRQUFRLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixJQUFJLENBQUM7QUFDTCxJQUNJLFFBQVE7QUFDWixRQUFRLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QyxJQUFJLENBQUM7QUFDTDsrQ0F0QkMsVUFBVTs7OztnREFDVDtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uIH0gZnJvbSAnLi9jb25maXJtYXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHJlcXVpcmVDb25maXJtYXRpb25Tb3VyY2UgPSBuZXcgU3ViamVjdDxDb25maXJtYXRpb24+KCk7XG4gICAgcHJpdmF0ZSBhY2NlcHRDb25maXJtYXRpb25Tb3VyY2UgPSBuZXcgU3ViamVjdDxDb25maXJtYXRpb24+KCk7XG5cbiAgICByZXF1aXJlQ29uZmlybWF0aW9uJCA9IHRoaXMucmVxdWlyZUNvbmZpcm1hdGlvblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICBhY2NlcHQgPSB0aGlzLmFjY2VwdENvbmZpcm1hdGlvblNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbmZpcm0oY29uZmlybWF0aW9uOiBDb25maXJtYXRpb24pIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlQ29uZmlybWF0aW9uU291cmNlLm5leHQoY29uZmlybWF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZUNvbmZpcm1hdGlvblNvdXJjZS5uZXh0KG51bGwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkFjY2VwdCgpIHtcbiAgICAgICAgdGhpcy5hY2NlcHRDb25maXJtYXRpb25Tb3VyY2UubmV4dCgpO1xuICAgIH1cbn0iXX0=