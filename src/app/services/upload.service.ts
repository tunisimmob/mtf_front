import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }




  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: 'AKIAXVWFAUBHPVQ7OO5C',
        secretAccessKey: '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',
        region: 'eu-west-3'
      }
    );
    const params = {
      Bucket: 'tunisie-immob',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
    //for upload progress
    /*bucket.upload(params).on('httpUploadProgress', function (evt) {
              console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
          }).send(function (err, data) {
              if (err) {
                  console.log('There was an error uploading your file: ', err);
                  return false;
              }
              console.log('Successfully uploaded file.', data);
              return true;
          });*/
  }








}
