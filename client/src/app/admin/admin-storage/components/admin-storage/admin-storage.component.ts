import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { AdminStorageService } from '../../services/admin-storage.service';
import { StorageCategoryInterface } from '../../types/admin-storage.interface';

@Component({
  selector: 'app-admin-storage',
  templateUrl: './admin-storage.component.html',
  styleUrls: ['./admin-storage.component.css'],
})
export class AdminStorageComponent implements OnInit {
  storageCategories$: Observable<StorageCategoryInterface[]> | undefined;

  constructor(private storageService: AdminStorageService) {}

  ngOnInit(): void {
    this.storageCategories$ = this.storageService.fetchCategories();
  }
}
