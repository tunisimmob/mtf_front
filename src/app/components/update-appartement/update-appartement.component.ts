import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import * as S3 from "aws-sdk/clients/s3";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { Appartement } from "src/app/interfaces/appartement";
import { Projet } from "src/app/interfaces/projet";
import swal from 'sweetalert2';


@Component({
  selector: 'app-update-appartement',
  templateUrl: './update-appartement.component.html',
  styleUrls: ['./update-appartement.component.css']
})
export class UpdateAppartementComponent implements OnInit {
  id: number;
  appartement: Appartement;
  testimage: string;
  position = "bottom-right";
  title: string;
  msg: string;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  submitted = false;
  selectedFiles2: FileList;
  image_url = 'https://tunisie-immob.s3-eu-west-3.amazonaws.com/'
  image_url1: string
  image_url2: string
  photourl: string
  photourll: string;
  selectedFiles: FileList;
  imageUrls: [];
  fileInfos: Observable<any>;
  files: any = [];
  getimage: any;
  foo: string[] = [];

  projets: Observable<Projet[]>;
  projet: Projet = new Projet();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private DataService: DataService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {


    this.appartement = new Appartement();


    this.id = this.route.snapshot.params["id"];

    this.DataService.getAppartement(this.id).subscribe(
      (data) => {
        console.log(data);
        this.appartement = data;
      },
      (error) => console.log(error)
    );

    this.projets = this.DataService.getProjetList();

  }




  onSubmit() {
    this.DataService.updateAppartement(this.appartement).subscribe(
      (data) => {
        console.log(data);
        this.appartement = new Appartement();

        this.router.navigate(["list-appartement"]);
      },
      (error) => console.log(error)
    );
  }


  public getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }


  uploadimg1() {
    const file = this.selectedFiles.item(0);
    this.uploadFileimg1(file);
  }
  selectFileimg1(event) {
    this.selectedFiles = event.target.files;
    this.uploadimg1();
  }

  uploadFileimg1(file) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: 'AKIAXVWFAUBHPVQ7OO5C',
      secretAccessKey: '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',
      region: "eu-west-3",
    });
    const params = {
      Bucket: "tunisie-immob",
      Key: this.getRandomString(5) + file.name,
      Body: file,
      ACL: "public-read",
      ContentType: contentType,
    };
    this.getimage = bucket.upload(params, async function (err, data) {
      console.log(data)
      return data.location
    });
    this.image_url1 = this.getimage.singlePart.params.Key
    this.photourl = this.image_url.concat(this.image_url1);
    console.log(this.photourl)
    this.appartement.plan = this.photourl

    bucket.upload(params).on('httpUploadProgress', function (evt) {

      let progresss = Math.round(100 * evt.loaded / evt.total);
      let timerInterval
      swal.fire(
        {
          title: progresss + '%',
          timerProgressBar: true,
          didOpen: () => {
            swal.showLoading()
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })

    }).send(function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
      if (data) {
        console.log('Successfully uploaded file.', data);
        swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Votre photo a été ajouté avec succès',
        })
      }
      return true;
    });
  }



  uploadimg2() {
    const file = this.selectedFiles2.item(0);
    this.uploadFileimg2(file);
  }
  selectFileimg2(event) {
    this.selectedFiles2 = event.target.files;
    this.uploadimg2();
  }

  uploadFileimg2(file) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: 'AKIAXVWFAUBHPVQ7OO5C',
      secretAccessKey: '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',
      region: "eu-west-3",
    });
    const params = {
      Bucket: "tunisie-immob",
      Key: this.getRandomString(5) + file.name,
      Body: file,
      ACL: "public-read",
      ContentType: contentType,
    };
    this.getimage = bucket.upload(params, async function (err, data) {
      console.log(data)
      return data.location
    });
    this.image_url2 = this.getimage.singlePart.params.Key
    this.photourll = this.image_url.concat(this.image_url2);
    console.log(this.photourl)
    this.appartement.emplacement = this.photourll

    bucket.upload(params).on('httpUploadProgress', function (evt) {

      let progresss = Math.round(100 * evt.loaded / evt.total);
      let timerInterval
      swal.fire(
        {
          title: progresss + '%',
          timerProgressBar: true,
          didOpen: () => {
            swal.showLoading()
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })

    }).send(function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
      if (data) {
        console.log('Successfully uploaded file.', data);
        swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Votre photo a été ajouté avec succès',
        })
      }
      return true;
    });
  }

  // deletephoto(img: any) {
  //   this.id = this.route.snapshot.params["id"];
  //   this.DataService.getAppartement(this.id).subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.appartement = data;
  //       delete data.images[img];
  //       this.updateAppartementphoto()
  //     },
  //     (error) => console.log(error)
  //   );

  // }

  // updateAppartementphoto() {
  //   this.DataService.updateAppartement(this.appartement).subscribe(
  //     (data) => { console.log(data), this.router.navigate(["list-appartement"]); },

  //     (error) => console.log(error)
  //   );
  // }


  // public getRandomString(length) {
  //   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   var result = '';
  //   for (var i = 0; i < length; i++) {
  //     result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  //   }
  //   return result;
  // }

  // urls = new Array<string>();





  // public uploadFile(event) {
  //   for (let index = 0; index < event.length; index++) {
  //     const element = event[index];
  //     const contentType = event[index].type;
  //     const bucket = new S3({
  //       accessKeyId: "AKIAXVWFAUBHFUM7UQ24",
  //       secretAccessKey: "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",
  //       region: "eu-west-3",
  //     });
  //     const params = {
  //       Bucket: "tunisie-immob",
  //       Key: this.getRandomString(5) + event[index].name,
  //       Body: event[index],
  //       ACL: "public-read",
  //       ContentType: contentType,
  //     };
  //     this.getimage = bucket.upload(params, function (err, data) {
  //       return data.location
  //     });
  //     this.image_url1 = this.getimage.singlePart.params.Key
  //     this.photourl = this.image_url.concat(this.image_url1);
  //     this.appartement.images.push(this.photourl)
  //     this.files.push(element.name)
  //   }
  //   console.log(this.appartement.images)
  // }




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
