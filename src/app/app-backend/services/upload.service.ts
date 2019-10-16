import { Injectable } from '@angular/core';
// import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import {MatDialog} from '@angular/material';
import {DialogPopupComponent} from '../../app-widgets/common-widgets/dialog-popup/dialog-popup.component';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  public upStatusAWS: boolean;
    public FOLDER = 'Documents/';
    public errorMsg = {header: 'Upload Status !!!', content: 'Successfully Updated!!'};
  constructor(public dialog: MatDialog) { }

    uploadfileaws(file): boolean {
        const contentType = file.type;
        const bucket = new S3(
            {
                accessKeyId: 'AKIAVVSCL5RKP6LIPTHO',
                secretAccessKey: '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',
                region: 'us-east-2'
            }
        );
        const params = {
            Bucket: 'gtsdatabucket',
            Key: this.FOLDER + file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
       bucket.upload(params, (err, data) => {
            if (err) {
                console.log('There was an error uploading your file: ', err);
              this.upStatusAWS =  false;
                return false;
            }
            console.log('Successfully uploaded file.', data);
            this.upStatusAWS =  true;

            return true;
        });

 // for upload progress
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
        return this.upStatusAWS;
    }
}
