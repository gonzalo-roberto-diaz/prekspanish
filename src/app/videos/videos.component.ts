import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos = new Map<string, boolean>();

  constructor() { 
  }

  onImageClicked(videoImage: HTMLDivElement){
    var videoId = videoImage.getAttribute('data-videoid');
    var newHtml =  '<iframe width="100%" height="100%" src="https://www.youtube\.com/embed/' + videoId + '">';
    videoImage.innerHTML = newHtml;
  }

  ngOnInit() {
  }

}
