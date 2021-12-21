import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import * as S3 from "aws-sdk/clients/s3";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { Contact } from "src/app/interfaces/contact";


@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contact: Contact;
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
    this.contact = new Contact();

    this.id = this.route.snapshot.params["id"];
    this.DataService.getContact(this.id).subscribe(
      (data) => {
        console.log(data);
        this.contact = data;
      },
      (error) => console.log(error)
    );

  }


  onSubmit() {
    this.DataService.updateContact(this.contact).subscribe(
      (data) => {
        console.log(data);
        this.contact = new Contact();
        this.addToast({
          title: "Success",
          msg: "Annonces a été modifié avec succès",
          timeout: 2000,
          theme: "default",
          position: "bottom-right",
          type: "success",
        });

        this.router.navigate(["list-contact"]);
      },
      (error) => console.log(error)
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
