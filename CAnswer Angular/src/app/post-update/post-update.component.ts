import { Component, OnInit } from '@angular/core';
import { Article } from '@app/_models/article';
import { PostService } from '@app/_services/post.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  article: Article;
  selectedFile: File;
  newArticleForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  
  ngOnInit() {}

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  get f() { return this.newArticleForm.controls; }

  Submit() {
    this.f.title.value;
    console.log(this.f.title.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.newArticleForm.invalid) {
        return;
    }

    this.loading = true;
    this.article.createDate = new Date();
    this.article.pic = this.selectedFile;
    console.log(this.article);
  }
    public imagePath;
    imgURL: any;
    public message: string;
   
    preview(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }
}
