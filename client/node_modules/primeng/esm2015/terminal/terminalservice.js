import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class TerminalService {
    constructor() {
        this.commandSource = new Subject();
        this.responseSource = new Subject();
        this.commandHandler = this.commandSource.asObservable();
        this.responseHandler = this.responseSource.asObservable();
    }
    sendCommand(command) {
        if (command) {
            this.commandSource.next(command);
        }
    }
    sendResponse(response) {
        if (response) {
            this.responseSource.next(response);
        }
    }
}
TerminalService.ɵfac = function TerminalService_Factory(t) { return new (t || TerminalService)(); };
TerminalService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TerminalService, factory: TerminalService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TerminalService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYWxzZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvdGVybWluYWwvdGVybWluYWxzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHL0IsTUFBTSxPQUFPLGVBQWU7QUFDNUIsSUFGQTtBQUNFLFFBRVUsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0FBQ2xELFFBQVksbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0FBQ25ELFFBQ0ksbUJBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3ZELFFBQUksb0JBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3pELElBWUEsQ0FBQztBQUFDLElBWEUsV0FBVyxDQUFDLE9BQWU7QUFDL0IsUUFBUSxJQUFJLE9BQU8sRUFBRTtBQUNyQixZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLFlBQVksQ0FBQyxRQUFnQjtBQUNqQyxRQUFRLElBQUksUUFBUSxFQUFFO0FBQ3RCLFlBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0MsU0FBUztBQUNULElBQUksQ0FBQztBQUNMOzJDQXBCQyxVQUFVOzs7O2dEQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZXJtaW5hbFNlcnZpY2Uge1xuICAgIFxuICAgIHByaXZhdGUgY29tbWFuZFNvdXJjZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgICBwcml2YXRlIHJlc3BvbnNlU291cmNlID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIFxuICAgIGNvbW1hbmRIYW5kbGVyID0gdGhpcy5jb21tYW5kU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHJlc3BvbnNlSGFuZGxlciA9IHRoaXMucmVzcG9uc2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgXG4gICAgc2VuZENvbW1hbmQoY29tbWFuZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRTb3VyY2UubmV4dChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZW5kUmVzcG9uc2UocmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VTb3VyY2UubmV4dChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19