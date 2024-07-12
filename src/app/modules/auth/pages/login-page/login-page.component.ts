import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSesion: boolean = false;
  sesionOk: boolean = false;
  constructor(private asAuthService: AuthService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.asAuthService
      .sendCredencials(email, password)
      .toPromise()
      .then((response) => {
        this.errorSesion = false;
        this.sesionOk= true;
        console.log('TODO OK', response)
      })
      .catch((err) => {
        this.errorSesion = true;
        this.sesionOk= false;
        console.log('HUBO ERROR', err)
      });
  }
}
