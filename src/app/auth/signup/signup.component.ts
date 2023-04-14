import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../app.interface";
import {DaycareService} from "../../service/daycare.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private dayCareService: DaycareService) {
  }

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('')
  });

  public createAccount(): void {
    if (this.form.valid) {
      const user: User | null | undefined = this.form.value as User;
      this.dayCareService.post('signup', user).subscribe(res => {
        console.log('Response ', res);
      })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
