import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() item: {videoTitle :string, videoImage :string, videoDescription :string[], videoUrl :string, showThumbnail :boolean};

  constructor() {}

  ngOnInit() {
  }

  onImageClicked(videoImage: HTMLDivElement){
    this.item.showThumbnail = false;
  }

}
