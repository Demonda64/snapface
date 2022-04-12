import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!: FaceSnap;
buttonText!: string;

constructor(private faceSnapsService : FaceSnapsService,
            private router:Router) {

}

ngOnInit(){
 
  this.buttonText = 'Like';
  }

  onLike(){
    if(this.buttonText === 'Like') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap' );
      this.buttonText = 'Dislike';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap' );
      this.buttonText = 'Like';
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
