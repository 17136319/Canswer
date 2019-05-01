import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-center',
  templateUrl: './info-center.component.html',
  styleUrls: ['./info-center.component.css']
})
export class InfoCenterComponent implements OnInit {
  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player: any;
  private ytEvent: any;

  constructor() { }
  onStateChange(event: { data: any; }) {
    this.ytEvent = event.data;
  }
  savePlayer(player: any) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }


  onSubmit() {
    alert('SUCCESS!! :-)\n\n');
  }

  ngOnInit() {
  }
}
