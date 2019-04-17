import { Component, OnInit } from '@angular/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-find-clinic',
  templateUrl: './find-clinic.page.html',
  styleUrls: ['./find-clinic.page.scss'],
})
export class FindClinicPage implements OnInit {

  constructor(private launchNavigator: LaunchNavigator) { }

  ngOnInit() {
  }

  navigate(){
    this.launchNavigator.navigate("doctor");
  }
}