import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  Observable,
  Subscription,
} from 'rxjs';
import { MaterialService } from 'src/app/shared/classes/material.service';

import { AdminUsersService } from '../../services/admin-users.service';
import { AdminUserInterface } from '../../types/admin.users.interface';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit, OnDestroy {
  users$: Observable<AdminUserInterface[]> | undefined;
  users: AdminUserInterface[] | undefined;
  usersSub$: Subscription | undefined;
  loading = false;

  constructor(private userService: AdminUsersService) {}

  ngOnInit(): void {
    this.loading = true;
    this.usersSub$ = this.userService.fetchUsers().subscribe((users) => {
      this.users = users;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.usersSub$?.unsubscribe();
  }

  onDeleteUser(event: Event, user: AdminUserInterface) {
    event.stopPropagation();
    const decision = window.confirm(`Удалить пользователя?`);
    if (decision) {
      this.userService.deleteUser(user).subscribe(
        (response) => {
          const idx = this.users!.findIndex((u) => u._id === user._id);
          this.users!.splice(idx, 1);
          MaterialService.toast(response.message);
        },
        (error) => MaterialService.toast(error.error.message)
      );
    }
  }
}
