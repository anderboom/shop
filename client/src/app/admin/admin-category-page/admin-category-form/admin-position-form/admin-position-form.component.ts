import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  MaterialInstance,
  MaterialService,
} from 'src/app/admin/shared/classes/material.service';
import { Position } from 'src/app/admin/shared/interfaces';
import {
  AdminPositionsService,
} from 'src/app/admin/shared/services/admin-positions.service';

@Component({
  selector: 'app-admin-position-form',
  templateUrl: './admin-position-form.component.html',
  styleUrls: ['./admin-position-form.component.css'],
})
export class AdminPositionFormComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('input') inputRef: ElementRef | undefined;
  @Input('categoryId') categoryId: string | undefined;
  @ViewChild('modal') modalRef: ElementRef | undefined;

  positions: Position[] = [];
  image: File | undefined;
  imagePreview: string | ArrayBuffer | undefined = '';
  imageFiles: string[] = [];
  loading = false;
  isNew = true;
  positionId: any = null;
  modal: MaterialInstance | undefined;

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    cost: new FormControl(1, [Validators.required, Validators.min(1)]),
    description: new FormControl(null, Validators.required),
    quantity: new FormControl(null, Validators.required),
    inputCost: new FormControl(null, Validators.required),
    brand: new FormControl(null, Validators.required),
  });

  constructor(private positionsService: AdminPositionsService) {}

  ngOnInit() {
    this.loading = true;
    this.positionsService.fetch(this.categoryId).subscribe((positions) => {
      this.positions = positions;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.modal!.destroy();
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

  onSelectPosition(position: Position) {
    this.positionId = position._id;
    this.isNew = false;
    this.form.patchValue({
      name: position.name,
      description: position.description,
      cost: position.cost,
      quantity: position.quantity,
      inputCost: position.inputCost,
      brand: position.brand,
    });
    this.imagePreview = position.imageSrc;
    this.modal?.open();
    MaterialService.updateTextInputs();
  }

  onAddPosition() {
    this.isNew = true;
    this.positionId = null;
    this.form.reset({
      name: null,
      description: null,
      cost: 1,
      quantity: 1,
      inputCost: 1,
      imageSrc: null,
      brand: null,
    });
    this.imagePreview = '';
    this.modal?.open();
    MaterialService.updateTextInputs();
  }

  onDeletePosition(event: Event, position: Position) {
    event.stopPropagation();
    const decision = window.confirm(`Удалить позицию "${position.name}"?`);
    if (decision) {
      this.positionsService.delete(position).subscribe(
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

    const newPosition: Position = {
      name: this.form.value.name,
      cost: this.form.value.cost,
      category: this.categoryId!,
      description: this.form.value.description,
      quantity: this.form.value.quantity,
      inputCost: this.form.value.inputCost,
      brand: this.form.value.brand,
      imageSrc: this.imagePreview as string,
    };

    const completed = () => {
      this.modal!.close();
      this.form.reset({
        name: '',
        cost: 1,
        description: '',
        quantity: 1,
        inputCost: 1,
        imageSrc: '',
        brand: '',
      });
      this.form.enable();
      this.imagePreview = '';
    };

    if (this.positionId) {
      newPosition._id = this.positionId;
      this.positionsService.update(newPosition).subscribe(
        (position) => {
          const idx = this.positions.findIndex((p) => p._id === position._id);
          this.positions[idx] = position;
          MaterialService.toast('Изменения сохранены');
        },
        (error) => {
          console.log(error);
          MaterialService.toast(error.error.message);
        },
        completed
      );
    } else {
      this.positionsService.create(newPosition, this.image).subscribe(
        (position) => {
          MaterialService.toast('Позиция создана');
          this.positions.push(position);
        },
        (error) => {
          MaterialService.toast(error.error.message);
        },
        completed
      );
    }
  }

  get f() {
    return this.form.controls;
  }
}
