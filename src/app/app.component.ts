import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  myLastSnap!:FaceSnap;

  ngOnInit() {
      this.mySnap = new FaceSnap(
        ' Freezer ',
        ' Je deteste les sayans',
        'https://i.pinimg.com/564x/85/96/37/8596379e5e203ec3987dd8eab9eda786.jpg',
         new Date(),
         0

      );
      this.myOtherSnap = new FaceSnap(
        ' Goku ',
        ' Je veux manger et me battre',
        'https://i.pinimg.com/564x/62/e9/26/62e926a90388189011b0e81a13b06349.jpg',
         new Date(),
         0

      );
      this.myLastSnap = new FaceSnap(
        ' Vegeta ',
        ' Je suis le prince des sayans',
        'https://i.pinimg.com/564x/f2/5e/37/f25e37c475d2e5e3f87e1fda5b58f788.jpg',
         new Date(),
         0

      );
  }
}
    
    
    
    