import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  MenuEnum,
} from 'src/app/admin/shared/admin.constants/admin.constants.enum';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/shared/classes/material.service';

import { AdminPositionsService } from '../../services/admin-positions.service';
import { AdminPositionInterface } from '../../types/admin-positions.interface';

@Component({
  selector: 'app-admin-positions',
  templateUrl: './admin-positions.component.html',
  styleUrls: ['./admin-positions.component.css'],
})
export class AdminPositionsComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef | undefined;
  @Input('categoryId') categoryId: string | undefined;
  @ViewChild('modal') modalRef: ElementRef | undefined;

  positions: AdminPositionInterface[] = [];

  image: File | undefined;
  imagePreview: string | ArrayBuffer | undefined = '';
  imageFiles: string[] = [];
  loading = false;
  isNew = true;
  positionId: any = null;
  position: AdminPositionInterface | undefined;
  modal: MaterialInstance | undefined;
  positionSub$: Subscription | undefined;
  addSub$: Subscription | undefined;

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    cost: new FormControl(1, [Validators.required, Validators.min(1)]),
    description: new FormControl(null, Validators.required),
    quantity: new FormControl(null, Validators.required),
    inputCost: new FormControl(null, Validators.required),
    promoCost: new FormControl(null, Validators.required),
    brand: new FormControl(null, Validators.required),
  });

  constructor(
    private positionsService: AdminPositionsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.positionSub$ = this.positionsService
      .fetch(this.categoryId)
      .subscribe((positions) => {
        this.positions = positions;
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.modal!.destroy();
    this.positionSub$?.unsubscribe();
    this.addSub$?.unsubscribe();
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef!);
  }

  triggerClick() {
    this.inputRef?.nativeElement.click();
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  onSelectPosition(position: AdminPositionInterface) {
    this.positionId = position._id;
    this.isNew = false;
    this.form.patchValue({
      name: position.name,
      description: position.description,
      cost: position.cost,
      quantity: position.quantity,
      inputCost: position.inputCost,
      promoCost: position.promoCost,
      brand: position.brand,
    });
    this.imagePreview = position.imageSrc;
    this.modal?.open();
    MaterialService.updateTextInputs();
  }

  resetForm() {
    this.form.reset({
      name: null,
      description: null,
      cost: 1,
      quantity: 1,
      inputCost: 1,
      promoCost: 1,
      imageSrc: null,
      brand: null,
    });
  }

  completed = () => {
    this.modal!.close();
    this.resetForm();
    this.form.enable();
    this.imagePreview = '';
  };

  onAddPosition() {
    this.isNew = true;
    this.positionId = null;
    this.resetForm();
    this.imagePreview = '';
    this.modal?.open();
    MaterialService.updateTextInputs();
  }

  onDeletePosition(event: Event, position: AdminPositionInterface) {
    event.stopPropagation();
    const decision = window.confirm(`Удалить позицию "${position.name}"?`);
    if (decision) {
      this.positionSub$ = this.positionsService.delete(position).subscribe(
        (response) => {
          const idx = this.positions.findIndex((p) => p._id === position._id);
          this.positions.splice(idx, 1);
          MaterialService.toast(response.message);
        },
        (error) => MaterialService.toast(error.error.message)
      );
    }
  }

  onCancel() {
    this.modal!.close();
  }
  onSubmit() {
    this.form.disable();

    const newPosition: AdminPositionInterface = {
      name: this.form.value.name,
      cost: this.form.value.cost,
      category: this.categoryId!,
      description: this.form.value.description,
      quantity: this.form.value.quantity,
      inputCost: this.form.value.inputCost,
      promoCost: this.form.value.promoCost,
      brand: this.form.value.brand,
      imageSrc: this.imagePreview as string,
      groupPages: MenuEnum.main,
    };
    let obs$;
    if (this.positionId) {
      newPosition._id = this.positionId;
      obs$ = this.positionsService.update(newPosition).pipe(
        map((position) => {
          newPosition._id = this.positionId;
          const idx = this.positions.findIndex((p) => p._id === position._id);
          this.positions[idx] = position;
          MaterialService.toast('Изменения сохранены');
        })
      );
    } else {
      obs$ = this.positionsService.create(newPosition, this.image).pipe(
        map((position) => {
          MaterialService.toast('Позиция создана');
          this.positions.push(position);
        })
      );
    }
    this.positionSub$ = obs$.subscribe(
      () => console.log(),
      (error) => {
        MaterialService.toast(error.error.message);
      },
      this.completed
    );
  }

  addToPromo(event: Event, position: AdminPositionInterface) {
    const newPosition: AdminPositionInterface = {
      name: position.name,
      cost: position.cost,
      category: this.categoryId!,
      description: position.description,
      quantity: position.quantity,
      inputCost: position.inputCost,
      promoCost: position.promoCost,
      brand: position.brand,
      imageSrc: position.imageSrc,
      _id: position._id,
      groupPages: MenuEnum.promo,
    };
    event.stopPropagation();
    const decision = window.confirm(`Добавить позицию в акции?`);
    if (decision) {
      this.addSub$ = this.positionsService.updateToPromo(newPosition).subscribe(
        () => {
          MaterialService.toast(
            `Позиция ${position.name} помещена в раздел Акции`
          );
        },
        (error) => {
          MaterialService.toast(error.error.message);
        },
        () => {
          this.reloadCurrentPage();
        }
      );
    }
  }

  reloadCurrentPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  get f() {
    return this.form.controls;
  }
}
