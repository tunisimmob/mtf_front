import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { UploadService } from "src/app/services/upload.service";
import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Observable } from 'rxjs';
import { HttpResponse } from 'aws-sdk';
import { UserService } from 'src/app/services/user.service';
import { Appartement } from 'src/app/interfaces/appartement';
import { Projet } from 'src/app/interfaces/projet';


@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent implements OnInit {
  currentUser: any;
  position = "bottom-right";
  title: string;
  msg: string;
  showClose = true;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  closeOther = false;
  appartement: Appartement = new Appartement();
  submitted = false;

  message = '';
  appartements: FormGroup;
  projets: Observable<Projet[]>;
  projet: Projet = new Projet();
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

  constructor(
    private DataService: DataService, private router: Router,

  ) { }



  ngOnInit() {
    this.projets = this.DataService.getProjetList();

  }


  async onSubmit() {
    this.DataService.createAppartement(this.appartement).subscribe(
      (data) => { console.log(data), this.router.navigate(["list-appartement"]); },

      (error) => console.log(error)
    );
    this.appartement = new Appartement();

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
      accessKeyId: "AKIAXVWFAUBHFUM7UQ24",
      secretAccessKey: "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",
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
      accessKeyId: "AKIAXVWFAUBHFUM7UQ24",
      secretAccessKey: "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",
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
  }









}
