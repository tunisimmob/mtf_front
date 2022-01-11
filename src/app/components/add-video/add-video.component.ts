import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import * as S3 from "aws-sdk/clients/s3";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { NgxSpinnerService } from "ngx-spinner";
import { Video } from "src/app/interfaces/video";
import swal from 'sweetalert2';
import { Projet } from "src/app/interfaces/projet";

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  id: number;
  testimage: string;
  position = "bottom-right";
  title: string;
  msg: string;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  closeOther = false;
  submitted = false;
  selectedFiles: FileList;
  selectedFiles2: FileList;
  files: any = [];
  getimage: any;
  image_url = 'https://tunisie-immob.s3-eu-west-3.amazonaws.com/'
  image_url1: string
  image_url2: string
  photourl: string
  photourll: string;
  progress = 0;
  message = '';
  projets: Observable<Projet[]>;
  projet: Projet = new Projet();
  video: Video = new Video();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private DataService: DataService,
    private toastyService: ToastyService,
  ) { }

  ngOnInit() {
    localStorage.removeItem('video')

    this.projets = this.DataService.getProjetList();

  }


  async onSubmit() {


    this.photourl = localStorage.getItem('video')
    this.video.video = this.photourl;

    this.DataService.createVideo(this.video)
      .subscribe(data => {
        console.log(data), this.router.navigate(['list-video']);
      }, error => console.log(error));

    this.video = new Video();

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

  async uploadFileimg1(file) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: 'AKIAXVWFAUBHPVQ7OO5C',
      secretAccessKey: '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',
      region: "eu-west-3",
    });
    const params = {
      Bucket: "tunisie-immob/videos",
      Key: this.getRandomString(5) + file.name,
      Body: file,
      ACL: "public-read",
      ContentType: contentType,
    };


    this.getimage = bucket.upload(params, function (err, data) {
      console.log(data.Location)
      // this.video.video = this.data.location
      localStorage.setItem('video', data.Location)
      return true
    });



    console.log(this.photourl)


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
          text: 'Votre video a été ajouté avec succès',
        })
      }
      return true;
    });


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
