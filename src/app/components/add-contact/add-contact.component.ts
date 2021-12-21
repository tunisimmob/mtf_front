import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import * as S3 from "aws-sdk/clients/s3";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { Contact } from "src/app/interfaces/contact";
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact = new Contact();
  id: number;
  position = "bottom-right";
  title: string;
  msg: string;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  closeOther = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private DataService: DataService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {


  }


  onSubmit() {
    this.DataService.createContact(this.contact).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["list-contact"]);
      },
      (error) => { console.log(error); this.erreurajout("Vous pouvez pas créer plus qu'une seul information de contact") }
    );
    this.contact = new Contact();
  }

  erreurajout(err: any) {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err,
    })
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
