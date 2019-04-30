import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Updates',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Forumn',
      url: '/forumn',
      icon: 'chatbubbles'
    },
    {
      title: 'Symptoms',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Treatments',
      url: '/treaatments',
      icon: 'home'
    },
    {
      title: 'Find a Clinic',
      url: '/find-clinic',
      icon: 'medkit'
    },
    {
      title: 'Information center',
      url: '/info-center',
      icon: 'information-circle'
    },
    {
      title: 'Information center',
      url: '/info-center',
      icon: 'information-circle'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'logout'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person-add'
    },
    {
      title: 'Article',
      url: '/article',
      icon: 'paper'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
