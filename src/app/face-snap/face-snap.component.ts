import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
title!:string;
description!:string;
createDate!:Date;
snaps!:number;
imgURL!: string;
buttonText!: string;

ngOnInit(){
  this.title = ' Freezer';
  this.description = ' Je deteste les sayans';
  this.createDate = new Date();
  this.snaps = 6;
  this.imgURL = 'https://i.pinimg.com/564x/85/96/37/8596379e5e203ec3987dd8eab9eda786.jpg'
  this.buttonText = 'Like';
  }

  onLike(){
    if(this.buttonText === 'Like') {
      this.snaps++;
      this.buttonText = 'Dislike';
    } else {
      this.snaps--;
      this.buttonText = 'Like';
    }
  }
}
