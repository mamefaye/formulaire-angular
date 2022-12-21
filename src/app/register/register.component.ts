import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public user: User = new User();

  public saveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeur', JSON.stringify(registerForm.value));
    console.log('Hello');
  }
}
