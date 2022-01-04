import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MaterialService } from 'src/app/shared/classes/material.service';

import { AuthService } from '../../services/auth.service';
import { ProfileInterface } from '../../types/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy, AfterViewInit {
  public formDisabled = true;
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    phoneNumber: new FormControl(null, Validators.required),
    email: new FormControl(
      { value: '', disabled: this.formDisabled },
      Validators.required
    ),
    deliveryName: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
  });

  email = '';
  userId: any;
  profiles: ProfileInterface[] | undefined;
  isFilled = false;
  profile: ProfileInterface | undefined;
  pSub$: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.email = JSON.parse(localStorage.getItem('email') || '');
    this.pSub$ = this.authService
      .fetchProfileByEmail()
      .pipe(
        map((profiles) => {
          this.profiles = profiles;
          this.profile = this.profiles.find(
            (profile) => profile.email === this.email
          );
          if (this.profile) {
            this.fillForm(this.profile);
            this.userId = this.profile._id;
          }
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.pSub$?.unsubscribe();
  }

  fillForm(profile: ProfileInterface) {
    this.isFilled = true;
    this.form.patchValue({
      firstName: profile.firstName,
      secondName: profile.secondName,
      phoneNumber: profile.phoneNumber,
      email: profile.email,
      deliveryName: profile.deliveryName,
      area: profile.area,
      city: profile.city,
      department: profile.department,
    });
    MaterialService.updateTextInputs();
  }

  onSubmit() {
    this.form.disable();
    const newProfile: ProfileInterface = {
      firstName: this.form.value.firstName,
      secondName: this.form.value.secondName,
      phoneNumber: this.form.value.phoneNumber,
      deliveryName: this.form.value.deliveryName,
      area: this.form.value.area,
      city: this.form.value.city,
      department: this.form.value.department,
      isFilledProfile: true,
      _id: this.userId,
    };
    this.authService.updateProfile(newProfile).subscribe(
      () => MaterialService.toast('Зміни збережено'),
      (error) => {
        MaterialService.toast(error.error.message);
        this.form.enable();
      },
      () => this.reloadCurrentPage()
    );
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
