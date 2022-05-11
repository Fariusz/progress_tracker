import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UploadPhotoService } from './upload-photo.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {
  
  imgFile: string;

  uploadForm = new FormGroup({
   name: new FormControl('', [Validators.required]),
   file: new FormControl('', [Validators.required]),
   imgSrc: new FormControl('', [Validators.required])
 });
 
 constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   
 get uf(){
   return this.uploadForm.controls;
 }
  
 onImageChange(e) {
   const reader = new FileReader();
   
   if(e.target.files && e.target.files.length) {
     const [file] = e.target.files;
     reader.readAsDataURL(file);
   
     reader.onload = () => {
       this.imgFile = reader.result as string;
       this.uploadForm.patchValue({
         imgSrc: reader.result
       });
  
     };
   }
 }
  
 upload(){
   console.log(this.uploadForm.value);

   this.httpClient.post(`${environment.APIEndpoint}/upload`, this.uploadForm.value)
     .subscribe(response => {
       console.log(response);
       alert('Image has been uploaded.');
     })
 }
 
}
