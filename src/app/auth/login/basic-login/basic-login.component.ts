import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { TokenStorageService } from "../../../services/token-storage.service";
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-basic-login",
  templateUrl: "./basic-login.component.html",
  styleUrls: ["./basic-login.component.scss"],
})
export class BasicLoginComponent implements OnInit {

  position = "bottom-right";
  title: string;
  msg: string;
  showClose = true;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  closeOther = false;
  submitted = false;
  email: string;
  password: string;

  loginform = this.formBuilder.group({
    login_email: ["", (Validators.required, Validators.email)],
    login_password: ["", (Validators.required, Validators.minLength(6))],
  });

  saveLogin(saveLogin) {
    this.email = this.LoginEmail.value;
    this.password = this.LoginPassword.value;
    this.onSubmit();
  }

  get LoginEmail() {
    return this.loginform.get("login_email");
  }

  get LoginPassword() {
    return this.loginform.get("login_password");
  }


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    public router: Router,
    private toastyService: ToastyService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    document.querySelector("body").setAttribute("themebg-pattern", "theme1");
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.loginform;
    this.authService.login(this.LoginEmail.value, this.LoginPassword.value).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        localStorage.setItem('role', this.tokenStorage.getUser().roles)

        if (this.tokenStorage.getUser().roles == 'ROLE_USERS' || this.tokenStorage.getUser().roles == 'ROLE_GERANT') {
          this.addToast({
            title: "Erreur",
            msg: 'Email ou Mot de passe incorrect',
            timeout: 2000,
            theme: "default",
            position: "top-center",
            type: "error",
          });
          this.tokenStorage.signOut();
          this.isLoginFailed = true;


        }
        else {
          this.router.navigate(['dashboard']);
        }
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.addToast({
          title: "Erreur",
          msg: err.error.message,
          timeout: 2000,
          theme: "default",
          position: "top-center",
          type: "error",
        });
        this.isLoginFailed = true;
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
