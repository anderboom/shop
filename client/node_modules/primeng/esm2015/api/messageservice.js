import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class MessageService {
    constructor() {
        this.messageSource = new Subject();
        this.clearSource = new Subject();
        this.messageObserver = this.messageSource.asObservable();
        this.clearObserver = this.clearSource.asObservable();
    }
    add(message) {
        if (message) {
            this.messageSource.next(message);
        }
    }
    addAll(messages) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    }
    clear(key) {
        this.clearSource.next(key || null);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: MessageService, factory: MessageService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MessageService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvbWVzc2FnZXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUkvQixNQUFNLE9BQU8sY0FBYztBQUMzQixJQUZBO0FBQ0UsUUFFVSxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFxQixDQUFDO0FBQzdELFFBQVksZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0FBQ2hELFFBQ0ksb0JBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3hELFFBQUksa0JBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3BELElBaUJBLENBQUM7QUFBQyxJQWhCRSxHQUFHLENBQUMsT0FBZ0I7QUFDeEIsUUFBUSxJQUFJLE9BQU8sRUFBRTtBQUNyQixZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLE1BQU0sQ0FBQyxRQUFtQjtBQUM5QixRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDekMsWUFBWSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxTQUFTO0FBQUMsSUFDTixDQUFDO0FBQ0wsSUFDSSxLQUFLLENBQUMsR0FBWTtBQUN0QixRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7QUFDTDswQ0F4QkMsVUFBVTs7OztnREFDVDtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gICAgXG4gICAgcHJpdmF0ZSBtZXNzYWdlU291cmNlID0gbmV3IFN1YmplY3Q8TWVzc2FnZXxNZXNzYWdlW10+KCk7XG4gICAgcHJpdmF0ZSBjbGVhclNvdXJjZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgICBcbiAgICBtZXNzYWdlT2JzZXJ2ZXIgPSB0aGlzLm1lc3NhZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgY2xlYXJPYnNlcnZlciA9IHRoaXMuY2xlYXJTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgXG4gICAgYWRkKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNvdXJjZS5uZXh0KG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFkZEFsbChtZXNzYWdlczogTWVzc2FnZVtdKSB7XG4gICAgICAgIGlmIChtZXNzYWdlcyAmJiBtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNvdXJjZS5uZXh0KG1lc3NhZ2VzKTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgXG4gICAgY2xlYXIoa2V5Pzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTb3VyY2UubmV4dChrZXl8fG51bGwpO1xuICAgIH1cbiAgICBcbn0iXX0=