import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // public input = 'mmm';

  public user: User = new User();

  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      sendCatalog: false
    });
  }

  public saveData() {
    console.log(this.registerForm);
    console.log('valeur', JSON.stringify(this.registerForm.value));
    console.log('Hello');
  }

  public fillFormData() {
    this.registerForm.patchValue({
      firstName: 'Mame',
      lastName: 'Faye',
      sendCatalog: true
    });
  }
}
