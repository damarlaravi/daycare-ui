import {Component, OnInit} from '@angular/core';
import {GalleryImage} from "../app.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public galleryImages: GalleryImage[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.galleryImages = [
      {
        url: '//img1.wsimg.com/isteam/stock/74pag1V/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/7734/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/xqgp9aG/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/akKKpGe/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/7736/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/w6N6VjB/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/xqgp9aG/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/3899/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/3688/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/7736/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/7727/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/1946/:/rs=w:600,cg:true,m'
      }, {
        url: '//img1.wsimg.com/isteam/stock/akKKpGe/:/rs=w:600,cg:true,m'
      }
    ]
  }

  public signupNav(): void {
    this.router.navigateByUrl('/event/events')
  }

  public attachResumeHandler(e: any): void {

  }

  public submitApplication(): void {

  }
}
