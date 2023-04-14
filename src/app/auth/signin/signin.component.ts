import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {DaycareService} from "../../service/daycare.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private dayCareService: DaycareService) {
  }

  form: FormGroup = new FormGroup<any>({
    usernameOrEmail: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required])
  });

  public loginUser(): void {
    if (this.form.valid) {
      this.dayCareService.post('auth/signin', this.form.value).subscribe((res: string) => {
        console.log('Login Response is   ', res);
      });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
