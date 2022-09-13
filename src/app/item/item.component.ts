import { Component, Input, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  item:{
    url:string;
    title:string;
  }
  constructor(private youtube:YoutubeVideoPlayer) { }

  ngOnInit() {}

  view(link:any){
    console.log('https://www.youtube.com/watch?v='+link);
    this.youtube.openVideo('https://www.youtube.com/watch?v='+link);
  }


}
