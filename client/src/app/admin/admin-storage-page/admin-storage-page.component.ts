import {
  Component,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../shared/interfaces';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-admin-storage-page',
  templateUrl: './admin-storage-page.component.html',
  styleUrls: ['./admin-storage-page.component.css']
})
export class AdminStoragePageComponent implements OnInit {

  categories$: Observable<Category[]> | undefined
  
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
     this.categories$ = this.categoriesService.fetch()
  }


}
