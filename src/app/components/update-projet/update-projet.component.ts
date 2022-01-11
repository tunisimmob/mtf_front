import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { UploadService } from "src/app/services/upload.service";
import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Observable } from 'rxjs';
import { HttpResponse } from 'aws-sdk';
import { UserService } from 'src/app/services/user.service';
import { Projet } from 'src/app/interfaces/projet';
import { Video } from 'src/app/interfaces/video';
import swal from 'sweetalert2';


@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {

  currentUser: any;
  position = "bottom-right";
  title: string;
  msg: string;
  showClose = true;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  closeOther = false;
  projet: Projet;
  submitted = false;
  selectedFiles: FileList;
  selectedFiles2: FileList;

  message = '';
  imageUrls: [];
  fileInfos: Observable<any>;
  files: any = [];
  files2: any = [];
  getimage: any;
  foo: string[] = [];
  image_url = 'https://tunisie-immob.s3-eu-west-3.amazonaws.com/'
  image_urll = 'https://tunisie-immob.s3-eu-west-3.amazonaws.com/'

  image_url1: string
  photourl: string
  photourll: string;
  id: number;


  image_url2: string
  photourl2: string
  photourl22: string
  appartements: FormGroup;
  videos: Observable<Video[]>;
  countencours: any;


  constructor(
    private DataService: DataService, private router: Router, private route: ActivatedRoute

  ) { }



  ngOnInit() {

    this.projet = new Projet();

    this.id = this.route.snapshot.params["id"];
    this.DataService.getProjet(this.id).subscribe(
      (data) => {
        console.log(data);
        this.projet = data;
      },
      (error) => console.log(error)
    );


    this.videos = this.DataService.getVideoList();
    this.DataService.getnumberofencours().subscribe((data) => {
      this.countencours = data, console.log(this.countencours),
        localStorage.setItem('encours', data.toString())
    })

  }


  // test() {
  //   this.DataService.getnumberofencours().subscribe((data) => {
  //     this.countencours = data, console.log(this.countencours)
  //     return data
  //   })
  // }



  async onSubmit() {

    if (this.projet.etat == 'en_cours' && this.countencours >= 1) {
      this.erreurajout("Vous pouvez pas créer plus qu'un seul projet en cours")
    }

    else {
    this.DataService.updateProjet(this.projet).subscribe(
      (data) => {
        console.log(data), this.projet = new Projet();
        this.router.navigate(["list-projet"]);
      },
      (error) => { console.log(error) }
    );
  }

  }


  erreurajout(err: any) {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err,
    })
  }


  deletephoto1(img: any) {
    this.id = this.route.snapshot.params["id"];
    this.DataService.getProjet(this.id).subscribe(
      (data) => {
        console.log(data);
        this.projet = data;
        delete data.images_exterieur[img];
        this.updateAppartementphoto()
      },
      (error) => console.log(error)
    );

  }


  deletephoto2(img: any) {
    this.id = this.route.snapshot.params["id"];
    this.DataService.getProjet(this.id).subscribe(
      (data) => {
        console.log(data);
        this.projet = data;
        delete data.images_interieur[img];
        this.updateAppartementphoto()
      },
      (error) => console.log(error)
    );

  }

  updateAppartementphoto() {
    this.DataService.updateProjet(this.projet).subscribe(
      (data) => { console.log(data), this.ngOnInit() },

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



  public uploadImageExt(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      const contentType = event[index].type;
      const bucket = new S3({
        accessKeyId: 'AKIAXVWFAUBHPVQ7OO5C',
        secretAccessKey: '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',
        region: "eu-west-3",
      });
      const params = {
        Bucket: "tunisie-immob",
        Key: this.getRandomString(5) + event[index].name,
        Body: event[index],
        ACL: "public-read",
        ContentType: contentType,
      };
      this.getimage = bucket.upload(params, function (err, data) {
        return data.location
      });
      this.image_url1 = this.getimage.singlePart.params.Key
      this.photourl = this.image_url.concat(this.image_url1);
      this.projet.images_exterieur.push(this.photourl)
      this.files.push(element.name)

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
    console.log(this.projet.images_exterieur)
  }



  public uploadImageInt(events) {
    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      const contentType = events[index].type;
      const bucket = new S3({
        accessKeyId: 'AKIAXVWFAUBHPVQ7OO5C',
        secretAccessKey: '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',
        region: "eu-west-3",
      });
      const params = {
        Bucket: "tunisie-immob",
        Key: this.getRandomString(5) + events[index].name,
        Body: events[index],
        ACL: "public-read",
        ContentType: contentType,
      };
      this.getimage = bucket.upload(params, function (err, data) {
        return data.location
      });
      this.image_url2 = this.getimage.singlePart.params.Key
      this.photourl2 = this.image_urll.concat(this.image_url2);
      this.projet.images_interieur.push(this.photourl2)
      this.files2.push(element.name)

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
    console.log(this.projet.images_interieur)


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
    this.projet.image_de_couverture = this.photourl

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
    this.projet.situation = this.photourll

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

}
