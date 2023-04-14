import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmedValidator} from "../../validators/ConfirmedValidator";

interface ParamsData {
  token: string;
  email: string;
  passReset: boolean;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public params: ParamsData | undefined;
  public submitted: boolean = false;
  public hasResetPassword: boolean = false;
  form: FormGroup = new FormGroup<any>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.queryParams.subscribe((qParams: any) => {
      console.log('Object(qParams).keys   ', Object.keys(qParams));
      if (Object.keys(qParams).length > 0) {
        this.params = qParams as ParamsData;
      }
    });
    this.hasResetPassword = !!(this.params?.passReset);
    console.log('Params   ', this.params);
  }

  public sendLink(): void {
    this.submitted = true;
    if (!this.params) {
      // password reset flow starts
      this.form.get('password')?.clearValidators();
      this.form.get('confirmPassword')?.clearValidators();
    } else if (this.params?.passReset) {
      // Password Reset flow mail redirect
      this.form.get('email')?.clearValidators();
    } else {
      // User Activation flow
      this.form.get('email')?.clearValidators();
    }
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      // make api call from here
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [{value: '', disabled: this.params}, [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });

    if (this.params?.email) {
      this.f['email'].setValue(this.params?.email)
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


}
