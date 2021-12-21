import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {
  position = "bottom-right";
  title: string;
  msg: string;
  showClose = true;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  closeOther = false;
  submitted = false;

  username: string;
  password: string;

  email: string;
  role: any;

  registerform = this.formBuilder.group({
    register_username: ["", Validators.required],
    register_email: ["", (Validators.required, Validators.email)],
    register_password: ["", (Validators.required, Validators.minLength(6))],
    register_confirmpassword: ["", (Validators.required)],
    register_role: new FormControl(["com"], (Validators.required)),
  },
    {
      validator: this.MustMatch("register_password", "register_confirmpassword")
    }
  );


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  saveRegister(saveRegister) {
    this.username = this.RegisterUsername.value;
    this.password = this.RegisterPassword.value;
    this.email = this.RegisterEmail.value;
    this.role = this.RegisterRole.value;

    // this.role = ['com'];
    this.submitted = true;
    this.onSubmit();
    this.registerform.reset();
  }

  get RegisterUsername() {
    return this.registerform.get("register_username");
  }

  get RegisterEmail() {
    return this.registerform.get("register_email");
  }

  get RegisterPassword() {
    return this.registerform.get("register_password");
  }

  get RegisterPasswordConfirm() {
    return this.registerform.get("register_confirmpassword");
  }


  get RegisterRole() {
    return this.registerform.get("register_role");
  }


  get RegisterRoles() {
    return this.role = ["com"]
  }




  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private toastyService: ToastyService, private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  onSubmit(): void {
    this.registerform;

    this.authService.register(this.RegisterUsername.value, this.RegisterEmail.value, this.RegisterPassword.value, this.RegisterRoles).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(err);
        if (err.error.text == "Registration Successful") {
          this.addToast({
            title: "Success",
            msg: "User registered successfully",
            timeout: 2000,
            theme: "default",
            position: "top-center",
            type: "success",
          });
          this.isSignUpFailed = true;
        }

        else {
          this.addToast({
            title: "Erreur",
            msg: err.error.message,
            timeout: 2000,
            theme: "default",
            position: "top-center",
            type: "error",
          });
        }







      }


    );
  }
  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
      },
      onRemove: (toast: ToastData) => {
      },
    };

    switch (options.type) {
      case "default":
        this.toastyService.default(toastOptions);
        break;
      case "info":
        this.toastyService.info(toastOptions);
        break;
      case "success":
        this.toastyService.success(toastOptions);
        break;
      case "wait":
        this.toastyService.wait(toastOptions);
        break;
      case "error":
        this.toastyService.error(toastOptions);
        break;
      case "warning":
        this.toastyService.warning(toastOptions);
        break;
    }
  }
}
