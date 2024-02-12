import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  randomVideoUrl: string = '';
  videoUrls: string[] = [
    '../assets/rising-sphere-blue-particles-floating-on-blue.mp4',
    
  ]

  //video: any = document.getElementById('bg-video') as HTMLVideoElement; 

  constructor(){
    console.log("constructor calling...")
  }

  ngOnInit() {
    this.getRandomVideoUrl();
  }

  ngAfterViewInit() {
    this.playVideo();
  }

  getRandomVideoUrl() {
      const randomIndex = Math.floor(Math.random() * this.videoUrls.length);
      this.randomVideoUrl = this.videoUrls[randomIndex];
  }

  async playVideo(){
       var video = await document.getElementById('bg-video') as HTMLVideoElement;
       video.play();
  }
}
