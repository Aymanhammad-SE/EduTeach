import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl(),
    options: new FormControl()
  });
  repass() {
    if (this.registerForm.controls['password'].value == this.registerForm.controls['repassword'].value)
      this.registerForm.controls['repassword'].setErrors(null);
    else
      this.registerForm.controls['repassword'].setErrors({ missmatch: true });
  }
  constructor(private route: Router) {
    this.submit()
    {
      
    }
    

  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.registerForm.value);

  }
  goToLOgin() {
    this.route.navigate(['security/login']);
  }

}
