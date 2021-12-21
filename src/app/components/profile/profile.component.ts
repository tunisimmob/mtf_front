import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import * as S3 from "aws-sdk/clients/s3";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { ActivatedRoute, Router } from "@angular/router";
import { LoginRequest } from 'src/app/interfaces/loginRequest';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  id: number;
  testimage: string;
  position = "bottom-right";
  title: string;
  msg: string;
  showClose = true;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  closeOther = false;
  submitted = false;
  selectedFiles: FileList;
  users: User = new User();
  usern: User = new User();
  changpass: LoginRequest = new LoginRequest()

  changepass: FormGroup

  constructor(private tokenStorageService: TokenStorageService,
    private toastyService: ToastyService,
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,

  ) { }

  ngOnInit() {


    this.changepass = this.fb.group({
      
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.MatchPassword("password", "confirmPassword") })



    this.currentUser = this.tokenStorageService.getUser();
    console.log(this.currentUser)

    this.UserService.getuserbyid(this.currentUser.id).subscribe(
      (data) => {
        console.log(data);
        console.log(data.roles[0].name);

        this.usern = data;
        this.users.username = this.usern.username
        this.users.email = this.usern.email
        this.users.password = this.currentUser.accessToken
        this.users.tel = this.usern.tel
        this.users.fax = this.usern.fax
        this.users.logo = this.usern.logo
        this.users.id = this.currentUser.id
        // this.users.email = this.changpass.email
      },
      (error) => console.log(error)
    );
  }

  updateUser() {
    this.currentUser = this.tokenStorageService.getUser();

    this.UserService.updateUser(this.usern, this.currentUser.id).subscribe(
      (data) => {
        console.log(data);
        this.users = new User();
        this.addToast({
          title: "Success",
          msg: "Profile a été modifié avec succès",
          timeout: 2000,
          theme: "default",
          position: "bottom-right",
          type: "success",
        });

        // this.router.navigate(["/dashboard"]);
      },
      (error) => console.log(error)
    );
  }


  changerpassword() {

    let body = {
      email: this.usern.email,
      password: this.changepass.value.password
    }


    this.UserService.changepassword(body).subscribe(
      (data) => {
        console.log(data);
        this.changpass = new LoginRequest();
      });
      this.addToast({
        title: "Success",
        msg: "Votre mot de passe a été modifié avec succès",
        timeout: 2000,
        theme: "default",
        position: "bottom-right",
        type: "success",
      });
  }



  onSubmit() {
    this.updateUser();
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadFile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.upload();
  }

  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: "AKIAXVWFAUBHFUM7UQ24",
      secretAccessKey: "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",
      region: "eu-west-3",
    });
    const params = {
      Bucket: "tunisie-immob",
      Key: file.name,
      Body: file,
      ACL: "public-read",
      ContentType: contentType,
    };
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log("There was an error uploading your file: ", err);
        return false;
      }
      console.log("Successfully uploaded file.", data);
      console.log(data.Location);
      this.testimage = data.Location;
      // localStorage.removeItem("imageupdate");
      // localStorage.setItem("imageupdate", this.testimage);

      return true;
    });
    //for upload progress
    bucket
      .upload(params)
      .on("httpUploadProgress", function (evt) {
        console.log(evt.loaded + " of " + evt.total + " Bytes");
      })
      .send(function (err, data) {
        if (err) {
          console.log("There was an error uploading your file: ", err);
          return false;
        }
        console.log("Successfully uploaded file.", data);
        return true;
      });
  }




  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
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
      theme: options.theme
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
