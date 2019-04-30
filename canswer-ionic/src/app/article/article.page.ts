import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  private post: any;
  constructor() { 
    // this.post = navParams.get('post');
  }


  goBack(){
    console.log("back clicked");
  }

  ngOnInit() {
  }

}
