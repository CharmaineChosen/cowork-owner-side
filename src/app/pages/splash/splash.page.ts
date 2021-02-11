import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }
  ngAfterViewInit(){
    setTimeout(() => {
      this.router.navigate(["onboarding"]);
    },5000);
  }

  ngOnInit() {
  }

}
